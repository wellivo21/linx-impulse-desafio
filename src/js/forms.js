/**
 * Summary. Gets the form data from "algoritmo-form"
 */
const algoritmoFormData = function() {
    const algoritmoFormEl = document.querySelector(".algoritmo-form");

    // inputs selectors
    const nome = document.querySelector("#nome");
    const email = document.querySelector("#email");
    const cpf = document.querySelector("#cpf");
    const gender = document.getElementsByName("sexo")

    algoritmoFormEl.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = {
            nome: nome.value,
            email: email.value,
            cpf: cpf.value,
            gender: gender[0].checked ? "masculino" : gender[1].checked ? "feminino" : ""
        }
        console.log(formData)
    })
}

/**
 * Summary. Gets the form data from "share-form"
 */
const compartilheFormData = function() {
    const shareFormEl = document.querySelector(".share-form");

    // inputs selectors
    const amigoNome = document.querySelector("#amigo-nome");
    const emailNome = document.querySelector("#amigo-email");

    shareFormEl.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = {
            nome: amigoNome.value,
            email: emailNome.value
        }
        console.log(formData)
    })
}

/**
 * Summary. Executes the algoritmoFormData and compartilheFormData functions.
 */
const getFormsData = function() {
    algoritmoFormData();
    compartilheFormData()
}

export {getFormsData}
