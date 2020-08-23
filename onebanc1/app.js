var TextChange = document.querySelector(".text-change")
var EmailChange = document.querySelector(".email-id")
var textfield = document.querySelector(".form-control")
var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/


var text = ["CARDS","PAYMENTS","INVESTMENTS","LOAN","SUPPORT","SAVINGS"]


setInterval(() => {
    var random = Math.floor(Math.random()*text.length)

    TextChange.innerHTML = text[random]
    
}, (1500));

textfield.addEventListener('keyup',(e)=>{
    if(e.keyCode == 13 && reg.test(textfield.value)){
        EmailChange.innerHTML="We will get to you soon"
    }
    else if (e.keyCode == 13){
        alert('invalid email')
    }
})