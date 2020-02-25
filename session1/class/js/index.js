window.onload = () => {
    console.log(firebase.app().name); // trong trang web f12 console hiện default là đã chạy thành công
    view.setActiveScreen('register');
    document.getElementById('already-have-account').addEventListener('click', () => {
        view.setActiveScreen('login');
    })
}
