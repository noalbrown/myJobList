let jobList = require('./jobList.json');

module.exports = {
  getJobList: (req, res) => {
    res.status(200).send(jobList);
  },

  deleteBackpackItem: (req, res) => {
    const { id } = req.params

    let index = jobList.findIndex(e => e.id === +id)
    jobList.splice(index, 1)
    if (!index) {
      return res.status(404).send('Could not delete')
    }
    res.status(200).send(jobList)
  }
}