const loadContact = () => {
const content = document.getElementById('content')
const contactDiv = document.createElement('div')
const map = document.createElement('div')
map.id = 'map'
contactDiv.id = "contact"
contactDiv.classList.add('main-content')
contactDiv.textContent = 'Tiko\'s, Varah Square, Choti Basti. Pushkar 305022 (RJ), India.'
map.innerHTML = `<div class="mapouter"><div class="gmap_canvas"><iframe width="500" height="300" 
id="gmap_canvas" src="https://maps.google.com/maps?q=Tikos&t=&z=17&ie=UTF8&iwloc=&output=embed" 
frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://youtube-embed-code.com">
</a><br><style>.mapouter{height:400px;width:700px;}</style><a href="https://www.embedgooglemap.net">
</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:400px;width:700px;}</style></div></div>`
contactDiv.appendChild(map)
content.appendChild(contactDiv)


}

export default loadContact