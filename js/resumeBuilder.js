var data = "%data%";
//bio object
var bio = {
    "name": "Sajin Kasim",
    "role": "Front End Web Developer",
    "contacts": {
        "mobile": "+91-9633634996",
        "email": "sajin_14@rediffmail.com",
        "github": "sajin14",
        "twitter": "@sajin14",
        "location": "Kerala"
    },

    "biopic": "images/me.png",
    "welcomeMessage": "Experienced Web developer",
    "skills": ["HTML", "CSS", "JavaScript", "C++", "Java", "C#"],

    display: function() {
        var formattedName = HTMLheaderName.replace(data, bio.name);
        var formattedRole = HTMLheaderRole.replace(data, bio.role);
        var formattedmobile = HTMLmobile.replace(data, bio.contacts.mobile);
        var formattedemail = HTMLemail.replace(data, bio.contacts.email);
        var formattedgithub = HTMLgithub.replace(data, bio.contacts.github);
        var formattedtwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
        var formattedlocation = HTMLlocation.replace(data, bio.contacts.location);
        var formattedbioPic = HTMLbioPic.replace(data, bio.biopic);
        var formattedwelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
        $("#header").append(formattedbioPic);
        $("#header").append(formattedwelcomeMsg);
        $("#header").append(HTMLskillsStart);
        for (i = 0; i < bio.skills.length; i++) {
            var formattedskills = HTMLskills.replace(data, bio.skills[i]);
            $("#skills").append(formattedskills);
        }
        $("#topContacts,#footerContacts").prepend(formattedlocation);
        $("#topContacts,#footerContacts").prepend(formattedtwitter);
        $("#topContacts,#footerContacts").prepend(formattedgithub);
        $("#topContacts,#footerContacts").prepend(formattedemail);
        $("#topContacts,#footerContacts").prepend(formattedmobile);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#main").append(internationalizeButton);
    }
};

//work object
var work = {
    "jobs": [{
        "employer": "TransCube Language Services",
        "title": "project manager",
        "location": "Trivandrum",
        "dates": "2012-2016",
        "description": "The job includes interaction with the clients and assigning new project to the employees under me and delivery on time. "
    }],
    //Display Function for work
    display: function() {
        for (i = 0; i < work.jobs.length; i++) {
            var formattedworkEmployer = HTMLworkEmployer.replace(data, work.jobs[i].employer);
            var formattedworkTitle = HTMLworkTitle.replace(data, work.jobs[i].title);
            var formattedworkDates = HTMLworkDates.replace(data, work.jobs[i].dates);
            var formattedworklocation = HTMLworkLocation.replace(data, work.jobs[i].location);
            var FormattedworkDescription = HTMLworkDescription.replace(data, work.jobs[i].description);
            var formattedEmployer = formattedworkEmployer + formattedworkTitle;
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(formattedEmployer);
            $(".work-entry:last").append(formattedworkDates);
            $(".work-entry:last").append(formattedworklocation);
            $(".work-entry:last").append(FormattedworkDescription);
        }
    }
};

//Education Object

