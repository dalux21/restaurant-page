
import initialPageLoad from './initial-page-load'
import loadHome from "./homepage"
import loadMenu from "./menu"
import loadContact from "./contact"


initialPageLoad()
loadHome()

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', tabClick)
})
function tabClick(e){

    const mainContent = document.querySelector('.main-content')
    mainContent.parentNode.removeChild(mainContent)

    switch (e.target.id) {
        case 'home-tab':
            loadHome()
            break
        case 'menu-tab':
            loadMenu()
        break;
        case 'contact-tab':
            loadContact()
    }
}
