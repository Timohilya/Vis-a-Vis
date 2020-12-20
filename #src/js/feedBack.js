let feedBackForm = {
  name: '',
  phone: '',
  email: ''
}

const handleInputChange = e => {
  feedBackForm = {
    ...feedBackForm,
    [e.target.name]: e.target.value
  }
}

const checkOnError = () => {
  let isCorrectData = true;
  if(!feedBackForm.phone.match(new RegExp("^[0-9-()+]+$"))) {
    document.querySelector("#feedBackFormErrorPhone span").innerHTML = "Incorrect phone number!";
    document.querySelector("#feedBackFormErrorPhone").classList.add('feedBackForm__error-show');
    isCorrectData = false;
  }
  if(!feedBackForm.email.match(new RegExp("^[a-zA-Z0-9-_\.@]+$"))) {
    document.querySelector("#feedBackFormErrorEmail span").innerHTML = "Incorrect email!";
    document.querySelector("#feedBackFormErrorEmail").classList.add('feedBackForm__error-show');
    isCorrectData = false;
  }
  return isCorrectData;
}

document.querySelectorAll('.feedBackForm__input').forEach(input => {
  input.addEventListener("keyup", handleInputChange);
});

document.querySelectorAll('.feedBackForm__form')[0].addEventListener("submit", async e => {
  e.preventDefault();
  document.querySelectorAll('.feedBackForm__error').forEach(element => {
    element.classList.remove('feedBackForm__error-show');
  })
  if(checkOnError()) {
    alert("SENT")
    try {
      await fetch(`/form-sending`, {method: 'post', body: JSON.stringify(feedBackForm)});
    } catch(e) {
      alert('SERVER_ERRORS');
    }
  }
});
