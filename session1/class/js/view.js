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
      const loginForm= document.getElementById('login-form');
      loginForm.addEventListener('submit', e => {
        e.preventDefault()
        const loginInfo = {
          email: loginForm.email.value,
          password: loginForm.password.value
        };
        controller.login(loginInfo);
      });
      break;

      case 'chat':
        document.getElementById('app').innerHTML = components.chat;
        const messagesForm= document.getElementById('messagerForm');
        messagesForm.addEventListener('submit', e => {
          e.preventDefault();
          const newMessages = messagesForm.message.value;
          // Thêm message vào danh sách
          controller.addMessage(newMessages)
          // reset input về vị trí ban đầu
          messagesForm.message.value="";
      });
      //   document.getElementById('app').innerHTML =  `
      //   <div>Id: ${model.authUser.uid} </div>
      //   <div>Email: ${model.authUser.email} </div>
      //   `;
      break;
  }
};

// hàm để hiện thông báo mỗi khi bỏ trống các ô đăng ký 

view.setMessage = (id, textError) => {
  document.getElementById(id).innerHTML = textError;
};


// hàm để rendẻ ra mesage

//messageObject bao gồm sender và content
view.addMessage = messageObject => {

  //tạo message container
  const messageContainer = document.createElement('div');

  //thêm class cho container
  messageContainer.classList.add('messagesContainer');

  // tạo message
  const message = document.createElement('div');
  message.classList.add('message');
  message.innerHTML = messageObject.content;

  if(messageObject.sender == 'Me') {
    messageContainer.classList.add('your');
  }
  else {
    const sender = document.createElement('div');
    sender.classList.add('sender');
    sender.innerHTML = messageObject.sender;

    //theme teen nguoiwf guiwr
    messageContainer.appendChild(sender);
  }

  

  //
  messageContainer.appendChild(message);
  document.getElementById('conversationMessages').appendChild(messageContainer);
};
