
const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('./knexfile').development; // importing from knexfile 

const db = knex(knexConfig);

const server = express();

server.use(helmet());
server.use(express.json());

const port = process.env.PORT || 2000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);
