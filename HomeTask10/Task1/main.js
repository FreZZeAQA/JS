let form = document.getElementById(`f1`);

form.onsubmit = function (ev) {
    ev.preventDefault()
    const productInput = document.getElementById('productInput');
    let valueOfInput = productInput.value.trim();
    let blockCard = document.createElement('div')
    const htmlButtonElement = document.createElement("button");


    if (valueOfInput !== '') {
        blockCard.innerText = valueOfInput
        htmlButtonElement.innerText = 'x'
        htmlButtonElement.classList.add('x-button')
        document.body.appendChild(blockCard).appendChild(htmlButtonElement)

        htmlButtonElement.onclick = () => {
            document.body.removeChild(blockCard)
        }

    } else {
        alert('EMPTY DATA')
    }
}











