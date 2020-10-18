const express = require('express');
const { getJobList, deleteJobList, addJob } = require('./controller');
const app = express();

const port = 4000;

app.use(express.json());

app.get('/api/jobList', getJobList);
app.delete('/api/deleteJob/:id', deleteJobList);
app.post('/api/addJob', addJob);

app.listen(port, () => console.log(`I am working properly on ${port}`));