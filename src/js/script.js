const cardsEl = document.querySelector(".cards");
// colocar cada card dentro da div.cards



const cardData = async function() {
    // tentar mudar a querystring caso o botão para mostrar mais produtos seja clicado (de page=1 para page=2 e assim sucessivamente)
    try {
        const res = await fetch("https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1")
        if (!res) throw new Error("Could not fetch any data. Please try again later")

        const data = await res.json()
        return data
    } catch(err) {
        console.log(err.message)
    }
}

const loadCards = async function() {
    const dataObj = await cardData();
    const {nextPage, products} = dataObj 

    console.log(products)


    products.forEach((product) => {
        const {description, id, image, installments, name, oldPrice, price} = product
        

        const cardMarkup = 
        `
        <article class="card">
            <img src="${image}" alt="${name}">
    
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
        </article>
        `

        cardsEl.insertAdjacentHTML("beforeend", cardMarkup)

    })

}

// colocar num helper.js

const numToReais = function(number) {
    return new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(number)
}


const init = function() {
    loadCards();
}

init()
