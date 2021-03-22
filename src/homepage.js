const loadHome = () => {
    //Create Elements
    const content = document.getElementById('content')
    const header = document.createElement('div')
    const h1Title = document.createElement('h1')
    const h2Title = document.createElement('h2')
    const aboutDiv = document.createElement('div')
    const ourStoryTitle = document.createElement('h3')
    const ourStoryParagraph = document.createElement('p')

    //Assign IDs and Classes
    header.id = 'header'
    aboutDiv.id = 'about'
    ourStoryParagraph.id = 'our-story'
    content.classList.add('tabsy')

    //Append Elements
    content.appendChild(header);
    header.appendChild(h1Title);
    header.appendChild(h2Title);
    content.appendChild(aboutDiv)
    aboutDiv.appendChild(ourStoryTitle)
    aboutDiv.appendChild(ourStoryParagraph)


    //Add Content
    h1Title.textContent = 'Tiko\'s'
    h2Title.textContent = 'All About Food.'
    ourStoryTitle.textContent = 'Our Story'
    ourStoryParagraph.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Ac turpis egestas integer eget aliquet nibh. 
    Et malesuada fames ac turpis egestas sed. Iaculis urna id volutpat lacus laoreet non curabitur gravida. 
    Tellus in metus vulputate eu scelerisque felis. Quam quisque id diam vel quam elementum pulvinar etiam non. 
    Neque egestas congue quisque egestas diam in arcu. Non consectetur a erat/ nam at lectus urna. 
    Velit ut tortor pretium viverra suspendisse potenti nullam ac. Enim eu turpis egestas pretium aenean. 
    Elementum curabitur vitae nunc sed velit. Velit ut tortor pretium viverra suspendisse. 
    Vitae auctor eu augue ut lectus. Et netus et malesuada fames ac turpis egestas sed.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Elementum integer enim neque volutpat ac tincidunt vitae.`

    //Create navigation
        function createNavBar(){
            const navBar = document.createElement('nav')
            
            //Create Tab Links
            const navTabs = {
            home : document.createElement('div'),
            menu : document.createElement('div'),
            contact : document.createElement('div')
            }

            //Loop through the navTabs objects
            const entries = Object.entries(navTabs)
            for (const [name, element] of entries) {
                element.classList.add('nav-link')
                element.textContent = name
                element.id = name + '-tab'
                navBar.appendChild(element)
            }

        aboutDiv.prepend(navBar)
    }

    createNavBar()
}

export default loadHome