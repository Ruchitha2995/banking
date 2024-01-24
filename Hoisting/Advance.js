

// console.log(value)
// var value="mydata";
// let value ="my data"
// const value ="my data"


// add(10,60);
// // declaration
// function add (a,b){
//     console.log(a+b);
// }
  

// add(10,60);
// // expression
// let add = function(a,b){
//     console.log(a+b);
// }

// add(10,60);
// let add=(a,b)=>{
//     console.log (a+b);
// }


// function greet(morning){
//     return morning();
// }
// greet(()=>{
//     console.log("good morning")
// });

// function greet (){
//     return function(){
//         console.log("good morning");
//     }
// }
// let function1=greet();
// function1();


//   let greet=()=>{
//     console.log("hello world!~")
//   }
//   setTimeout(greet,2000);

// setInterval(()=>{
//     console.log("I am a function")
// },2000);
// console.log("i got printed first!");

// let  a=20

// setTimeout(()=>{
//     a=a+10
// },1000)

// console.log(a)


// add(10,20);
// let add=function(a,b){
//     console.log(a+b);
// };
// add(10,20);
// let add=(a,b)=>{
//     console.log
// }





let maxResult = 5;
let url = "https://fakestoreapi.com/products"

const getUserProfile=(count)=>{
    fetch(url)
    .then((response)=>{
        let res=response.json()
        return res
    }).then((data)=>{
        let cards = document.querySelector(".cards") 
        cards.innerHTML=""
        return data
    })
    .then((data)=>{
        console.log(data)
        for(let i=0 ;i<count;i++){
        let cards = document.querySelector(".cards")                         
        let card = document.createElement("div")
        cards.appendChild(card)
        let image = document.createElement("img")
        image.style.width = "200px"
        image.style.height = "200px"
        image.setAttribute("src",data[i].image)
        card.appendChild(image)
        }
    })
}

let loadMore = document.getElementById("btn")
loadMore.addEventListener("click", ()=>{
    maxResult = maxResult + 5;
    getUserProfile(maxResult)
})
getUserProfile(maxResult)
