// Display bio section //

var bio = {
  name: 'Brittany Wirtz',
  role: 'nanny',
  contacts: {
    mobile: '425-418-0671',
    email: '<a class="biolink" href="mailto:brittanyjhanson@gmail.com">brittanyjhanson@gmail.com</a>',
    github: '<a class="biolink" href="https://github.com/wirtzb3" target="_blank">wirtzb3</a>',
    location: 'Seattle'
  },
    biopic: 'images/fry.jpg',
    welcomeMessage: '"Be the Part"',
    skills: ['dealing with kiddos', 'sleeping', 'exercising', 'petting puppies']
};

bio.display = function() {
  var formattedRole = HTMLheaderRole.replace('%data%', 'Web Developer');
  $('#header').prepend(formattedRole);
  var formattedName = HTMLheaderName.replace('%data%', bio.name);
  $('#header').prepend(formattedName);
  var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
  $('#topContacts').append(formattedMobile);
  formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
  $('#topContacts').append(formattedEmail);
  formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
  $('#topContacts').append(formattedGithub);
  formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
  $('#topContacts').append(formattedLocation);
  formattedbioPic = HTMLbioPic.replace('%data%', bio.biopic);
  $('#header').append(formattedbioPic);
  formattedMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
  $('#header').append(formattedMessage);

  if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
      var formattedSkill = HTMLskills.replace('%data%', skill);
      $('#skills').append(formattedSkill);
    });
  }
};

bio.display();

// Display work experience section //


var work = {
  jobs: [
  {
    employer: 'Perry Household',
    title: 'Nanny',
    location: 'Wedgwood, Seattle, WA',
    dates: 'January 2016 - Current',
    description: 'Wrangler of two kiddos'
  },
  {
    employer: 'Moore Household',
    title: 'Household Manager/Nanny',
    location: 'Renton, WA',
    dates: 'February 2011 - June 2016',
    description: 'Childcare, cook, homework help, driver'
  },
  {
    employer: 'Ilgenfritz/Lamson Household',
    title: 'Nanny',
    location: 'North Beach, Seattle, WA',
    dates: 'January 2009 - August 2012',
    description: 'Three-kiddo controller'
  },
  {
    employer: 'Marysville Parks and Recreation',
    title: 'Athletic Assistant',
    location: 'Marysville, WA',
    dates: 'April 2005 - March 2012',
    description: 'Basketball/community events extraordinaire'
  },
  {
    employer: 'Marysville City Clerk Office',
    title: 'Office Assistant Intern',
    location: 'Marysville, WA',
    dates: 'Summer 2008',
    description: 'MUNIS worker/inventoried city record vault'
  },
  ]
};

work.display = function() {
  work.jobs.forEach(function(job) {
    $('#workExperience').append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
    var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $('.work-entry:last').append(formattedEmployerTitle);
    var formattedDates = HTMLworkDates.replace('%data%', job.dates);
    var formattedLocation = HTMLworkLocation.replace('%data%', job.location);
    var formattedDescription = HTMLworkDescription.replace('%data%', job.description);
    $('.work-entry:last').append(formattedLocation);
    $('.work-entry:last').append(formattedDates);
    $('.work-entry:last').append(formattedDescription);
  });
};

work.display();


// Display projects section //


var projects = {
  projects: [
  {
    title: 'Brittany\'s Portfolio',
    dates: 'August 20, 2016',
    description: 'Portfolio of Projects',
    images: ['images/fry.jpg']
  },
  {
    title: 'Animal Trading Cards',
    dates: 'July 20, 2016',
    description: 'Design a card referencing our favorite animal, with facts about the animal',
    images: ['images/fry.jpg']
  },
  {
    title: 'Mockup to Article',
    dates: 'July 15, 2016',
    description: 'Blog article into a website',
    images: ['images/fry.jpg']
  }
  ]
};

projects.display = function() {
  projects.projects.forEach(function(project) {
    $('#projects').append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
    $('.project-entry:last').append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace('%data%', project.dates);
    var formattedDescription = HTMLprojectDescription.replace('%data%', project.description);
    $('.project-entry:last').append(formattedDates);
    $('.project-entry:last').append(formattedDescription);

    if (project.images.length > 0) {
      project.images.forEach(function(image) {
        var formattedImage = HTMLprojectImage.replace('%data%', image);
        $('.project-entry:last').append(formattedImage);
      });
    }
  });
};

projects.display();


// Display education section //


var education = {
  onlineCourses: [
    {
    title: 'Front-End Web Developer Nanodegree',
    school: 'Udacity',
    dates: 'June 2016-March 2017',
    url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
    },
    {
    title: 'Javascript',
    school: 'Codecademy',
    dates: 'June 2015 - September 2015',
    url: 'https://www.codecademy.com/learn/javascript'
    },
    {
    title: 'HTML & CSS',
    school: 'Codecademy',
    dates: 'January 2015 - March 2015',
    url: 'https://www.codecademy.com/learn/web'
    }
  ],
 schools: [
  {
    name: 'University of Washington',
    location: 'Seattle, WA',
    degree: 'Bachelor of Science',
    dates: '2007-2011',
    url: 'http://www.washington.edu/',
    majors: ['Molecular, Cellular, and Developmental Biology']
  }
  ]
};

education.display = function() {
  education.schools.forEach(function(school) {
    $('#education').append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace('%data%', school.name);
    $('.education-entry:last').append(formattedName);
    var formattedDegree = HTMLschoolDegree.replace('%data%', school.degree);
    $('.education-entry:last').append(formattedDegree);
    var formattedDates = HTMLschoolDates.replace('%data%', school.dates);
    $('.education-entry:last').append(formattedDates);
    var formattedLocation = HTMLschoolLocation.replace('%data%', school.location);
    $('.education-entry:last').append(formattedLocation);
    var formattedMajors = HTMLschoolMajor.replace('%data%', school.majors);
    $('.education-entry:last').append(formattedMajors);
  });

  $('.education-entry:last').append(HTMLonlineClasses);
  education.onlineCourses.forEach(function(course) {
    var formattedName = HTMLonlineTitle.replace('%data%', course.title);
    $('.education-entry:last').append(formattedName);
    var formattedSchool = HTMLonlineSchool.replace('%data%', course.school);
    $('.education-entry:last').append(formattedSchool);
    var formattedDates = HTMLonlineDates.replace('%data%', course.dates);
    $('.education-entry:last').append(formattedDates);
    var formattedURL = HTMLonlineURL.replace('%data%', course.url);
    $('.education-entry:last').append(formattedURL);
  });
};

education.display();


// Display footer contact information //


var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
$('#footerContacts').append(formattedMobile);
formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
$('#footerContacts').append(formattedEmail);
formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
$('#footerContacts').append(formattedGithub);
formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
$('#footerContacts').append(formattedLocation);


// Click tracker //


$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});


// Internationalize Name //


$('#main').append(internationalizeButton);
var inName = function(name) {
  var nameSplit = name.split(' ');
  var firstName = nameSplit[0].toLowerCase();
  firstName = firstName[0].toUpperCase() + firstName.slice(1);
  var lastName = nameSplit[1].toUpperCase();
  return firstName + ' ' + lastName;
};


// Display Google Maps Locations //


$('#mapDiv').append(googleMap);
initializeMap();
