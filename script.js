// const pwEl = document.getElementById("pw");
// const copyEl = document.getElementById("copy");
// const lenEl = document.getElementById("len");
// const upperEl = document.getElementById("upper");
// const lowerEl = document.getElementById("lower");
// const numberEl = document.getElementById("number");
// const symbolEl = document.getElementById("symbol");
// const generateEl = document.getElementById("generate");

// const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
// const numbers = "0123456789";
// const symbols = "!@#$%^&*()_+=";

// function getLowercase() {
//     return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
// }

// function getUppercase() {
//     return upperLetters[Math.floor(Math.random() * upperLetters.length)];
// }

// function getNumber() {
//     return numbers[Math.floor(Math.random() * numbers.length)];
// }

// function getSymbol() {
//     return symbols[Math.floor(Math.random() * symbols.length)];
// }

// function generatePassword() {
//     const len = lenEl.value;

//     let password = "";

//     if (upperEl.checked) {
//         password += getUppercase();
//     }

//     if (lowerEl.checked) {
//         password += getLowercase();
//     }

//     if (numberEl.checked) {
//         password += getNumber();
//     }

//     if (symbolEl.checked) {
//         password += getSymbol();
//     }

//     for (let i = password.length; i < len; i++) {
//         const x = generateX();
//         password += x;
//     }

//     pwEl.innerText = password;
// }

// function generateX() {
//     const xs = [];
//     if (upperEl.checked) {
//         xs.push(getUppercase());
//     }

//     if (lowerEl.checked) {
//         xs.push(getLowercase());
//     }

//     if (numberEl.checked) {
//         xs.push(getNumber());
//     }

//     if (symbolEl.checked) {
//         xs.push(getSymbol());
//     }

//     if (xs.length === 0) return "";

//     return xs[Math.floor(Math.random() * xs.length)];
// }

// generateEl.addEventListener("click", generatePassword);

// copyEl.addEventListener("click", () => {
//     const textarea = document.createElement("textarea");
//     const password = pwEl.innerText;

//     if (!password) {
//         return;
//     }

//     textarea.value = password;
//     document.body.appendChild(textarea);
//     textarea.select();
//     document.execCommand("copy");
//     textarea.remove();
//     alert("Password copied to clipboard");
// });



const passwordEl = document.getElementById("pw");
const copy_pw =document.getElementById("copy");
const length = document.getElementById("len");
const upper_case = document.getElementById("upper");
const lower_case = document.getElementById("lower");
const number_digit = document.getElementById("number");
const symbol_letter = document.getElementById("symbol");
const generate_password  = document.getElementById("generate");

const upperLetters =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=;,.:/''/";

function getLowerCase(){
    return lowerLetters[Math.floor(Math.random()*lowerLetters.length)];

}


function getUpperCase(){
    return upperLetters[Math.floor(Math.random()*upperLetters.length)];
    
}
function getNumbers(){
    return numbers[Math.floor(Math.random()*numbers.length)];
    
}
function getSymbols(){
    return symbols[Math.floor(Math.random()*symbols.length)];
    
}
function password_generate(){
    const len = length.value;
    let password = "";
    if(upper_case.checked){
        password +=getUpperCase();

    }
    if (lower_case.checked) {
        password += getLowerCase();
    }

    if (number_digit.checked) {
        password += getNumbers();
    }

    if (symbol_letter.checked) {
        password += getSymbols();
}
for (let i = password.length;i<len;i++){
    const x = generateX();
    password +=x;

}
passwordEl.innerHTML=password;
}
function generateX(){
    const xs = [];
    if(upper_case.checked){
        xs.push(getUpperCase());
    }
    if (lower_case.checked) {
        xs.push(getLowerCase());
    }

    if (number_digit.checked) {
        xs.push(getNumbers());
    }

    if (symbol_letter.checked) {
        xs.push(getSymbols());
    }

    if (xs.length ===0){
        return "";}
    return xs[Math.floor(Math.random() * xs.length)];

}

generate_password.addEventListener("click",password_generate);
copy_pw.addEventListener("click", () =>{
    const textarea = document.createElement("textarea");
    const password = passwordEl.innerText;
    if(!password) {
        return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
})
