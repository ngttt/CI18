const controller = {};

// kiểm tra ký tự
let regexUpperCase = /.*[A-Z].*/;
let regexLowerCase = /.*[a-z].*/;
let regexNumbers = /.*[0-9].*/;
let regexSpecialChar = /.*[-!@$%^&*()_+|~=`{}\[\]:";'<>?,.\/].*/

 controller.register = async registerInfo => {
    console.log(registerInfo)
    // if (!registerInfo.email) {
    //     document.getElementById('email-error').innerHTML = 'vui long nhap email';
    // } cách 1

    // báo lỗi khi bỏ trống ô email cách 2

    if (!registerInfo.email) {
        view.setMessage('email-error','vui long nhap email');
    }
    else
    {
        view.setMessage('email-error','');

         
    // if (!registerInfo.password)
    // {
    //     document.getElementById('password-error').innerHTML = 'vui long nhap password';
    // } cách 1

    // báo lỗi khi bỏ trống ô password cách 2
    
    if (!registerInfo.password) {
        view.setMessage('password-error','vui long nhap password');

    }
//     else if(!(registerInfo.password.match(regexUpperCase) &&
//     registerInfo.password.match(regexNumbers) &&
//     registerInfo.password.match(regexSpecialChar))){
//     view.setError('password-error', 'Phải có Hoa và thường kí tự đăhc biệt');
//     } else {
//     if(registerInfo.password.length < 12) {
//     view.setError('password-error', 'Mật khẩu phải nhỏ hơn 12 kí tự');

    else {
        
        view.setMessage('password-error','');
    
        //  báo lỗi khi bỏ trống ô confirm password cách 2
    
        if (!registerInfo.password || registerInfo.confirmPassword !== registerInfo.password)
        {
            view.setMessage('confirmPassword-error','vui long nhap trung voi password');
        }
        else
        {
            view.setMessage('confirmPassword-error','');
            view.setMessage('formNoti','Bạn đã đăng ký thành công')
            components.register = `
            <meta http-equiv="refresh" content="2"> `; //sau 2s sẽ chuyển trang
        }
        // view.setActiveScreen('login')

        // đăng kí ng dùng
        // hàm đăng kí, truyền vào 2 tham số email và password
 
        try {
            const user = await firebase
            .auth()
            .createUserWithEmailAndPassword(registerInfo.email, registerInfo.password);
            await firebase.auth().currentUser.sendEmailVerification(); // gui mail
            view.setActiveScreen('login');
            console.log(user);
        }
        catch (error) {
            view.setMessage('formError', error.message);
            console.log(error);
        }
    }
    // if (!registerInfo.password || registerInfo.confirmPassword !== registerInfo.password)
    // {
    //     document.getElementById('confirmPassword-error').innerHTML = 'vui long nhap trung voi password';
    // } cách 1   
}

// !! : tồn tại hay không tồn tại


}
controller.login = async (loginForm) => {
    //1. Validate Form

    //2. Login Firebase

    if (!!loginForm.email && !! loginForm.password) {
        try {
                //2a. gọi hàm login firebase
                const loginResult = await firebase.auth().signInWithEmailAndPassword(loginForm.email, loginForm.password);
                if(!loginResult.user.emailVerified) {
                    view.setMessage('formError', 'You need to verify your email')
                }
                else {
                    // thực hiện lưu dữ liệu
                    model.loginSuccess({
                        uid: loginResult.user.uid,
                        email: loginResult.user.email
                     });

                     setTimeout( () => {
                         view.setActiveScreen('chat')
                     })

                     view.setMessage('formNoti','Bạn đã đăng nhập thành công');


                     view.setActiveScreen('chat'); // khi lưu xong sẽ chuyển qua màn hình chat
                    
                     console.log(loginResult.user);

                }
                console.log(loginResult);
                //2b. Kiểm tra người dùng đã xác nhận mail chưa, nếu chưa thì thông báo ra

                //2d.

        }
        catch (error) {
            //2c. Show lỗi khi đăng nhập

            view.setMessage('formError', error.message);
        
            console.log(error);
        }
    }
}
   

controller.addMessage = (newMessages) => {
    //Tạo mesage của mình
    const myMessage = {
      content: newMessages,
      sender: 'Me'
    };
  
    //Tạo message của bot
    const botMessage = {
      content: newMessages,
      sender: 'Bot'
    };
  
    //add message cuar mình vào
    view.addMessage(myMessage);
    view.addMessage(botMessage);
  }