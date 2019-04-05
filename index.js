
const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('./knexfile').development; // importing from knexfile 

const db = knex(knexConfig);

const server = express();

server.use(helmet());
server.use(express.json());
//******* */
// list all projects
server.get('/api/projects', async (req, res) => {
    // get the projects from the database
    try {
      const projects = await db('projects'); // all the records from the table
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
  // list a project by id
  server.get('/api/projects/:id', async (req, res) => {
    // get the projects from the database
    try {
      const project = await db('projects')
        .where({ id: req.params.id })
        .first();
      res.status(200).json(project);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
  const errors = {
    '19': 'Another record with that value exists',
  };
  
  // create projects
  server.post('/api/projects', async (req, res) => {
    try {
      const [id] = await db('projects').insert(req.body);
  
      const project = await db('projects')
        .where({ id })
        .first();
  
      res.status(201).json(project);
    } catch (error) {
      const message = errors[error.errno] || 'We ran into an error';
      res.status(500).json({ message, error });
    }
  });
  // update projects
  server.put('/api/projects/:id', async (req, res) => {
    try {
      const count = await db('projects')
        .where({ id: req.params.id })
        .update(req.body);
  
      if (count > 0) {
        const project = await db('projects')
          .where({ id: req.params.id })
          .first();
  
        res.status(200).json(project);
      } else {
        res.status(404).json({ message: 'Records not found' });
      }
    } catch (error) {}
  });
// displaying actions by project
  server.get("/api/projects/:id/actions", async (req, res) => {
    try {
      const project = await db('projects')
      .where({ id: req.params.id })
      const actions = await db("actions")
      .where({ project_id: req.params.id })
      .first();
      const kk = {project, actions}
      res.status(200).json(kk);
    } catch (error) {
      res.status(500).json(error);
    }
  });
//****** */
// Actions//
server.get('/api/actions', async (req, res) => {
  // get the actions from the database
  try {
    const actions = await db('actions'); // all the records from the table
    res.status(200).json(actions);
  } catch (error) {
    res.status(500).json(error);
  }
});
server.get('/api/actions', async (req, res) => {
  // get the actions from the database
  try {
    const actions = await db('actions'); // all the records from the table
    res.status(200).json(actions);
  } catch (error) {
    res.status(500).json(error);
  }
});

// list a action by id
server.get('/api/actions/:id', async (req, res) => {
  // get the actions from the database
  try {
    const project = await db('actions')
      .where({ id: req.params.id })
      .first();
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json(error);
  }
});

// create actions
server.post('/api/actions', async (req, res) => {
  try {
    const [id] = await db('actions').insert(req.body);

    const action = await db('actions')
      .where({ id })
      .first();

    res.status(201).json(action);
  } catch (error) {
    const message = errors[error.errno] || 'We ran into an error';
    res.status(500).json({ message, error });
  }
});
// update actions
server.put('/api/actions/:id', async (req, res) => {
  try {
    const count = await db('actions')
      .where({ id: req.params.id })
      .update(req.body);

    if (count > 0) {
      const project = await db('actions')
        .where({ id: req.params.id })
        .first();

      res.status(200).json(project);
    } else {
      res.status(404).json({ message: 'Records not found' });
    }
  } catch (error) {}
});


const port = process.env.PORT || 2000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);
