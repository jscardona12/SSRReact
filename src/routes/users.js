var express = require('express');
var router = express.Router();
const User = require('../models/user_model');
var path = require('path');
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../app/components/index';
import template from '../template';
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/* GET users listing. */
//router.get('/', function(req, res, next) {
//  res.send('respond with a resource');
//});
router.get('/', function (req, res, next) {

    User.findById(req.session.userId)
        .exec(function (error, user) {
            const u = user;
            if (error) {
                return next(error);
            } else {
                if (user === null) {
                    const path = "Home";
                    const user = null;
                    const initialState = { path,user };
                    const appString = renderToString(<App {...initialState} />);
                    res.send(template({
                        body: appString,
                        title: 'Admin Panel Home',
                        initialState: JSON.stringify(initialState)
                    }));
                } else {
                    const msg = {
                        to: 'js.cardona64@gmail.com',
                        from: 'juans.cardona@catarte.com.co',
                        subject: 'Sending with SendGrid is Fun',
                        text: 'and easy to do anywhere, even with Node.js',
                        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
                    };
                    sgMail.send(msg);
                    console.log(req.session.userId);

                    const path = "Home"
                    console.log(user);
                    const initialState = { path,user };
                    const appString = renderToString(<App {...initialState} />);

                    res.send(template({
                        body: appString,
                        title: 'Admin Panel Home',
                        initialState: JSON.stringify(initialState)
                    }));
                }
            }
        });


});

//POST route for updating data
router.post('/', function (req, res, next) {
    // confirm that user typed same password twice

    console.log(req.body);

    if (req.body.email &&
        req.body.nombres &&
        req.body.password &&
        req.body.apellidos &&
        req.body.role) {

        var userData = {
            nombres: req.body.nombres,
            apellidos: req.body.apellidos,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        }
        console.log(userData);

        User.create(userData, function (error, user) {
            if (error) {
                console.log(error);
                return next(error);
            } else {
                req.session.userId = user._id;
                return res.redirect('/profile');
            }
        });

    } else if (req.body.logemail && req.body.logpassword) {
        User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
            if (error || !user) {
                var err = new Error('Wrong email or password.');
                err.status = 401;
                return next(err);
            } else {
                req.session.userId = user._id;
                return res.redirect('/platos');
            }
        });
    } else {
        var err = new Error('All fields required.');
        err.status = 400;
        return next(err);
    }
});

router.get('/platos', function (req, res, next) {
    User.findById(req.session.userId)
        .exec(function (error, user) {
            if (error) {
                return next(error);
            } else {
                if (user === null) {
                    var err = new Error('Not authorized! Go back and LogIn');
                    err.status = 400;
                    return next(err);
                } else {
                    const path = "Platos"
                    console.log(user);
                    const initialState = { path,user };
                    const appString = renderToString(<App {...initialState} />);

                    res.send(template({
                        body: appString,

                        title: 'Admin Panel Platos',
                        initialState: JSON.stringify(initialState)
                    }));
                }
            }
        });
});

// GET /logout
router.get('/logout', function(req, res, next) {
    if (req.session) {
        // delete session object
        req.session.destroy(function(err) {
            if(err) {
                return next(err);
            } else {
                return res.redirect('/');
            }
        });
    }
});

module.exports = router;
