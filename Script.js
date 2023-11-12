var a = document.querySelector("div");
var btn = document.querySelector("button");
var rang = document.getElementById("rang ka naam");
// var count=0;
// btn.addEventListener("click",function(){
//     if(count==0){
//         document.body.style.backgroundColor="#FF0000"; // to select the whole document to change it the background colour
//         count=1;
//     }
//     else if(count==1){
//         document.body.style.backgroundColor="#F15025"; // to select the whole document to change it the background colour
//         count=2;
//     }
//     else if(count==2){
//         document.body.style.backgroundColor="Rgba(133,122,200)";
//         count=3;
//     }
//     else if(count==3){
//         document.body.style.backgroundColor="#008000";
//         count=0;
//     }
// })

var colors = ["red", "green", "blue", "yellow"];

btn.addEventListener("click",function(){
    var randomcolor = Math.floor(Math.random()* colors.length);
    document.body.style.backgroundColor = colors[randomcolor];
    rang.innerText = colors[randomcolor];
})
