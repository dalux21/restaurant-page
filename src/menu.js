const loadMenu = () => {
    
    const createMenuItem = (itemName, ingredientsList) => {
        
        const getItemName = () => itemName
        const getIngredientsList = () => ingredientsList.join(', ')
      
            return {getItemName, getIngredientsList}
        
        }

const menu = []
    
        //Menu Items (Name + array of Ingredients)
        const margherita = createMenuItem('Pizza Margherita', ['Tomato', 'mozzarella', 'basil'])
        const lasagna = createMenuItem('Lasagna', ['Tomato', 'mozzarella','bechamel', 
        'bolognese sauce', 'parmesan'])
        const ravioli = createMenuItem('Ravioli', ['Ricotta stuffing', 'tomato sauce', 'basil'])
        
menu.push(margherita, lasagna, ravioli)

function renderMenu(){
    const content = document.getElementById('content')

    //Menu Div
    const menuDiv = document.createElement('div')
    menuDiv.id = 'menu'    
    menuDiv.classList.add('main-content')
    
    //Menu List Elements
    const menuList = document.createElement('ul')
    menuList.id = 'menu-list'
    content.appendChild(menuDiv)   
    menuDiv.appendChild(menuList)

    //List menu items on page:

    menu.forEach(item => {
        //Create li element
        const listItem = document.createElement('li')

        //Append to ul list
        menuList.appendChild(listItem)

        //Load random unsplash image corresponding to first word of menu item
        const randomUnsplashPhoto = '<img src="https://source.unsplash.com/150x150/?' + item.getItemName().split(' ')[0] + '" />'

        //Display li with image + item name + ingredient list.
        listItem.innerHTML = randomUnsplashPhoto +'<div class="menu-group"><span class="menu-item-name">' + 
        item.getItemName() + 
        '</span> </br>' + item.getIngredientsList() + '</div>'
    });
}

renderMenu()

}
  
    export default loadMenu