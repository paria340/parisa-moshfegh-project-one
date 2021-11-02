
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
        document.getElementById('popUp').style.display='block'

        const popUpEl = document.createElement('h4')
        popUpEl.innerHTML = 'Thank you for the feedback!<button class="goBack">Return</button>'

        const popUpAppear = document.querySelector('.popUp')
        popUpAppear.append(popUpEl)

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
        }
    })
})

