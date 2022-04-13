function match(candidate, job) {
  console.log(candidate.minSalary)
  console.log(job.maxSalary)
  if(candidate.minSalary == undefined || job.maxSalary === undefined ){
    return error
  }else if(candidate.minSalary*90/100 <= job.maxSalary ){
    return true
  }else {
    return false
  }
  // is this job a valid match for the candidate?
}
