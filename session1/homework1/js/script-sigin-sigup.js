const signUpForm = document.getElementById('form-signup')
const signInForm = document.getElementById('form-signin')


if (signInForm) {
  signInForm.addEventListener('submit', async function (event) {
    event.preventDefault();
    const email = document.getElementById('email-input').value
    const password = document.getElementById('password-input').value
    const request = await fetch(url)
    const data = await request.json()
    const userFound = data.filter(function (item) {
      return item.username == email && item.password == password
    })[0];
    if (userFound) {
      const errMessageContainer = document.getElementById('error-message')
      errMessageContainer.innerText = "Đăng nhập thành công";
    }
    else 
    { const errMessageContainer = document.getElementById('error-message')
    errMessageContainer.innerText = "Đăng nhập không thành công";
  }
  });
}

if (signUpForm) {
  signUpForm.addEventListener('submit', async function (event) {
    event.preventDefault();
    const email = document.getElementById('email-input').value
    const password = document.getElementById('password-input').value
    const passwordConfirm = document.getElementById('password-confirm').value
    async function getData ()
{
    try
    {
        const respone = await fetch ("http://5dc6a9cb317717001434f796.mockapi.io/api/users");
        const data = await respone.json();
        console.log("đây là data",data);
    }
    catch(err)
    {
        console.log(err);
    }
}
    if (password !== passwordConfirm) {
      const errMessageContainer = document.getElementById('error-message')
      errMessageContainer.innerText = "Mật khẩu không khớp"
    } else {
      const data = {
        username: email,
        password: password
      }
        const url = "http://5dc6a9cb317717001434f796.mockapi.io/api/users";
        const respome1 = await fetch (url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json"
        }
      });
      window.location.href='./signIn.html';
    }
  });
}
