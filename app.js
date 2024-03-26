// js login
const form = document.getElementById('login-form');
const inputUsername = document.getElementById('username');
const inputPassword = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

  const usernameValue = 'hayuningersa@gmail.com';
  const passwordValue = '233307073';

  if(inputUsername.value !== usernameValue) {
    document.getElementById("response").innerHTML="Invalid Username or Password. Try again!";
  }
  else if (inputPassword.value !== passwordValue) {
    document.getElementById("response").innerHTML="Invalid Username or Password. Try again!";
  } else {
    document.getElementById("response")
    alert ("Login successful!");
    window.location.href = 'order.html';
    }
  });

