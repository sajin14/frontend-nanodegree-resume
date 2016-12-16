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

    "picture": "images/me.png",
    "message": "Experienced Web developer",
    "skills": ["HTML", "CSS", "JavaScript", "C++", "Java", "C#"],

    display: function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedbioPic = HTMLbioPic.replace("%data%", bio.picture);
        var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.message);
        $("#header").append(formattedbioPic);
        $("#header").append(formattedwelcomeMsg);
        $("#header").append(HTMLskillsStart);
        for (i = 0; i < bio.skills.length; i++) {
            var formattedskills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedskills);
        }
        $("#topContacts").prepend(formattedlocation);
        $("#topContacts").prepend(formattedtwitter);
        $("#topContacts").prepend(formattedgithub);
        $("#topContacts").prepend(formattedemail);
        $("#topContacts").prepend(formattedmobile);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#main").append(internationalizeButton);
    }
}


var work = {
    "jobs": [{
        "name": "TransCube Language Services",
        "Title": "project manager",
        "year": "2012-2016",
        "location": "Trivandrum",
        "desc": "The job includes interaction with the clients and assigning new project to the employees under me and delivery on time. "
    }],
    display: function() {
        for (i = 0; i < work.jobs.length; i++) {
            var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].name);
            var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].Title);
            var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[i].year);
            var formattedworklocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var FormattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].desc);
            var formattedEmployer = formattedworkEmployer + formattedworkTitle;
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(formattedEmployer);
            $(".work-entry:last").append(formattedworkDates);
            $(".work-entry:last").append(formattedworklocation);
            $(".work-entry:last").append(FormattedworkDescription);
        }
    }
}


var education = {
    "schools": [{
            "name": "Mar Baselios College of Engineering and Technology",
            "degree": "B.tech",
            "location": "Trivandrum",
            "year": "2012-2016",
            "major": "Computer Science"
        },

        {
            "name": "Crescent Central school",
            "degree": "12TH",
            "location": "Trivandrum",
            "year": "2009-2011",
            "major": "Computer Science"
        },


        {
            "name": "Crescent Central school",
            "degree": "10TH",
            "location": "Trivandrum",
            "year": "2008-2009",
            "major": "General"
        },
    ],
    "online": [{
        "title": "Front End Web Developer",
        "school": "Udacity",
        "year": "2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001?v=fe1"
    }],

    display: function() {
        for (i = 0; i < education.schools.length; i++) {
            var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].year);
            var formattedschoollocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").prepend(formattedschoolName);
            $(".education-entry:last").append(formattedschoolDegree);
            $(".education-entry:last").append(formattedschoolDates);
            $(".education-entry:last").append(formattedschoollocation);
            $(".education-entry:last").append(formattedschoolMajor);
        }

        $(".education-entry:last").append(HTMLonlineClasses);
        for (i = 0; i < education.online.length; i++) {
            var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.online[i].title);
            var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.online[i].school);
            var formattedonlineDates = HTMLonlineDates.replace("%data%", education.online[i].year);
            var formattedonlineURL = HTMLonlineURL.replace("%data%", education.online[i].url);
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedonlineTitle);
            $(".education-entry:last").append(formattedonlineSchool);
            $(".education-entry:last").append(formattedonlineDates);
            $(".education-entry:last").append(formattedonlineURL);
        }

    }
}

var projects = {
    project: [{
        "title": "Animal Trading card",
        "date": "2016",
        "desc": "Created animal trading card using HTML and CSS",
        "image": "images/card.jpg"
    }, {
        "title": "Portfolio Site",
        "date": "2016",
        "desc": "Created a Portfolio website which uses responsive web design",
        "image": "images/portfolio.jpg"
    }],

    display: function() {
        for (i = 0; i < projects.project.length; i++) {
            var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.project[i].title);
            var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.project[i].date);
            var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.project[i].desc);
            var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.project[i].image);
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(formattedprojectTitle);
            $(".project-entry:last").append(formattedprojectDates);
            $(".project-entry:last").append(formattedprojectDescription);
            $(".project-entry:last").append(formattedprojectImage);

        }
    }


}




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


$("#mapDiv").append(googleMap);

$('a').hover(function() {
        $(this).css("text-decoration", "underline")
    }, function() {
        $(this).css("text-decoration", "none");
    }

);

$('#projects img').css({
    'width': '300px',
    'max-height': '200px'
});
$('#footerContacts').append('<li class="zocial-facebook"><a href="https://www.facebook.com/sajin.kasim">Facebook</a></li>');
$('#footerContacts').append('<li class="zocial-googleplus"><a href="https://plus.google.com/u/0/105823067968552772626">Google+</a> </li>');