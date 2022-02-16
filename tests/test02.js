const test02 = (str) => {
    let message = '';
    let missingStr = 0;

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

module.exports = test02;