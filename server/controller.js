let jobList = require('./jobList.json');
let id = jobList[jobList.length - 1].id + 1

module.exports = {
  getJobList: (req, res) => {
    res.status(200).send(jobList);
  },

  deleteJobList: (req, res) => {
    const { id } = req.params

    let index = jobList.findIndex(e => e.id === +id)
    jobList.splice(index, 1)
    if (!index) {
      return res.status(404).send('Could not delete')
    }
    res.status(200).send(jobList)
  },

  addJob: (req, res) => {
    const { companyName, jobTitle } = req.body
    console.log(req.body)
    let newJobListing = { id, companyName, jobTitle }
    console.log(jobList)
    jobList.push(newJobListing)
    console.log(jobList)
    id++
    if (!newJobListing) {
      return res.status(404).send('Did Not Work')
    }
    res.status(200).send(jobList)
  }
}