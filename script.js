const card = document.querySelector('.card-wrapper');

fetch('https://dummyjson.com/products')
    .then(resolve => resolve.json())
    .then(data => {
        console.log(data);
        items = data.products;
        const idx = Math.abs(Math.floor(Math.random() * items.length-1));
        card.innerHTML = `
        <div class="card">
            <img class="image-top" src=${items[idx].images[0]} alt="${data[idx].title}">
            <div class="card-body">
                <h5 class="card-title">${items[idx].title}</h5>
                <p class="card-text">&#36;${items[idx].price}</p>
                <p class="card-stock">Hurry up only ${items[idx].price} items left!!!</p>
                <p class="card-rating">Ratings: ${items[idx].rating} &#9733;</p>   
            </div>
            <button class='addCart'>Add to cart</button>
        </div>`;
        const addCart = document.querySelector('.addCart');
        addCart.addEventListener("click", () => {
            alert("Please login to continue!!");
        })
    })

const login = document.querySelector('.login');
const signup = document.querySelector('.signup');
const login2 = document.querySelector('#login');
const signup2 = document.querySelector('#signup');
const home = document.querySelector('.home');
const myCart = document.querySelector('.myCart');
myCart.addEventListener('click',()=>{
    alert('Please login to continue!!!')
})

login2.addEventListener("click", () => {
    window.location.href = "./Login/login.html";
})

signup2.addEventListener("click", () => {
    window.location.href = "./Signup/signup.html";
})

if(window.localStorage.getItem('currentUser')){
    window.location.href = '../Landingpage/landingpage.html';
}