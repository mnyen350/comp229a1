const express = require('express');

// create the router
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'About Me' });
});

router.get('/contactme', function(req, res, next) {
  res.render('contactme', { title: 'Contact Me' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

//
// projects
//

router.get('/projects', function(req, res, next) {
  res.render('projects', { 
    title: 'Projects', 
    project: ''
  });
});

router.get('/conquer', function(req, res, next) {
  res.render('projects', { 
    title: 'Projects', 
    project: 'conquer'
  });
});

router.get('/bomberman', function(req, res, next) {
  res.render('projects', { 
    title: 'Projects', 
    project: 'bomberman'
  });
});

router.get('/dungeoncrawler', function(req, res, next) {
  res.render('projects', { 
    title: 'Projects', 
    project: 'dungeoncrawler'
  });
});

module.exports = router;
