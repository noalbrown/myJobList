let jobList = require('./jobList.json');

module.exports = {
  getJoblist: (req, res) => {
    res.status(200).send(jobList);
  }
}