function checkPassword(){
if(document.getElementById("password").value==="dhruvishandsomebecauserasmalailoveshim"){
document.getElementById("loginPage").style.display="none";
document.getElementById("mainPage").style.display="block";
typingText();
}else{
alert("Wrong password 😢");
}
}

function typingText(){
let text="i love you so much meri rasmalai this one's for you you're fucking gorgeous my love.";
let i=0;
let speed=60;

function type(){
if(i<text.length){
document.getElementById("typing").innerHTML+=text.charAt(i);
i++;
setTimeout(type,speed);
}
}
type();
}

function yesClick(){
document.getElementById("song").play();
document.getElementById("message").style.display="block";
}

function moveNo(){
let btn=document.querySelector(".no");
btn.style.position="absolute";
btn.style.top=Math.random()*80+"%";
btn.style.left=Math.random()*80+"%";
}
