// contact info
let contact = {
    "email" : "lissagoforth@gmail.com",
    "phone" : "615-***-****",
    "twitter" : "@TBD",
    "linkedin" : "TBD",
    "github" : "https://github.com/lissagoforth"
}

// send contact info to local storage
contactString = JSON.stringify(contact)
localStorage.setItem("contact", contactString)

// resume/cv
const panera = {
    "name" : "Panera Bread",
    "address" : "1970 Old Fort Parkway Murfreesboro, TN 37129",
    "phone" : "615-217-2757",
    "duration" : "From 09/11 to 09/13",
    "responsibilities" : "Opening bakery, cash handling, customer satisfaction and general quality assurance."
}
const bMcNeels = {
    "name" : "B McNeel's Restaurant",
    "address" : "215 N Church St Murfreesboro, TN 37129",
    "phone" : "615-896-1002",
    "duration" : "From 10/13 to 06/14",
    "responsibilities" : "Maintaining cleanliness of the restaurant, assuring a quality experience for customers, working and communicating with associates to set the restaurant for private events."
}
const meltingPot = {
    "name" : "Melting Pot",
    "address" : "166 2nd Ave Nashville, TN 37201",
    "phone" : "615-742-4970",
    "duration" : "From 06/14 to 06/16",
    "responsibilities" : "FILLER TEXTFILLER TEXTFILLER TEXTFILLER TEXT"
}
const fourOneSevenUnion = {
    "name" : "417 Union",
    "address" : "417 Union St Nashville, TN 37219",
    "phone" : "615-401-7241",
    "duration" : "From 01/16 to 06/17",
    "responsibilities" : "FILLER TEXTFILLER TEXTFILLER TEXTFILLER TEXTFILLER TEXT"
}
const tavern = {
    "name" : "Tavern",
    "address" : "1904 Broadway Nashville, TN 37203",
    "phone" : "615-320-8580",
    "duration" : "From 06/17 to Present",
    "responsibilities" : "FILLER TEXTFILLER TEXTFILLER TEXTFILLER TEXTFILLER TEXTFILLER TEXT"
}

// Create work history database
let workHistory = []

workHistory.push(tavern)
workHistory.push(fourOneSevenUnion)
workHistory.push(meltingPot)
workHistory.push(bMcNeels)
workHistory.push(panera)

// send work history to local storage
const workHistoryString = JSON.stringify(workHistory)
localStorage.setItem("workHistory", workHistoryString)

// portfolio of projects (links to github? thumbnails of screenshots?)
//refactor to make projects an array of objects, include description of projects
const projects = {
    "uneven-chickens" : "https://github.com/nss-day-cohort-22/company-website-uneven-chickens",
    "lopsided-pelicans": "https://github.com/nss-day-cohort-22/company-website-part-deux-lopsided-pelicans",
    "personal-site" : "https://github.com/lissagoforth/lissagoforth.github.io"
}
projectsString = JSON.stringify(projects)
localStorage.setItem("projects", projectsString)

// blog articles
let blogArticles = JSON.parse(localStorage.getItem("blogArticles")) || [] 
// unique ID generator

