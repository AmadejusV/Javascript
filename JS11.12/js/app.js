let shoppingCart = ['Ram', 'Hdd', 'etc'];
shoppingCart = localStorage.setItem('shoppingList', shoppingCart);
shoppingCart = JSON.stringify(localStorage.getItem(shoppingCart));
shoppingCart = JSON.parse(shoppingCart)

// localStorage.removeItem('shoppingList');

console.log(localStorage.getItem('shoppingList'));