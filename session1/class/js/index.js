window.onload = () => {
    console.log(firebase.app().name); // trong trang web f12 console hiện default là đã chạy thành công
    view.setActiveScreen('chat');
    // document.getElementById('already-have-account').addEventListener('click', () => {
    //     view.setActiveScreen('login');
    // })
}
