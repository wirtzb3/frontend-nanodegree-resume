/*
This is empty on purpose! Your code to build the resume will go here.
 */
var formattedName = HTMLheaderName.replace("%data%", "Brittany Wirtz");

$("#header").prepend(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$("#header").append(formattedRole);

var bio = {
  name: "Brittany Wirtz",
  role: "nanny",
  contacts: {
    mobile: "425-418-0671",
    email: "brittanyjhanson@gmail.com",
    github: "wirtzb3",
    location: "Seattle"
  },
    biopic: "images/fry.jpg",
    welcomeMessage: "Hello world",
    skills: ["kids ", "HTML/CSS ", "fitness"]
}

$("#main").append(bio.name + ' ');
$("#main").append(bio.role + ' ');
$("#main").append(bio.contacts.mobile + ' ');
$("#main").append(bio.contacts.email + ' ');
$("#main").append(bio.contacts.github + ' ');
$("#main").append(bio.contacts.location + ' ');
$("#main").append(bio.picture);
$("#main").append(bio.welcomeMessage + ' ');
$("#main").append(bio.skills);

var work = {};
work.currentJob = "nanny";
work.yearsWorked = 8;
work.city = "Seattle";

var education = {};
education["name"] = "University of Washington";
education["years"] = "2007-2011";
education["city"] = "Seattle, WA, US";

$("#main").append(work["currentJob"]);
$("#main").append(education.name);

var projects = {
  projects:["Portfolio", "Animal Trading Cards"]
}

var education = {
  "schools": [
  {
    "name": "Udacity",
    "city": "Online",
    "degree": "Web Development",
    "major": "Front-End Web Developer"
  },
  {
    "name": "University of Washington",
    "city": "Seattle",
    "degree": "BS",
    "major": "Molecular, Cellular, and Developmental Biology"
  }
  ]
}
