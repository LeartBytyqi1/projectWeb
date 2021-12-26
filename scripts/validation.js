const form = document.getElementById('form');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const date = document.getElementById('date');
const address = document.getElementById('address');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordconf = document.getElementById('passwordconf');

form.addEventListener('submit', (e)=>{
  e.preventDefault();

  checkInputs();
});

function checkInputs(){
  const valueName=name.value.trim();
  const  valueSurname=surname.value.trim();
  const valueDate=date.value.trim();
  const valueAddress=address.value.trim();
  const valueUsername=username.value.trim();
  const valueEmail=email.value.trim();
  const valuePassword=password.value.trim();
  const valuePasswordConf=passwordconf.value.trim();

  if(valueName === '' || valueName===null){
    setErrorFor(name, 'Name cannot be blank');
  }else{
    setSuccessFor(name);
  }
  if(valueSurname === '' || valueSurname===null){
    setErrorFor(surname, 'Surname cannot be blank');
  }else{
    setSuccessFor(surname);
  }
  if(valueDate === '' || valueDate===null){
    setErrorFor(date, 'Date cannot be blank');
  }else{
    setSuccessFor(date);
  }
  if(valueAddress === '' || valueAddress===null){
    setErrorFor(address, 'Address cannot be blank');
  }else{
    setSuccessFor(address);
  }
  if(valueUsername === '' || valueUsername===null){
    setErrorFor(username, 'Username cannot be blank');
  }else{
    setSuccessFor(username);
  }
  if(valueEmail === '' || valueEmail===null){
    setErrorFor(email, 'Email cannot be blank');
  }else if(!isEmail(valueEmail)){
    setErrorFor(email,'Email is not valid');
  }
  else{
    setSuccessFor(email);
  }
  if(valuePassword === '' || valuePassword===null){
    setErrorFor(password, 'Password cannot be blank');
  }else if(!isPassword(valuePassword)){
    setErrorFor(password,'Password must contain at least 8 characters, with at least a symbol,upper and lowercase letters and a number');
  }
  else{
    setSuccessFor(password);
  }
  if(valuePasswordConf === '' || valuePasswordConf===null){
    setErrorFor(passwordconf, 'Password cannot be blank');
  }else if(valuePassword !== valuePasswordConf){
    setErrorFor(passwordconf,'Passwords are not matching!');
  }
  else{
    setSuccessFor(passwordconf);
  }
}
function setErrorFor(input,message){
  const formControl = input.parentElement;
  const small=formControl.querySelector('small');

  small.innerText=message;

  formControl.className='form-control error';
}
function setSuccessFor(input){
  const formControl= input.parentElement;
  formControl.calssName="form-control success"
}

function isEmail(email){
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function isPassword(password){
  return /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
}