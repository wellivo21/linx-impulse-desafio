import { numToReais } from "./helpers.js";
import { getFormsData } from "./forms.js";

// Element selectors
const cardsEl = document.querySelector(".cards");
const allProductsEl = document.getElementsByClassName("card")
const moreProductsBtnEl = document.querySelector(".more-products-button");

const PRODUCTS_PER_LOAD = 8

// event listeners
const eventListeners = function() {
    // load products on button click
    moreProductsBtnEl.addEventListener("click", () => {
        const productsLoaded = allProductsEl.length;
    
        // "+ 1" because the first 8 products are already loaded.
        const pageToLoad = (productsLoaded / PRODUCTS_PER_LOAD) + 1
        loadCards(pageToLoad)
    })
}

const loadCards = async function(pageNumber = 1) {
    const cardData = async function() {
        try {
            const res = await fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${pageNumber}`)
            if (!res) throw new Error("Could not fetch any data. Please try again later")
    
            const data = await res.json()
            return data
        } catch(err) {
            const errorMarkup = "<p class='error-message'>Não conseguimos obter as informações dos produtos. Por favor, tente novamente em alguns segundos.</p>"
            cardsEl.classList.remove("cards");
            cardsEl.insertAdjacentHTML("beforeend", errorMarkup)
        }
    }

    try {
        const dataObj = await cardData();
        if (!dataObj) {
            throw new Error("Could not fetch any data for the products.");
        }
    
        const {products} = dataObj;
        products.forEach((product) => {
            const {description, image, name, oldPrice, price} = product
            
            const cardMarkup = 
            `
            <article class="card">
                <img src="${image}" alt="${name}">
        
                <div class="product-details">
                    <p class="product-title">
                        ${name}
                    </p>
                    <p class="product-description">
                        ${description}
                    </p>
            
                    <p class='product-price'>De: ${numToReais(oldPrice)}</p>
                    <p class='promotional-price'>
                        <strong>Por: ${numToReais(price)}</strong>
                    </p>
                    <p class='product-price'>ou 2x de ${numToReais((price/2).toFixed(2))}</p>
            
                    <button class='btn buy-button'>Comprar</button>
                </div>
            </article>
            `
    
            cardsEl.insertAdjacentHTML("beforeend", cardMarkup)
        })
    } catch(error) {
        console.error(error.message)
    }
}

const init = function() {
    loadCards();
    eventListeners();
    getFormsData();

}

init()
