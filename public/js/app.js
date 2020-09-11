const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const icon = document.querySelector('#icon')
const temp = document.querySelector('#middlebox')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.innerHTML = ''
    icon.src=''
    temp.innerHTML=''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.innerHTML = data.forecast+'<sup>o</sup>C'
                icon.src=data.icon
                temp.innerHTML= data.temperature+'<sup>o</sup>C'
                
            }
        })
    })
})