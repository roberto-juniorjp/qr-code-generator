//VARIABLES
const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img");

// FUNCTIONS

//Gerador de QR Code
function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value;
    if(!qrCodeInputValue) return;
    qrCodeBtn.innerText = "Gerando o Código...";

    //Chamada a API Geradora de QR Code
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
    })
    
}

// EVENTS

// Escutar Clique do Botão
qrCodeBtn.addEventListener("click", () => {
    generateQrCode();
})

// Escutar Enter
qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter")
        generateQrCode();
})

// Limpar QR Code
qrCodeInput.addEventListener("keyup", () => {
    if(!qrCodeInput.value) {
        container.classList.remove("active");
        qrCodeBtn.innerText = "Gerar QR Code";
    }
});