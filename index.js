let totalItems = 0;
let totalPrice = 0;

function addToCart(button) {
    const item = button.parentElement;
    const itemName = item.getAttribute('data-name');
    const itemPrice = parseFloat(item.getAttribute('data-price'));
    const itemImg = item.getAttribute('data-img');

    // Updating the cart item list
    const cartItems = document.getElementById('cart-items');
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `
        <img src="${itemImg}" alt="${itemName}">
        <span>${itemName}</span> - ₱<span>${itemPrice}</span>
    `;
    cartItems.appendChild(cartItem);

    // Updating the total item count and total price

    totalItems++;
    totalPrice += itemPrice;
    document.getElementById('total-item').textContent = totalItems;
    document.getElementById('total-price').textContent = totalPrice.toFixed(2) + '₱';

    // Update cart count
    document.getElementById('cart-count').textContent = totalItems;
}
``
function purchaseItems() {
    alert("Thank you for your purchase!");

    // Reset the cart
    totalItems = 0;
    totalPrice = 0;

    // Clearing the list of items
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    // Update the total items and total price display
    document.getElementById('total-item').textContent = totalItems;
    document.getElementById('total-price').textContent = totalPrice.toFixed(2) + '₱';

    // Update cart count
    document.getElementById('cart-count').textContent = totalItems;
}

function toggleCartDropdown() {
    const cartDropdown = document.getElementById('cart-dropdown');
    cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
}

//Resetting the searchbar
function searchBtn(){
    document.getElementById('searchBar').value = '';
}

document.getElementById('searchBar').addEventListener('keypress', function(event){
    
    if(event.KeyCode === 13){
        event.preventDefault();
       this.value ='';

    }
});


//LOGIN FUNCTIONS
//login prompt 
function loginFunc(){

    loginPrompt.style.display = loginPrompt.style.display === 'block' ? 'none' : 'block';

}

//promp login btn function
function loginBtnFunc() {

    document.getElementById('username').value ='';
    document.getElementById('password').value ='';

    loginPrompt.style.display = loginPrompt.style.display === 'block' ? 'none' : 'block';
}

function loginCancelBtnFunc() {
    document.getElementById('username').value ='';
    document.getElementById('password').value ='';

    loginPrompt.style.display = loginPrompt.style.display === 'block' ? 'none' : 'block';
}

//REGISTER FUNCTIONS

function registerFunc() {

    registerPrompt.style.display = registerPrompt.style.display === 'block' ? 'none' : 'block';
}

function registerBtnFunc() {

    document.getElementById('rUsername').value ='';
    document.getElementById('rPassword').value ='';
    document.getElementById('rEmail').value ='';

    registerPrompt.style.display = registerPrompt.style.display === 'block' ? 'none' : 'block';
}

function regCancelBtnFunc() {
    document.getElementById('rUsername').value ='';
    document.getElementById('rPassword').value ='';
    document.getElementById('rEmail').value ='';

    registerPrompt.style.display = registerPrompt.style.display === 'block' ? 'none' : 'block';

}