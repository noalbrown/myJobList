const express = require('express');
const { getJobList } = require('./controller');
const app = express();

const port = 4000;

app.use(express.json());

app.get('/api/jobList', getJobList)
// app.get('/api/backpack/:id', getBackpackItem)
// app.post('/api/backpack', createBackpackItem)
// app.put('/api/backpack/edit/:id', editBackpack)
// app.delete('/api/backpack/:id', deleteBackpackItem)
// app.delete('/api/backpack', resetBackpack)


app.listen(port, () => console.log(`I am working properly on ${port}`));