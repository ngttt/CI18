const components = {};

components.register = `
<div class='register-container'>
<div class='form-wrapper'>
  <div class='logo'>
    <span>Techkids Chat</span>
  </div>
  <div class='form-container'>
    <form id='register-form'>
      <div class='name-wrapper'>
        <div class='input-wrapper'>
          <input class='input' type="text" name="firstName" placeholder="First name" />
        </div>
        <div class='input-wrapper'>
          <input class='input' type="text" name="lastName" placeholder="Last name" />
          </div>
      </div>
      <div class='input-wrapper'>
        <input class='input' type="email" name="email" placeholder="Email" />
        <div class="error" id="email-error" </div>
        </div>
        
      <div class='input-wrapper'>
        <input class='input' type="password" name="password" placeholder="Password" />
        <div class= "error" id="password-error" </div>
        </div>
  
      <div class='input-wrapper'>
        <input class='input' type="password" name="confirmPassword" placeholder="Confirm password" />
        <div class="error" id="confirmPassword-error" </div>
    </div>
  
    <div class="error" id="formError"></div>
    <div class="noti" id="formNoti"></div>

      <div class='input-wrapper-register-footer'>
        <a id='already-have-account'>Already have an account? Login</a>
        <button id='btnInRegister' type='submit'>
          <span>Register</span>
        </button>
      </div>
    </form>
  </div>
</div>
</div>
`;

components.login = `
<div class='login-container'>
<div class='form-wrapper'>
  <div class='logo'>
    <span>Techkids Chat</span>
  </div>

 

  <div class='form-container'>
    <form id='login-form'>
      <div class='input-wrapper'>
        <input class='input' type="email" name="email" placeholder="Email" />
        <div class="error" id="email-error" </div>
        </div>
        
      <div class='input-wrapper'>
        <input class='input' type="password" name="password" placeholder="Password" />
        <div class= "error" id="password-error" </div>
        </div>
  
        <div class="error" id="formError"></div>

      <div class='input-wrapper-login-footer'>
        <a href='./index.html' id='dont-have-account'> Don't have an account? Register </a>
        <button id='btnInLogin' type='submit'>
          <span>login</span>
        </button>
      </div>
    </form>
  </div>
</div>
</div>
`;

components.chat = `

<div class="chatContainer">
  <div class="chatHeader">
    MindX Chat 
  </div>

  <div class ="add-coversation-modal" id ="add-conversation-modal"> 
    <div class="chatHeader">
      Add Conversation
    </div>

    <form id ="add-conversation-form">
      <div class ="input-wrapper">

          <input class='input' type="text" name="conversation" placeholder="Conversation Name" />

          <input class='input' type="text" name="Email" placeholder="Email" />

          <button id='btnInLogin' type='submit'>
          <span>Add</span>
          </button>

          <button id='btnInCancel' type='submit'>
          <span>cancel</span>
          </button>

      </div>
    </form>
  </div>

  <div class="chatMain">

  <div class="createConversation">
  <button id = "createConversation" class="btn"> + New Conversation </button>
  
  <div class = "conversationItem" > 

    <div class = "componentUser"> Chat 1 </div>

    <div class = "componentUser"> Chat 2 </div>

    <div class = "componentUser"> Chat 3 </div>

  </div>

  </div>



  <div class= "conversationList"> 
  
 

    <div class="conversationDetail">
      <div id="conversationName" class="conversationHeader"> 
        Code Intesive JS
      </div>

      
      <div class="conversationMessages" id="conversationMessages"> 
      
      </div>

      <form name="messagesForm" id="messagerForm">
        <div class="conservationInput">
          <input id="messageInput" name="message" placeholder="Type your messages" />
          <button class="button" type="submit" > Send </button>
        </div>
      </form>

    </div>

  </div>

  </div> 
`;
