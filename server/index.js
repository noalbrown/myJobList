const express = require('express');
const { getJobList, deleteJobList } = require('./controller');
const app = express();

const port = 4000;

app.use(express.json());

app.get('/api/jobList', getJobList);
app.delete('/api/deleteJob/:id', deleteJobList);


app.listen(port, () => console.log(`I am working properly on ${port}`));