module.exports = (app) => {
  
  var bodyParser = require('body-parser'),
      urlencodedParser = bodyParser.urlencoded({extended: false}),
      dbConnect = require('.db-connect');
  
  app.get('/', (req, res) => {
    res.render('index', {thisPage: 'index'});
    console.log(`Request: ${req.url}, status: ${res.statusCode} - ${res.statusMessage}`);
  });

  app.get('/index', (req, res) => {
    res.render('index', {thisPage: 'index'});
    console.log(`Request: ${req.url}, status: ${res.statusCode} - ${res.statusMessage}`);
  });
  
  app.get('/contacts', (req, res) => {
    res.render('contacts', {qs: req.query});
    console.log(`Request: ${req.url}, status: ${res.statusCode} - ${res.statusMessage}`);
    console.log(req.body);
  });
  
  app.post('/contacts', urlencodedParser, (req, res) => {
    res.render('contacts', {qs: req.query});
    console.log(`Request: ${req.url}, status: ${res.statusCode} - ${res.statusMessage}`);
    console.log(req.body);
  });

  app.get('/article-new', (req, res) => {
    Article.find({}, (err, data) => {
      if (err) throw err;
      res.render('add-article', {packs: data});
    });
    console.log(`Request: ${req.url}, status: ${res.statusCode} - ${res.statusMessage}`);
  });
  
  app.post('/article-new', urlencodedParser, (req, res) => {
    var newArticle = Article(req.body).save((err, data) => {
      if (err) throw err;
      res.json(data);
    });
    res.render('add-article');
    console.log(`Request: ${req.url}, status: ${res.statusCode} - ${res.statusMessage}`);
  });
  
  app.delete('/article/:item', (req, res) => {
    Article.find({item: req.params.item.replace(/\-/g, ' ')}).remove((err, data) => {
      if (err) throw err;
      res.json(data);
    });
  });
  
  app.get('*', (req, res) => {
    res.render('404');
    console.log(`Request: ${req.url}, status: ${res.statusCode} - ${res.statusMessage}`);
  });

  
};