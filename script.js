const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input").
generateBtn = wrapper.querySelector(".form button").
qrImg = wrapper.querySelector(".qr- code img");
let preValue;

generateBtn.addEventlitener ("click", () => {
    let qrValue = qrInput.value.trim();
    if(!qrValue ||  preValue === qrValue) return;
    preValue  = qrValue;
    generateBtn.innerText = "Generation QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventlitener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventLitener("keyup", () => {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
})