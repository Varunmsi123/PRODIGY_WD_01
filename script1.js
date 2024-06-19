let a = document.querySelector("#change");
let b = document.querySelector("#A");

var count =0;

a.onclick = ()=>{
    if(count%2==0){
        b.style.backgroundImage= "url(bg3.jpg)";
        count++;
    }else{
        b.style.backgroundImage= "url(pexels-ekamelev-785695.jpg)";
        count++;
    }
}