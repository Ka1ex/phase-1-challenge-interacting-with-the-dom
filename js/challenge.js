
let numbers = {}
let liList = {}
   
document.addEventListener("DOMContentLoaded", (e) => {
    // your code here 
    let count = 0
    
    let counter = document.querySelector("#counter")
    let plus = document.querySelector("#plus")
    let minus = document.querySelector("#minus")
    let heart = document.querySelector('#heart')
    let pause = document.querySelector("#pause")
    let likes = document.querySelector('.likes')
    
    let intervalCounter = setInterval(() => {
        count += 1
        counter.textContent = count
        
    }, 800);
   
    plus.addEventListener("click", ()=>{
        count += 1
        counter.textContent = count
    })
    minus.addEventListener("click", () => {
        count -= 1
        counter.textContent = count
    })
    console.log("DOM is loaded")

}


heart.addEventListener('click', () => {
    if(numbers[count]){
           numbers[count] = numbers[count] + 1
        } else {
            numbers[count] = 1
        }
        let likesElement = document.createElement('li')
        likesElement.textContent = `${count} has been liked ${numbers[count]} times`
        likes.append(likesElement)
        
        
    })
    function pauseToggle(){
    if (pause.innerText === "pause"){
      pause.addEventListener("click", () => {
      clearInterval(intervalCounter)
      plus.setAttribute('disabled', 'disabled')
      minus.setAttribute('disabled', 'disabled')
      heart.setAttribute('disabled', 'disabled')
      pause.innerText = "resume"
     })
    } else
    
    plus.removeAttribute('disabled', 'disabled')
    minus.removeAttribute('disabled', 'disabled')
    heart.removeAttribute('disabled', 'disabled')
    pause.innerText = "pause"
  });