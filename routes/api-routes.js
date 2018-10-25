// Import in our db models
const db = require('../models');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  // API Requests for /api/products
  // Below code controls what happens when a request is made to /api/products

  // GET Request
  // Responds with all products
  app.get('/api/products', function(req, res) {
    db.Product.findAll({}).then(function(rows) {
      res.json(rows)
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  // POST Request
  // Adds a new product to our database
  // Responds with the newly insert data on success.
  app.post('/api/products', function(req, res) {
    db.Product.create(req.body).then(function(rows) {
      res.json(rows);
    }).catch(function(error) {
      res.json({ error: error })
    });
  });

  // API Requests for /api/products/:id
  // Below code controls what happens when a request is made to /api/products/:id

  // GET Request
  // Responds with just the requested product at the referenced id
  app.get('/api/products/:id', function(req, res) {
    db.Product.find({ where: { id: req.params.id }})
      .then(function(data){
        res.json(data);
      }).catch(function(error) {
        res.json({ error: error });
      });
  });

  // PUT Request
  // Replaces the product at the referenced id with the one provided
  // Responds with success: true or false if successful
  app.put('/api/products/:id', function(req, res) {
    db.Product.update(
      req.body,
      { where: { id: req.params.id } }
    ).then(function(data) {
      res.json({ success: true, data: data });
    }).catch(function(error) {
      res.json({ success: false, error: error });
    });
  });

  // DELETE Request
  // Removes the product at the referenced id
  // Responds with success: true or false if successful
  app.delete('/api/products/:id', function(req, res) {
    db.Product.destroy({ 
      where: { id: req.params.id } 
    }).then(function(data) {
      res.json({ success: true, data: data });
    }).catch(function(error) {
      res.json({ success: false, error: error });
    });
  });

}
