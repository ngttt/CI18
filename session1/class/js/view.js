const view = {};

view.setActiveScreen = screenName => {
  switch (screenName) {
    case 'register':
      document.getElementById('app').innerHTML = components.register;
      document
        .getElementById('already-have-account')
        .addEventListener('click', () => { //giống function poo () {}
          view.setActiveScreen('login');
        });
      const registerForm = document.getElementById('register-form');
      registerForm.addEventListener('submit', e => {
        e.preventDefault();
        const registerInfo = {
          firstName: registerForm.firstName.value,
          lastName: registerForm.lastName.value,
          email: registerForm.email.value,
          password: registerForm.password.value,
          confirmPassword: registerForm.confirmPassword.value
        };
        controller.register(registerInfo);
      });

      break;
    case 'login':
      document.getElementById('app').innerHTML = components.login;
      break;
  }
};

// hàm để hiện thông báo mỗi khi bỏ trống các ô đăng ký 

view.setMessage = (id, textError) => {
  document.getElementById(id).innerHTML = textError;
};
