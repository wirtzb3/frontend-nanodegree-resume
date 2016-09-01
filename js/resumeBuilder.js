/*
This is empty on purpose! Your code to build the resume will go here.
 */
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
    skills: ["kids ", "HTML/CSS ", "fitness", "petting puppies"]
}

var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);

$("#header").prepend(formattedName);
$("#main").append(bio.contacts.mobile + ' ');
$("#main").append(bio.contacts.email + ' ');
$("#main").append(bio.contacts.github + ' ');
$("#main").append(bio.contacts.location + ' ');
$("#main").append(bio.picture);
$("#main").append(bio.welcomeMessage + ' ');


if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
}

var work = {
  "jobs": [
  {
    "employer": "Perry Household",
    "title": "Nanny",
    "location": "Wedgwood, Seattle, WA",
    "dates": "January 2016 - Current",
    "description": "Wrangler of two kiddos"
  },
  {
    "employer": "Moore Household",
    "title": "Household Manager/Nanny",
    "location": "Renton, WA",
    "dates": "February 2011 - June 2016",
    "description": "Childcare, cook, homework help, driver"
  },
  {
    "employer": "Ilgenfritz/Lamson Household",
    "title": "Nanny",
    "location": "North Beach, Seattle, WA",
    "dates": "January 2009 - August 2012",
    "description": "Three-kiddo controller"
  },
  {
    "employer": "Marysville Parks and Recreation",
    "title": "Athletic Assistant",
    "location": "Marysville, WA",
    "dates": "April 2005 - March 2012",
    "description": "Basketball/community events extraordinaire"
  },
  {
    "employer": "Marysville City Clerk Office",
    "title": "Office Assistant Intern",
    "location": "Marysville, WA",
    "dates": "Summer 2008",
    "description": "MUNIS worker/inventoried city record vault"
  },
  ]
}

function displayWork() {

for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);
  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedDates);
  $(".work-entry:last").append(formattedDescription);
}
}
displayWork();

var projects = {
  "projects": [
  {
    "title": "Brittany's Portfolio",
    "dates": "August 20, 2016",
    "description": "Portfolio of Projects",
    "images": ["image1", "image2", "image3"]
  },
  {
    "title": "Animal Trading Cards",
    "dates": "July 20, 2016",
    "description": "Design a card referencing our favorite animal, with facts about the animal",
    "images": ["image4", "image5", "image6"]
  },
  {
    "title": "Mockup to Article",
    "dates": "July 15, 2016",
    "description": "Blog article into a website",
    "images": ["image7", "image8", "image9"]
  }
  ]
}

var education = {
  "onlineCourses": [
    {
    "title": "Front-End Web Developer Nanodegree",
    "school": "Udacity",
    "dates": "June 2016-March 2017",
    "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
    "title": "Javascript",
    "school": "codecademy",
    "dates": "June 2015 - September 2015",
    "url": "https://www.codecademy.com/learn/javascript"
    },
    {
    "title": "HTML & CSS",
    "school": "codecademy",
    "dates": "January 2015 - March 2015",
    "url": "https://www.codecademy.com/learn/web"
    }
  ],
 "schools": [
  {
    "name": "University of Washington",
    "location": "Seattle",
    "degree": "Bachelor of Science",
    "dates": "2007-2011",
    "url": "http://www.washington.edu/",
    "majors": ["Molecular Biology", "Cellular Biology", "Developmental Biology"]
  }
  ]
}

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});
