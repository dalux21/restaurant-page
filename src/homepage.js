const loadHome = () => {
    //Create Elements
    const aboutDiv = document.createElement('div')
    const ourStoryTitle = document.createElement('h3')
    const ourStoryParagraph = document.createElement('p')

    //Assign IDs and Classes
  
    aboutDiv.id = 'about'
    aboutDiv.classList.add('main-content')
    ourStoryParagraph.id = 'our-story'

    //Append Elements
    aboutDiv.appendChild(ourStoryTitle)
    aboutDiv.appendChild(ourStoryParagraph)


    //Add Content
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



}

export default loadHome