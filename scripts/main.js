let myImage = document.querySelector("img");
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
let cnt = 0;

myImage.onclick = function(){
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "images/icon.png"){
        myImage.setAttribute("src", "images/icon2.png");
    }else{
        myImage.setAttribute("src", "images/icon.png");
    }
    cnt++;
    document.getElementById("pressedImage").innerHTML = cnt; //innerHTMLはHTMLタグをそのまま書ける
}

function setUserName(){
    let myName = prompt("Please enter your name.");
    if(!myName || myName == null){
        setUserName();
    }else{
        localStorage.setItem("name", myName);
        myHeading.innerHTML = "Mozilla is cool, " + myName;
    }
}

if(!localStorage.getItem("name")){
    setUserName();
}else{
    let storedName = localStorage.getItem("name");
    myHeading.innerHTML = "Mozilla is cool, " + storedName;
}
  
myButton.onclick = function(){
    setUserName();
}