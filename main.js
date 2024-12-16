//1-задание
const regExp = /\d{5}/

const containsOnlyDigits = (str) => {
    if (str.match(regExp)) {
        return true
    } else {
        return false
    }
}

console.log(containsOnlyDigits("12345")); // Выведет true
console.log(containsOnlyDigits("12a45")); // Выведет false

//2-задание
 const second = setInterval(() => {
     console.log("Прошла секунда")
 },1000)

//3-задание
const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i++)
    },1000)
    setTimeout(()=>{
        clearInterval(interval)
    },10000)
}
count()

//4-задание
const div = document.querySelector("div");

 div.onclick = () =>{
         if (div.classList.contains("green")) {
             div.classList.remove("green")
         } else {div.classList.add("green")}
 }

 // 5-задание

const request = new XMLHttpRequest();
request.open('GET','fife.json')
request.setRequestHeader('Content-type','application/json')
request.send()

request.onload = ()=> {
    const fife= JSON.parse(request.response)
    console.log(fife)
}