let h1 = document.querySelector("h1");
let Letters = "0123456789ABCDEF";
function getRandomColor(){

    let color = "#";
  for(let i = 0;i<6;i++){
    color += Letters[Math.floor(Math.random()*16)];
    
  }
    return color;
}

h1.onclick  =  function(){
    let random = getRandomColor()
    h1.style.backgroundColor = random;
}

setInterval(() => {
    if(h1.style.visibility === "hidden"){
        h1.style.visibility = "visible";
        h1.style.color = getRandomColor(); // getRandom color only accept the

    }else{
        h1.style.visibility = "hidden";
    }},1000);

 let inp = document.querySelector("#text");
 let p= document.querySelector("p");
 inp.addEventListener("input",function(){

    console.log(inp.value);
    p.innerText = inp.value;

    p.style.color = getRandomColor();
    

 })




