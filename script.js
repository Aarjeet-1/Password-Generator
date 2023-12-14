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
        password += getLowercase();
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
        xs.push(getUpperCase);
    }
    if (lower_case.checked) {
        xs.push(getLowercase());
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

generate_password.addEventListener("click",password_generate());
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
