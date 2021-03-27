const loadMenu = () => {
    
    const createMenuItem = (itemName, ingredientsList) => {
        
        const getItemName = () => itemName
        const getIngredientsList = () => ingredientsList.join(', ')
      
            return {getItemName, getIngredientsList}
        
        }

    const menu = []
    
        const margherita = createMenuItem('Pizza Margherita', ['tomato', 'mozzarella', 'basil'])
        const lasagna = createMenuItem('Lasagna', ['fresh pasta sheet','tomato', 'mozzarella','bechamel', 
        'bolognese sauce', 'parmesan'])
        const ravioli = createMenuItem('Ravioli', ['Ricotta stuffing', 'tomato sauce', 'basil'])
        
menu.push(margherita, lasagna, ravioli)

function renderMenu(){
    const content = document.getElementById('content')
    //Menu Div
    const menuDiv = document.createElement('div')
    menuDiv.id = 'menu-div'    
    
    //Menu List
    const menuList = document.createElement('ul')
    menuList.id = 'menu-list'
    content.appendChild(menuDiv)   
    menuDiv.appendChild(menuList)

    //List of Items
    menu.forEach(item => {
        const listItem = document.createElement('li')
        listItem.id = 'menu-item-' + item.getItemName()
        menuList.appendChild(listItem)
        listItem.innerHTML = item.getItemName() + '</br>' + item.getIngredientsList()
    });
}

renderMenu()

}

    
    export default loadMenu