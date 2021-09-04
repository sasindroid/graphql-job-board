const db = require('./db');
const {companies} = require("./db");

const Query = {
  company: (root, args) => db.companies.get(args.id),
  job: (root, args) => db.jobs.get(args.id),
  jobs: () => db.jobs.list(),
};

const Company = {
  jobs: (company) => db.jobs.list().filter((job) => job.companyId === company.id )
};

const Job = {
  // each resolver receives an argument, in this case
  // 1st arg: parent object
  company: (job) => db.companies.get(job.companyId),
};

module.exports = { Query, Company, Job };
