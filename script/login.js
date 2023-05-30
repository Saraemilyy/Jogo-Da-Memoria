const input = document.querySelector('.Login-input')
const button = document.querySelector('.Login-button')

const validateInput = ({target}) =>{
  if(target.value.length > 2){
    button.removeAttribute('disabled')
  }else{
    button.setAttribute('disabled', '')
  }
}

input.addEventListener ('input', validateInput)