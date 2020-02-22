const controller = {};

 controller.register = registerInfo => {
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
    }
    
    // if (!registerInfo.password)
    // {
    //     document.getElementById('password-error').innerHTML = 'vui long nhap password';
    // } cách 1

    // báo lỗi khi bỏ trống ô password cách 2
    
    if (!registerInfo.password) {
        view.setMessage('password-error','vui long nhap password');

    }
    else
    {
        view.setMessage('password-error','');
    
        //  báo lỗi khi bỏ trống ô confirm password cách 2
    
        if (!registerInfo.password || registerInfo.confirmPassword !== registerInfo.password)
        {
            view.setMessage('confirmPassword-error','vui long nhap trung voi password');
        }
        else
        {
            view.setMessage('confirmPassword-error','');
            document.getElementById('btnInRegister').addEventListener('click', () => {
                view.setActiveScreen('login');})
        }
    }
    // if (!registerInfo.password || registerInfo.confirmPassword !== registerInfo.password)
    // {
    //     document.getElementById('confirmPassword-error').innerHTML = 'vui long nhap trung voi password';
    // } cách 1
    

   
}
// !! : tồn tại hay không tồn tại
