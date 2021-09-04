const db = require('./db');

const Query = {
  jobs: () => db.jobs.list(),
};

const Job = {
  // each resolver receives an argument, in this case
  // 1st arg: parent object
  company: (job) => db.companies.get(job.companyId),
};

module.exports = { Query, Job };
