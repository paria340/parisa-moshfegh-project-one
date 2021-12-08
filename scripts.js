

jsAddition = {};


jsAddition.onSubmit = function(){
    
    const formEl = document.querySelector('form')
    formEl.addEventListener('submit', function(event){
    event.preventDefault();
        
    const inputEl = document.getElementById('name')
    const nameInfo = inputEl.value;
        
    const inputElTwo = document.getElementById('email')
    const emailInfo = inputElTwo.value;
        
    const inputElThree = document.getElementById('message')
    const textInfo = inputElThree.value;
    
            
            
    if(nameInfo && textInfo && emailInfo){
                
        const popUpAppear = document.querySelector('.popUp')
                
        const pictureHolder = document.querySelector('.picture3')
        const commentHolder = document.querySelector('.comment3')
        const pEl = document.createElement('p')
        pEl.textContent = textInfo
        commentHolder.append(pEl)
        pictureHolder.style.display='inherit'
        
    
                
        const popUpEl = document.createElement('h4')
        popUpEl.innerHTML = 'Thank you for the feedback!<button class="goBack">Return</button>'
                
        popUpAppear.append(popUpEl)
        popUpAppear.style.display='block'
                
        inputEl.value= ''
        inputElTwo.value= ''
        inputElThree.value= ''
    }else{
        document.getElementById('popUp').style.display='inline-block'
        
        const popUpEl = document.createElement('h4')
        popUpEl.innerHTML = 'Please complete all the info!<button class="goBack">Return</button>'
        
        const popUpAppear = document.querySelector('.popUp')
        popUpAppear.append(popUpEl)
        }
        
        const popUpElement =  document.querySelector('.popUp')
        popUpElement.addEventListener('click', function(event){
            if(event.target.tagName === 'BUTTON'){
                event.preventDefault();
                document.getElementById('popUp').style.display='none'
                document.getElementById('popUp').innerHTML = ''
            }
        })
    })
}


const hamburgerIcon = document.querySelector('.fa')
const ulList = document.querySelector('.navMenu')
hamburgerIcon.addEventListener('click', function(){
    document.querySelector('.navMenu').style.display='block'

})

const carouselEl = document.querySelector('.carousel')



jsAddition.init = function(){
    jsAddition.onSubmit()
}

jsAddition.init();