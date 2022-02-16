const test01 = (n) => {
    let printStr = '';
    const blankSpace = '&nbsp;';
    const asterisk = '*';
    const lineBreak = '<br>'

    for (let i = 1; i <= n; i++) {
        printStr = printStr + blankSpace.repeat(n - i)
        printStr = printStr + asterisk.repeat(i)
        printStr = printStr + lineBreak
    }

    return printStr;
}

module.exports = test01;