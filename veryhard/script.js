function person(name, job, age) {
  this.name = name;
  this.job = job;
  this.age = age;
  this.exercise = function (exercise) {
    console.log(exercise + " is very tiring");
  };
  this.fetchJob = function (fetchJob) {
    console.log(this.name + " is a " + this.job);
  };
}

const vane = new person("vanessa", "developer", 23);
vane.exercise("running");

vane.fetchJob();

function Programmer(name, job, age, languages) {
  this.name = name;
  this.job = job;
  this.age = age;
  this.exercise = function (exercise) {
    console.log(exercise + " is very tiring");
  };
  this.fetchJob = function (fetchJob) {
    console.log(this.name + " is a " + this.job);
  };
  this.languages = languages;
}