var education = {
    "schools": [{
            "name": "Mar Baselios College of Engineering and Technology",
            "degree": "B.tech",
            "location": "Trivandrum",
            "dates": "2012-2016",
            "majors": ["Computer Science"],
            "url": "https://www.mbcet.ac.in"
        },

        {
            "name": "Crescent Central school",
            "degree": "12TH",
            "location": "Trivandrum",
            "dates": "2009-2011",
            "majors": ["Computer Science"],
            "url": "https://www.ccs.ac.in"
        },


        {
            "name": "Crescent Central school",
            "degree": "10TH",
            "location": "Trivandrum",
            "dates": "2008-2009",
            "majors": ["General"],
            "url": "https://www.ccs.ac.in"
        },
    ],
    "onlineCourses": [{
        "title": "Front End Web Developer",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001?v=fe1"
    }],
    //Display function for eduction
    display: function() {
        for (i = 0; i < education.schools.length; i++) {
            var formattedschoolName = HTMLschoolName.replace(data, education.schools[i].name);
            var formattedschoolDegree = HTMLschoolDegree.replace(data, education.schools[i].degree);
            var formattedschoolDates = HTMLschoolDates.replace(data, education.schools[i].dates);
            var formattedschoollocation = HTMLschoolLocation.replace(data, education.schools[i].location);
            var formattedschoolURL = HTMLonlineURL.replace(data, education.schools[i].url);
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedschoolName);
            $(".education-entry:last").append(formattedschoolDegree);
            $(".education-entry:last").append(formattedschoolDates);
            $(".education-entry:last").append(formattedschoollocation);
            for (j = 0; j < education.schools[i].majors.length; j++) {
                var formattedschoolMajor = HTMLschoolMajor.replace(data, education.schools[i].majors[j]);
                $(".education-entry:last").append(formattedschoolMajor);
            }
            $(".education-entry:last").append(formattedschoolURL);
        }
        $(".education-entry:last").append(HTMLonlineClasses);
        for (i = 0; i < education.onlineCourses.length; i++) {
            var formattedonlineTitle = HTMLonlineTitle.replace(data, education.onlineCourses[i].title);
            var formattedonlineSchool = HTMLonlineSchool.replace(data, education.onlineCourses[i].school);
            var formattedonlineDates = HTMLonlineDates.replace(data, education.onlineCourses[i].dates);
            var formattedonlineURL = HTMLonlineURL.replace(data, education.onlineCourses[i].url);
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedonlineTitle);
            $(".education-entry:last").append(formattedonlineSchool);
            $(".education-entry:last").append(formattedonlineDates);
            $(".education-entry:last").append(formattedonlineURL);
        }

    }
};

//project object

var projects = {
    projects: [{
        "title": "Animal Trading card",
        "dates": "2016",
        "description": "Created animal trading card using HTML and CSS",
        "images": ["images/card.jpg"]
    }, {
        "title": "Portfolio Site",
        "dates": "2016",
        "description": "Created a Portfolio website which uses responsive web design",
        "images": ["images/portfolio.jpg"]
    }],
    //Display function for project
    display: function() {
        for (i = 0; i < projects.projects.length; i++) {
            var formattedprojectTitle = HTMLprojectTitle.replace(data, projects.projects[i].title);
            var formattedprojectDates = HTMLprojectDates.replace(data, projects.projects[i].dates);
            var formattedprojectDescription = HTMLprojectDescription.replace(data, projects.projects[i].description);
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(formattedprojectTitle);
            $(".project-entry:last").append(formattedprojectDates);
            $(".project-entry:last").append(formattedprojectDescription);
            for (j = 0; j < projects.projects[i].images.length; j++) {
                var formattedprojectImage = HTMLprojectImage.replace(data, projects.projects[i].images[j]);
                $(".project-entry:last").append(formattedprojectImage);
            }
        }
    }


};



//Function for internationalizing name
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    console.log(name[1]);
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}


bio.display();
work.display();
education.display();
projects.display();

//Adding Map to Resume
$("#mapDiv").append(googleMap);

$('a').hover(function() {
        $(this).css("text-decoration", "underline");
    }, function() {
        $(this).css("text-decoration", "none");
    }

);
//Modifying CSS
$('#projects img').css({
    'width': '300px',
    'max-height': '200px'
});
//manipulating DOM using jQuery
$('#lets-connect').append('<ul class= "social flex-box"></ul>');
$('.social').append('<li class="zocial-facebook"><a href="https://www.facebook.com/sajin.kasim">Facebook</a></li>');
$('.social').append('<li class="zocial-googleplus"><a href="https://plus.google.com/u/0/105823067968552772626">Google+</a> </li>');
$(".project-entry,.education-entry,.work-entry").prepend('<hr>');