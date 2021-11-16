var Inliner = require('inliner');
fs = require('fs');

new Inliner('http://localhost/html/patrickbenito.ml/', function (error, html) {
  // compressed and inlined HTML page
  console.log(html);

  fs.writeFile('patrick_benito_cv.html', html, function (err) {
    if (err) return console.log(err);
  });
});
