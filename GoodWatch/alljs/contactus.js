function submit(){
  var username = document.getElementById("username")
  var email = document.getElementById("email")
  var phone = document.getElementById("phone")
  var male = document.getElementById("male")
  var female = document.getElementById("female")
  var agree = document.getElementById("agree")
  var  message = document.getElementById("message")
  var error = document.getElementById("error")

  if(username.value == ""){
    alert("Name must filled!!!")
  }
  else if(!email.value.endsWith("@gmail.com")){
    alert("Email ends with '@gmail.com'")
  }
  else if(phone.value == ""){
    alert("Phone must filled")
  }
  else if(!checkphone(phone.value)){
    alert("Phone must number")
  }
  else if (!document.getElementById('male').checked && !document.getElementById('female').checked) {
    alert("Gender must be checked");
  }
  else if(agree.check){
    alert("You need to agree to continue")
  }
  else if(message.value == ""){
    alert("Message must filled!!!")
  }
  else{
    alert("Thank You For Contacting Us")
  }
  
  username.value = "";
  email.value = "";
  phone.value = "";
  male.checked = false;
  female.checked = false;
  agree.checked = false;
  message.value = "";
}

function checkphone(num) {
  for (let i = 0; i < num.length; i++) {
    if (isNaN(num[i])) {
      return false;
    }
  }
  return true;
}