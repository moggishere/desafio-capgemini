const desafio01 = (n) => {
    let printStr = '';
    // const blankSpace = ' ';
    const blankSpace = '&nbsp;';
    const asterisk = '*';
    const lineBreak = '<br>'
    // const lineBreak = '\n'

    for (let i = 1; i <= n; i++) {
        printStr = printStr + blankSpace.repeat(n - i)
        printStr = printStr + asterisk.repeat(i)
        printStr = printStr + lineBreak
    }

    return printStr;
}

const result = document.getElementById('result-01');
const newResult = document.createElement('p');
result.appendChild(newResult);

const sendBtn01 = document.getElementById('btn-desafio-01');
sendBtn01.addEventListener('click', e => {
    newResult.innerHTML = '';
    e.preventDefault();
    let send01 = document.getElementById('desafio-01').value;

    // alert(desafio01(send01));
    
    newResult.innerHTML = desafio01(send01);

    if (send01 <= 0) {
        newResult.innerHTML = 'valor inválido';
    }
    
})


// let n = 8;
// let printStr='';
// const blankSpace = ' ';
// const asterisk = '*';
// const lineBreak = '\n'

// for(let i = 1; i <= n; i++) {
//     printStr = printStr + blankSpace.repeat(n - i)
//     printStr = printStr + asterisk.repeat(i)
//     printStr = printStr + '\n'
// }

// console.log('TESTE')
// console.log(printStr)
// console.log('     *\n    **\n   ***\n  ****\n *****\n******')

// NOTE: \n == <br> in HTML
// _____*\n
// ____**\n
// ___***\n
// __****\n
// _*****\n
// ******\n
// the string is == '     *\n    **\n   ***\n  ****\n *****\n******'

// _* \n
// ** \n