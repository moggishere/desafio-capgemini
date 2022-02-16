const desafio02 = (str) => {
    let message = '';
    let missingStr = 0;
    let passwordScore = 0;
    // let val = new RegExp(
    //     "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()-+]).+$"
    // );

    let valLowercase = new RegExp(
        "^(?=.*[a-z]).+$"
    );

    let valUppercase = new RegExp(
        "^(?=.*[A-Z]).+$"
    );

    let valSpecial = new RegExp(
        "(?=.*[!@#$%^&*()-+])"
    )


    if (str.length >= 6) {
        message = message + '✔ TEM 6 OU MAIS CARACTERES<br>'
    } else {
        missingStr = 6 - str.length;
        message = message + '❌ FALTAM ' + missingStr + ' CARACTERES<br>'
    }

    if (valLowercase.test(str)) {
        message = message + '✔ TEM MINÚSCULA <br>'
    } else {
        message = message + '❌ FALTA MINÚSCULA <br>'
    }

    if (valUppercase.test(str)) {
        message = message + '✔ TEM MAIÚSCULA <br>'
    } else {
        message = message + '❌ FALTA MAIÚSCULA <br>'
    }

    if (valSpecial.test(str)) {
        message = message + '✔ TEM CARACTERE ESPECIAL <br>'
    } else {
        message = message + '❌ FALTA CARACTERE ESPECIAL <br>'
    }



    return message
}

const result = document.getElementById('result-02');
const newResult = document.createElement('p');
result.appendChild(newResult);

const sendBtn02 = document.getElementById('btn-desafio-02');
sendBtn02.addEventListener('click', e => {
    newResult.innerHTML = '';
    e.preventDefault();
    let send02 = document.getElementById('desafio-02').value;

    newResult.innerHTML = desafio02(send02);

})