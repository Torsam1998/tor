const form= document.getElementById("formid")

const aku=document.getElementById("password1")
const aku2=document.getElementById("password2")
const aku3=document.getElementById("aku")

let isValid=false;
let passwordMatches =false;

  // validate our password
  function validation(){
    isValid=form.checkValidity();
    if(!isValid) {
        aku3.textContent='please fill all fields correctly!';
        aku3.style.color="red"
        return;        
    }
    if (aku.value === aku2.value) {
        passwordMatches=true;
        aku.style.borderColor="green"
        aku2.style.borderColor="green"
    } else {
        passwordMatches=false;
        aku.style.borderColor="red"
        aku2.style.borderColor="red"
        aku3.textContent='please make sure the password match!';
        aku3.style.color="red"
        return;
    }
if(isValid && passwordMatches) {
    aku3.textContent="congratulations"
    aku3.style.color="green"
}
  }
  function storedata(){
const userdata={
name:form.fname.value,
name:form.secondname.value,
phone:form.phone.value,
Email:form.Email.value,
password:form.password.value,
course:form.course.value
}
console.log(userdata)
  }


function processform(event){
event.preventDefault();
validation();
storedata()
}
form.addEventListener('click', processform)