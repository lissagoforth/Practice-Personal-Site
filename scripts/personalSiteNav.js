{
    const nav = [
        {
            "display": "Home"
        },
        {
            "display": "Resume"
        },
        {
            "display": "Portfolio"
        },
        {
            "display": "Blog"
        },
        {
            "display": "Contact"
        }
    ]

    // Get the `ul` to which I will add `li` children
    const navEl = document.getElementsByClassName("navList")[0]

    nav.forEach(function(el) {
        // Create a new `li`
        const newNavItem = document.createElement("li")

        // Add a class to the `li`
        newNavItem.className = "navList__link"

        // Create an `a` tag as a child of the `li`
        const newLink = document.createElement("a")
        newLink.href = "#"
        newLink.className = `navList__link--${el.display.toLowerCase()}`
        newLink.appendChild(document.createTextNode(el.display))

        // When any section is clicked, 
        newLink.addEventListener("click", function(event) {
            const sectionName = event.target.className.split("--")[1]
            const sectionEl = document.getElementById(sectionName)

            // Add `hidden` class to all main sections
            Array.from(document.getElementsByClassName("main"))
                .forEach(
                    section =>
                        section.classList.add("hidden")
                )

            // Then remove it from the one the user clicked on
            sectionEl.classList.remove("hidden")
        })

        newNavItem.appendChild(newLink)

        // Add `li` to the navigation `ul`
        navEl.appendChild(newNavItem);
    })
        
}