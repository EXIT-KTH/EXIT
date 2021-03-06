function getLanguage() {
    const lang = {
        button:{
            submit: "Submit",
            add: "Add",
            remove: "Remove"
        },
        access: {
            message: "You do not have the access rights for this page! Login or get higher privilege from admin"
        },
        home: {
            title: "Welcome to EXIT!",
            paragraph0: "This is a system for directors of studies, examiners and students at KTH. It keeps track of how much of an examiners working hours are to be given to tutoring of degree projects, which examiners that are available to tutor degree projects, how much tutoring hours each examiner has left on the current budget year and each examiner's degree projects.",
            paragraph1: "When you log out of the system you only log out from EXIT. If you want to log out from KTH SAML (Security Assertion Markup Language) you need to close the browser.",
            paragraph2: "If you have any problems with the system press the help button."
        },
        footer: {
            title: "KTH Royal Institute of Technology 2020."
        },
        profile: {
            title: "Profile",
            paragraph0: "This page shows how many tutoring hours you are supposed to use for tutoring of degree projects the current year and how many tutoring hours you have left. " +
                "Please specify a work area so that students can see what your main work area is.",
            competenceArea: "Area of competence",
            competenceAreaInfo: "Enter a general comment or you expertise area that will be shown to the students.",
            competenceAreaPlaceholder: "Enter you area of competence. You may describe it with words or just write the area.",
            totalExaminerHours: "Amount of tutoring hours as examiner",
            reamainingExaminerHours: "Remaining tutoring hours as examiner",
            totalSupervisorHours: "Amount of tutoring hours as supervisor",
            reamainingSupervisorHours: "Remaining tutoring hours as supervisor",
            hours: " hours.",
            edit: "Edit",
            save: "Save",
            fail: "Something went wrong, could not load profile.",
            budgetYearFail: "Something went wrong. It could be that the director of studies hasn't added you to that budget year.",
            saved: "Your Area of competence was saved.",
            saveFaild: "Something went wrong and you competence could not be saved.",
            addComment: "Add comment"

        },
        degreeProject: {
            company: "Company",
            info: "Info",
            persons: "Persons",
            outDated: "Outdated",
            inProgess: "In progress",
            edit: "Edit project",
            delete: "Delete",
            projectDeleted: "The project was successfully deleted!",
            projectDeletedFail: "The project could not be deleted!",
            updateSuccess: "The projects was updated",
            updateFail :"The project could not be updated try again.",
            submit: "Submit",
            student: "Student",
            supervisor: "Supervisor",
            examiner: "Examiner",
            projectRole: "Project role",
            pickSupervisor: "Pick supervisor",
            supervisorPlaceholder: "Press the button to see supervisors",
            comments: "Comments",
            comment: "Comments of the project:",
            commentInfo: "Add you comments here to describe something that happend or something else in the project.",
            finnished: "Check the box to mark the project as finnished.",
            status: "Project status"

        },
        addDegreeProject: {
            title: "Add degree project to my annual quota",
            paragraph0: "This page is used for adding a project to your annual quota. The estimated time the degree projct will take will be removed from your remaining time. Be sure to specify if you are a tutor or examiner of the project.",
            numOfStudents: "Number of students",
            numOfStudentsPlaceholder: "Specify number of students for the project.",
            projectDescription: "Project description",
            projectDescriptionPlaceholder: "Please fill in general information about the project.",
            credits: "Project type",
            creditsPlaceholder: "Enter the type of the project.",
            startDate: "Start date",
            startDatePlaceholder: "Press to enter start date.",
            endDate: "End date",
            endDatePlaceholder: "Press to enter end date.",
            companyName: "Company name",
            companyNamePlaceholder: "Enter the name of the company",
            companyAddress: "Company address",
            companyAddressPlaceholder: "Enter the address of the company",
            companyPhone: "Company telephone number",
            companyPhonePlaceholder: "Enter the telephone number of the company",
            sumbit: "Add project",
            today: "Today",
            projectTitle: "Title",
            projectTitlePlaceholder: "Enter the title of the project",
            addStudent: "Add student",
            removeStudent: "Remove student",
            studentName: "Student name",
            studentNamePlaceholder: "Enter full name of the student",
            kthUsername: "KTH username",
            kthUsernamePlaceholder: "Enter KTH username.",
            supervisor: "Supervisor (change start date to change available supervisors)",
            supervisorPlaceholder: "Enter start date to see available supervisors",
            added: "The project was added to your quota",
            fail: "Error, The project was not added to your quota",
            getFail: "Error could not fetch the supervisors",
            pickSupervisor: "Pick supervisor",
            bachleorProject: "Bachelor project",
            masterProject: "Master project",
            projectTitleInfo: "Enter the title pf the project",
            startDateInfo: "Enter the start date of the project.",
            endDateInfo: "Enter the deadline of the project.",
            creditsInfo: "Choose if the project is a master project or a bachelor project.",
            supervisorInfo: "Choose the supervisor of the project, the available supervisors will show up in the list. Make sure that you picked the right year in the start date.",
            studentNameInfo: "Enter the full name of the student. This name will later be shown in the project information. It's not mandatory to add the student name to the project.",
            kthUsernameInfo: "Enter the KTH username of the student. A new user will be created if the student can not be found in the system.",
            projectDescriptionInfo: "Describe the project in your own words. You have a limit of 1000 characters.",
            companyNameInfo: "Enter the full name of the company that is providing the project. It's not mandatory to add a company to the project.",
            companyAddressInfo: "Enter the address of the company that is providing the project. It's not mandatory to add a company to the project.",
            companyPhoneInfo: "Enter the phone number of the company that is providing the project. It's not mandatory to add a company to the project.",
        },
        specifiedBudgetYears: {
            title: "Specified budget years",
            paragraph0: "This table shows all parameters for all specified budget years.",
            paragraph1: "Budget years",
            budgetYear: "Budget year",
            masterHoursExaminer: "Master hours examiner",
            masterHoursSupervisor: "Master hours supervisor",
            bachleorHoursExaminer: "Bachelor hours examiner",
            bachleorHoursSupervisor: "Bachelor hours supervisor",
            masterHoursExaminerPlaceholder: "Amount of hours for examiner in master project",
            masterHoursSupervisorPlaceholder: "Amount of hours for supervisor in master project",
            bachleorHoursExaminerPlaceholder: "Amount of hours for examiner in bachelor project",
            bachleorHoursSupervisorPlaceholder: "Amount of hours for supervisor in bachelor project",
            totalTutoringHours: "Total tutoring hours",
            factor2: "Factor two",
            factor3: "Factor three",
            factor4: "Factor four",
            factor5: "Factor five",
            factor1: "Factor one",
            fail: "Something went wrong and the budget years could not be fetched."
        },
        addBudgetYear: {
            title: "Add budget year",
            paragraph0: "Here you can add a budget year, specify how many tutoring hours an examiner should use for tutoring degree projects " +
                "and specify factors that the hours are going to be multiplied with if the number of students exceeds one. Hover the title to get specific info.",
            submit: "Submit",
            budgetYearPlaceholder: "Enter the year of the buget",
            masterHoursPlaceholder: "Enter amount of hours for a master project",
            bachleorHoursPlaceholder: "Enter amount of hours for a bachelor project",
            totalTutoringHoursPlaceholder: "Enter the total amount of tutoring hours",
            factor2Placeholder: "Factor two students",
            factor3Placeholder: "Factor three students",
            factor4Placeholder: "Factor four students",
            factor5Placeholder: "Factor five students",
            factor1Placeholder: "Factor one students",
            added: "The budget year was added to the database.",
            fail: "Something went wrong, the budget year was not added to the database.",
            addExaminer: "Add examiner",
            budgetYearInfo: "Enter the year of the budget year you want to add.",
            masterHoursExaminerInfo: "Enter the default time to spend on one master project as an examiner.",
            masterHoursSupervisorInfo: "Enter the default time to spend on one master project as an supervisor.",
            bachleorHoursExaminerInfo: "Enter the default time to spend on one bachelor project as an examiner.",
            bachleorHoursSupervisorInfo: "Enter the default time to spend on one bachelor project as an supervisor.",
            factor2Info: "The factor that will calculate the needed time if there are two students in a project.",
            factor3Info: "The factor that will calculate the needed time if there are three students in a project.",
            factor4Info: "The factor that will calculate the needed time if there are four students in a project.",
            factor5Info: "The factor that will calculate the needed time if there are five students in a project."
        },
        addExaminer: {
            title: "Add examiner or supervisor",
            paragraph0: "Please insert the username of the name of the person you want to add as a examiner. The username is the same as the email but without \"@kth.se\".",
            kthUsername: "KTH username",
            kthUsernamePlaceholder: "Enter the KTH username of the examiner or supervisor you want to add",
            added: "The user was added as examiner.",
            fail: "Something went wrong the user was not added as a examiner.",
            kthUsernameInfo: "Enter the kth username of the person you want to add as an examiner."

        },
        specifyTutoringHours: {
            title: "Specify tutoring hours",
            paragraph0: "This table shows all available examiners in the system. " +
                "You can add an examiner to a specific budget year by choosing the budget year, " +
                "examiner mail and define the number of hours the examiner is supposed to use " +
                "to tutor degree projects during the selected budget year. "+
                "If the user has the name 'null null' it hasn't logged in to the site.",
            bugetYear: "Budget Year",
            budgetYearPlaceholder: "Enter the buget year you want to add the examiner/examiners to.",
            username: "User",
            usernamePlaceholder: "KTH user",
            examinerHours: "Examiner hours according to budget year",
            supervisorHours: "Supervisor hours according to budget year",
            examinerHoursPlaceholder: "Amount of hours to be examiner.",
            supervisorHoursPlaceholder: "Amount of hours to be supervisor.",
            getBudgetYearFail: "Something went wrong could not fetch budget years.",
            success: "The user/users wsa added to the budget year.",
            budgetYearInfo: "Select the year from the list you want to add examiners and supervisors to.",
            usernameInfo: "Enter the kth username of the examiner or supervisor you want to add hours to.",
            examinerHoursInfo: "Enter the amout of hours the user should spend as examiner this budget year.",
            supervisorHoursInfo: "Enter the amout of hours the user should spend as supervisor this budget year."
        },
        header: {
            home: "Home",
            login: "Login",
            logout: "Logout",
            profile: "Profile",
            examiner: "Examiner services",
            directorsOfStudiesTasks: "Director of stuides services",
            swe: "SWE",
            eng: "ENG",
            loginError: "Invaild password/username",
            kth: "KTH EECS Electrum EXIT",
            help: "Help",
            availableExaminsers: "Current available Examiners",
            addDegreeProject: "Add degree project to my annual quota",
            myDegreeProjects: "My degree projects",
            addBudgetYear: "Add budget year",
            specifiedBudgetYears: "Specified budget years",
            addExaminer: "Add examiner",
            specifyTutoringHours: "Specify tutoring hours",
            addDirectorOfStudies: "Add director of studies",
            directorsOfStudies: "Directors of studies",
            

        },
        help: {
            title: "Help",
            paragraph0: "At this page you can get help if you have problems with the system.",
            paragraph1: "Logging into the system.",
            paragraph2: "To be able to log into the system you need to have a valid KTH account. " +
                "If you have an account and you still can not log in, the problem is not in the KTH-EXIT system. " +
                "If that is the case, you need to contact KTH administration."
        },
        availableExaminers: {
            title: "Current available examiners",
            subtitle: "This table shows all available examiners for the current calendar year.",
            budgetYear: "Budget year ",
            firstName: "First name",
            lastName: "Last name",
            email: "Email",
            competenceArea: "Competence area",
            fail: "Something went wrong, could not fatch the examiners.",
            changeYear: "Change year"
        },
        myDegreeProjects: {
            title: "My degree projects",
            paragraph0: "This table shows all of you existing degree projects. If you press a link you can view specific degree project information for a selected degree project or mark a degree project as finished/cancelled (this will remove the degree project from your view but not from the database).",
            credits: "Credits",
            degreeTitle: "Preliminary title/description",
            numOfStudents: "Number of students",
            startDate: "Start date",
            endDate: "End date",
            project: "Project information",
            withinTimeLimit: "Within time limit",
            fail: "Something went wrong could not load your projects.",
            info: "Info"
        },
        directorsOfStudies: {
            title: "Directors of studies",
            paragraph0: "This table shows all existing directors of studies in the system",
            lastName: "Last name",
            firstName: "First name",
            email: "Email",
            fail: "Something went wrong and the directors could not be fetched."
        },
        addDirectorOfStudies: {
            title: "Add director of studies",
            paragraph0: "Please insert the username of the name of the person you want to add as a director of studies. The username is the same as the email but without \"@kth.se\".",
            usernamePlaceholder: "Enter the username of the user you want to make as director of studies.",
            username: "Username",
            usernameInfo: "Enter the KTH username of the user you want to make director of studies.",
            submit: "Submit",
            added: "The user was added as director of studies",
            fail: "Something went wrong and the user was not add as director of studies",
            getFail:"Something went wrong could not fetch examiners"
        },
        general: {
            loading: "Loading...",
            error: "oops something went wrong!",
            yes: "Yes",
            no: "No",
            email: "Email",
            name: "Name",
            sessionFail: "You have been idle for to long please login again."
        },
        budgetYear: {
            getFail: "Something went wrong could not load budget years"
        }
    }
    return lang;
}
module.exports = {
    getLanguage,
}