// file dùng để lưu dữ liệu gnười dùng
const model = {};

//1. khỏi tạo dữ liệu trống

model.authUser = {
  email: "1754050092tien@ou.edu.vn"
};
model.activeConversation = undefined;

//2. Cập nhật thông tin sau khi đăng nhập thành công

model.loginSuccess = authUser => {
  model.authUser = authUser;
};

model.addMessage = async newMessage => {
  //1. Khai bao sd firebse fire store
  const db = firebase.firestore(); // bat buoc khai bao neu muon dung toi firestore

  //2.update danh sach message

  db.collection("conservation")
    .doc(model.activeConversation.id)
    .update({
      messages: firebase.firestore.FieldValue.arrayUnion(newMessage)
    });
};

model.loadConversation = async () => {
  const db = firebase.firestore();
  db.collection("conservation")
    .where("users", "array-contains", model.authUser.email)
    .onSnapshot(snapshot => {
      console.log(snapshot);
      //kiem tra xem model.conversations da ton tai chua neuchua thi lay ra

      if (!model.conversations) {
        //lay tat ca conversation ve
        const conversations = snapshot.docChanges().map(item => ({
          id: item.doc.id,
          ...item.doc.data()
        }));

        //next

        model.conversations = conversations;
        console.log(conversations);
        model.activeConversation = conversations[0];

        console.log(model.activeConversation);

        for (let message of model.activeConversation.messages) {
          view.addMessage(message);
        }
      } else {
        for (const item of snapshot.docChanges()) {
          const conversation = {
            id: item.doc.id,
            ...item.doc.data()
          };
          console.log(conversation);

          //cap nhat vao nhung conversation da co
          for (let i = 0; i < model.conversations.length; i++) {
            if (model.conversations[i].id == conversation.id) {
              model.conversations[i] = conversation;
            }
          }

          if (conversation.id == model.activeConversation.id) {
            model.activeConversation = conversation;
            view.addMessage(
              conversation.messages[conversation.messages.length - 1]
            );
          }
        }
      }

      //
    });
};
