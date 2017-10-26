//Pull contact info from local storage
const Contact = JSON.parse(localStorage.getItem("contact"))
const contactElement = document.getElementsByClassName("contact")[0]
// write contact info to html from local storage
contactElement.innerHTML = `
<h4 class=email>Email: ${Contact['email']}</h4>
<h4 class=phone>Phone: ${Contact['phone']}</h4>
<h4 class=twitter>Twitter: ${Contact['twitter']}</h4>
<h4 class=linkedin>LinkedIn: ${Contact['linkedin']}</h4>
<h4 class=github>GitHub: ${Contact['github']}</h4>
`
//Pull work history form local storage
const WorkHistory = JSON.parse(localStorage.getItem("workHistory"))
const jobElement = document.getElementsByClassName('work-history')[0]
// name phone duration responsibilites address
for (let i = 0; i < WorkHistory.length; i++) {
        let element = WorkHistory[i];
        jobElement.innerHTML += `
        <section><h3>${element.name}</h3>
        <p><strong>Address: </strong>${element.address}</p>
        <p><strong>Phone: </strong>${element.phone}</p>
        <p><strong>Duration: </strong>${element.duration}</p>
        <p><strong>Responsibilities: </strong>${element.responsibilities}</p>
        </section> 
        `
    }       
//Pull projects from local storage
//refactor after projects object is changed to an array
const Projects = JSON.parse(localStorage.getItem("projects"))
const projectEl = document.getElementsByClassName("portfolio")[0]
//Write portfolio to html
projectEl.innerHTML = `
<h4>NSS Group Project 1: <a href="${projects['uneven-chickens']}">Uneven Chickens</a></h4>
<h4>NSS Group Project 2: <a href="${projects['lopsided-pelicans']}">Lopsided Pelicans</a></h4>
<h4>NSS Personal Site: <a href="${projects['personal-site']}">Personal Site</a></h4>
` 
