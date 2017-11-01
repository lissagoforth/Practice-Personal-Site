// Add pagination element
let totalItems = blogArticles.length
const itemsPerPage = 5
const numberOfPages = Math.ceil(totalItems / itemsPerPage)
const paginationEl = document.getElementById("paginator")
const blogEl = document.getElementById("blogArticle")

// Build DOM string for pagination links
let paginationString = "<ul>"
paginationString += "<a id='previous' href='#'>&lt;</a>"
for (var i = 0; i < numberOfPages; i++) {
    paginationString += ` <li><a class="blogPage page-${i+1}" href="#">${i+1}</a></li>`
}
paginationString += " <a id='next' class='page-2' href='#'>&gt;</a>"
paginationString += "</ul>"

// Update DOM with the unordered list we just built
paginationEl.innerHTML = paginationString

// Store references to the next and previous arrows we just added
const previousEl = document.getElementById("previous")
const nextEl = document.getElementById("next")

//create function that will run when a pagination link is clicked on
function blogPageMaker (event) {
  // clear page of displayed blogs
  blogEl.innerHTML = ""

  //what pagination link was clicked?
  
  //Steve did this on cheese pagination. Convert DOMTokenList to array
  const classes = event.target.classList
  const classArray = Array.from(classes)

  //find the class we want by matching class name that begins with 'page-'
  const targetClass = classArray.find(clazz => {
    if (clazz.startsWith('page-')) return clazz
  })

  //split class into an array on the dash
   const pageNumberArray = targetClass.split('-')
  
  //get the page number
  thePageNumber = pageNumberArray[1]

  //convert string to number
  integerPageNumber = parseInt(thePageNumber)

  const pageNumber = parseInt(
    Array.from(event.target.classList).find(clazz => {
      if (clazz.startsWith('page-')) return clazz
    }).split("-")[1]
  )
  // change class name of previous arrow to the following page number of current page 
  if ((pageNumber - 1) === 0) {
    previousEl.style.display = "none"
  } else {
    previousEl.style.display = "inline"
    previousEl.className = `page-${pageNumber - 1}`
  }
  
  // change class name of next arrow to the following page number of current page 
  if ((pageNumber + 1) > numberOfPages) {
    nextEl.style.display = "none"
  } else {
    nextEl.style.display = "inline"
    nextEl.className = `page-${pageNumber + 1}`
  }
  //Determine which items to display by slicing the array
  const itemsToDisplay = blogArticles.slice(
    (pageNumber - 1) * itemsPerPage, 
    pageNumber * itemsPerPage
  )
   // Display a <section> representation of each data object
   for (let i = 0; i < itemsToDisplay.length; i++) {
    let  currentBlogArticle = itemsToDisplay[i];
    blogEl.innerHTML += `
    <article class="newBlogArticle" id="blog_${currentBlogArticle.id}"><strong>${currentBlogArticle.title}</strong><br>
    ${currentBlogArticle.body} <br> <strong>Tags: ${currentBlogArticle.tags}</strong> <br> <strong>Published: ${currentBlogArticle.published}</strong><br>
    <button id="delete_${currentBlogArticle.id}">Delete</button><button id="edit_${currentBlogArticle.id}">Edit</button>
    </article>
    `
   }
}
// get array of pagination links
const blogLinks = document.getElementsByClassName("blogPage")

//add event listeners to each pagination link
for (let j = 0; j < blogLinks.length; j++) {
  let thisBlogEl = blogLinks[j];
  thisBlogEl.addEventListener("click", blogPageMaker, false);
}
blogPageMaker({
  "target": {
    "classList": ["page-1"]
  }
})
previousEl.addEventListener("click", blogPageMaker)
nextEl.addEventListener("click", blogPageMaker)
