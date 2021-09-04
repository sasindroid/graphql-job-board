const db = require('./db');

const Query = {
  company: (root, args) => db.companies.get(args.id),
  job: (root, args) => db.jobs.get(args.id),
  jobs: () => db.jobs.list(),
};

const Job = {
  // each resolver receives an argument, in this case
  // 1st arg: parent object
  company: (job) => db.companies.get(job.companyId),
};

module.exports = { Query, Job };
