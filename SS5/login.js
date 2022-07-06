const loginForm = document.getElementById("loginForm");


 loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // ngan su kien reload mac dinh cua trinh duyet
    const dataRegister = {
      email: loginForm.email.value,
      password: loginForm.password.value,
    }
  
 
    controller.register(dataRegister);
    console.log(dataRegister);
  
  })