const algoritmoFormData = function(formEl) {
    const nome = document.querySelector("#nome");
    const email = document.querySelector("#email");
    const cpf = document.querySelector("#cpf");
    const gender = document.getElementsByName("sexo")
    formEl.addEventListener("submit", (event) => {
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

const compartilheFormData = function(formEl) {
    const amigoNome = document.querySelector("#amigo-nome");
    const emailNome = document.querySelector("#amigo-email");
    formEl.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = {
            nome: amigoNome.value,
            email: emailNome.value
        }
        console.log(formData)
    })
}

export {algoritmoFormData, compartilheFormData}
