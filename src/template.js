export default ({ body, title, initialState }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
        <title>${title}</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0", shrink-to-fit=no>
        <meta name="theme-color" content="#000000">
        <meta charset="UTF-8">
        <meta name="description" content="Admin Panel Catarte">
        <meta name="keywords" content="Catering,Catarte,Comida,Restaurante,Food, Uniandes,Truck,HTML,CSS,XML,JavaScript,Mongo">
        <meta name="author" content="Juan Sebastian Cardona">
        <link rel="shortcut icon" href="public/favicon.ico">
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.min.css">
  <!-- Latest compiled and minified CSS -->
  <!-- Optional theme -->

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <script src="https://code.jquery.com/jquery-latest.min.js"
          type="text/javascript"></script>

  <script src="./public/js/bootstrap.min.js"  type="text/javascript"></script>
  <link rel="manifest" href="./public/manifest.json">
  <link rel="shortcut icon" href="./public/favicon.ico">
  <link rel="stylesheet" content-type="application/javascript" type="text/css" href="./public/css/bootstrap.css">
         <link rel="stylesheet" content-type="application/javascript" type="text/css" href="assets/style.css">
         
         
      </head>
      
      <body class="bgimg">
        <div id="root">${body}</div>
      </body>
      
      <script src="/assets/bundle.js"></script>
    </html>
  `;
};
