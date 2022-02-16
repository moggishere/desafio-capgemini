function getAllSubstrings(str) {
    let i, j;
    let result = [];

    for (i = 0; i < str.length; i++) {
        for (j = i + 1; j < str.length + 1; j++) {
            result.push(str.slice(i, j))
        }
    }
    return result
}

function anagramVerify(str1, str2) {
    const hist = {}

    for (let i = 0; i < str1.length; i++) {
        const char = str1[i]
        if (hist[char]) {
            hist[char]++
        } else {
            hist[char] = 1
        }
    }

    for (let j = 0; j < str2.length; j++) {
        const char = str2[j]
        if (hist[char]) {
            hist[char]--
        } else {
            return false
        }
    }

    return true
}

function anagramCounter(currentIndex, arr) {
    const currentElement = arr[currentIndex]
    const arrRest = arr.slice(currentIndex + 1)
    let counter = 0

    for (let i = 0; i < arrRest.length; i++) {
        if (currentElement.length === arrRest[i].length && anagramVerify(currentElement, arrRest[i])) {
            counter++
        }
    }

    return counter
}

function desafio03(s) {
    const duplicatesCount = s.split('').filter((v, i) => s.indexOf(v) !== i).length

    if (!duplicatesCount) return 0
    let anagramsCount = 0

    const arr = getAllSubstrings(s)

    for (let i = 0; i < arr.length; i++) {
        anagramsCount += anagramCounter(i, arr)
    }

    return anagramsCount
}

const result = document.getElementById('result-03');
const newResult = document.createElement('p');
result.appendChild(newResult);

const sendBtn02 = document.getElementById('btn-desafio-03');
sendBtn02.addEventListener('click', e => {
    newResult.innerHTML = '';
    e.preventDefault();
    let send03 = document.getElementById('desafio-03').value;

    newResult.innerHTML = desafio03(send03);

})