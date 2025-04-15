function showpopup(){
    document.querySelector('.popup').style.display = "flex";  //to open popup screen
}
function hidepopup(){
    document.querySelector(".popup").style.display = "none";  //to close popup screen
}
function submitform(){
    alert("Quiz saved!")    
    document.querySelector(".popup").style.display = "none";  //to close popup screen

}