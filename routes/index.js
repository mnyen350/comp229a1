/*
  FileName: index.js
  Author: Minh Nguyen
  ID:301317346
  Date:9-30-2023
*/

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

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

//
// contact
//

router.get('/contactme', function(req, res, next) {
  res.render('contactme', { title: 'Contact Me' });
});

router.post('/contact', function(req, res, next) {
  console.log('--- Contact ---');
  console.log('query', req.query);
  console.log('params', req.params);
  console.log('body', req.body);
  console.log('--- End Contact ---');
  res.redirect('/');
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
