const createJob = async (req, res) => {
  res.send('create job')
}

const deleteJob = async (req, res) => {
  res.send('delete job')
}

const updateJob = async (req, res) => {
  res.send('update job')
}

const getAllJobs = async (req, res) => {
  res.send('getAllJobs')
}
const showStats = async (req, res) => {
  res.send('showStats')
}

export { createJob, deleteJob, getAllJobs, updateJob, showStats }
