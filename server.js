'use strict';

import express, { static } from 'express';
import { json, urlencoded } from 'body-parser';
import { expect } from 'chai';
import cors from 'cors';
require('dotenv').config();

import apiRoutes from './routes/api.js';
import fccTestingRoutes from './routes/fcctesting.js';
import { run } from './test-runner';

const express , static = require('express')
let app = express();

app.use('/public', static(process.cwd() + '/public'));

app.use(cors({origin: '*'})); //For FCC testing purposes only

app.use(json());
app.use(urlencoded({ extended: true }));

//Index page (static HTML)
app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
  });

//For FCC testing purposes
fccTestingRoutes(app);

//Routing for API 
apiRoutes(app);  
    
//404 Not Found Middleware
app.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('Not Found');
});

const port = process.env.PORT || 3000;

//Start our server and tests!
app.listen(port, function () {
  console.log("Listening on port " + port);
  if(process.env.NODE_ENV==='test') {
    console.log('Running Tests...');
    setTimeout(function () {
      try {
        run();
      } catch(e) {
          console.log('Tests are not valid:');
          console.error(e);
      }
    }, 1500);
  }
});

export default app; //for testing
