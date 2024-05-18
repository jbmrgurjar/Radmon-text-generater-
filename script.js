let text=document.querySelector("#text");
let btn=document.querySelector("#btn");
let img=document.querySelector("src");

let api="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political&type=single";


let joke=async()=>{

    // let myele = document.createElement('div');
    // myele.innerHTML =  `${data.url}`;
    console.log("gatting data");
    text.classList.remove("fade");
    let respons=await fetch(api);
    console.log(respons);
    let data=await respons.json();
    console.log(data);
    
    text.textContent=`${data.joke}`;
    text.classList.add("fade");

}
joke();

btn.addEventListener("click",function(event){
    // console.log("click burtton");
    joke();
})