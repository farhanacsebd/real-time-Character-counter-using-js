textareaE1 = document.getElementById("textarea");
totalCounter = document.getElementById("total-counter");
remainingCounter = document.getElementById("remaining-counter");


textareaE1.addEventListener('keyup',function(){
    updateCounter()
})

updateCounter()

function updateCounter(){

    totalCounter.innerText = textareaE1.value.length; 
    remainingCounter.innerText = textareaE1.getAttribute('maxlength') - textareaE1.value.length; 

}