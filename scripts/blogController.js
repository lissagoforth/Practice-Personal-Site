// Sort the articles by their `id` property, descending
blogArticles.sort((prev, next) => next.id - prev.id)

//create generator function to generate unique ids for new blog articles
const blogIdGenerator = function* (from) {
    let uniqueId = 1
  
    while (true) {
        yield from + uniqueId
        uniqueId ++
    }
}

//after sort [0] is the most recent article
const lastId = blogArticles[0] || { id: 0 }
const articleUniqueId = blogIdGenerator(lastId.id)

// Create instance of generator
const blogIdFactory = blogIdGenerator()

// Factory function that returns a blog article object
const blogObjectFactory = function (title, entry, date, ...tags) {
    return Object.create(null, {
        'id': { value: articleUniqueId.next().value, enumerable: true },
        'title': { value: title, enumerable: true },
        'body': { value: entry, enumerable: true },
        'published': { value: date, enumerable: true },
        'tags': { value: tags, enumerable: true }
    })
}

//Pull blog articles from local storage and write to DOM when page loads
const articleHolder = document.getElementById('blogArticle')
let addBlogArticle = function() {
    articleHolder.innerHTML = ''
    blogArticles.forEach(article =>
        articleHolder.innerHTML += `
  <article class="newBlogArticle" id="blog_${article.id}"><strong>${article.title}</strong><br>
  ${article.body} <br> <strong>Tags: ${article.tags}</strong> <br> <strong>Published: ${article.published}</strong><br>
  <button id="delete_${article.id}">Delete</button><button id="edit_${article.id}">Edit</button>
  </article>
  `)
  
}

// add event listener to post button where on click, adds input from form (title, entry, tags, publish date) and creates new blog article.
let buttonEl = document.getElementById('postBtn')

buttonEl.addEventListener('click', function(event) {

    let blogTitle = document.getElementById('blogTitle')
    let blogEntry = document.getElementById('blogEntry')
    let blogDate = document.getElementById('blogDate')
    let blogTags = document.getElementById('blogTags')
    let form = document.getElementById('blogForm')
  
    //Build blog object
    let blogObject= blogObjectFactory(blogTitle.value, blogEntry.value, blogDate.value, blogTags.value)

    //push to blogArticle array
    blogArticles.unshift(blogObject)

    totalItems = blogArticles.length

    storeArticles(blogArticles)

    // resets form upon clicking post button
    form.reset()

})

function storeArticles(blogArticles) {
  
    //stringify and add to local storage
    const blogString = JSON.stringify(blogArticles)
    localStorage.setItem('blogArticles', blogString)
 
    //add to DOM
    addBlogArticle()
}

// When the user clicks the Delete button, the containing article, and no other articles, 
// should then be removed from the DOM. 
deleteBtn = document.getElementById('blogArticle')
deleteBtn.addEventListener('click', function(event) {
    if (event.target.id.startsWith('delete_')) {
        let uniqueId = event.target.id.split('_')[1]
        let parent = document.getElementById('blogArticle')
        let child = document.getElementById(`blog_${uniqueId}`)
        parent.removeChild(child)  
    }

})

//add sepreate button to clean out test blog articles
cleanBtn.addEventListener('click', function(event) {
  
    let removeBlogArticle = blogArticles.filter(function(el) {
        return el.title.indexOf('test') === -1

    })

    // save to local storage
    storeArticles(removeBlogArticle)
})

