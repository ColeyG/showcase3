<script>
  export let externalOpen = false;
  $: {
    if (externalOpen === true) {
      open = true;
      externalOpen = false;
    }
  }

  let open = false;
  let sentMessage = false;
  let email = "";
  let message = "";

  let emailErrors = false;
  let messageErrors = false;

  const openChat = () => {
    open = true;
  };

  const closeChat = () => {
    open = false;
  };

  const sendMessage = () => {
    if (email === "") {
      emailErrors = true;
    }

    if (message === "") {
      messageErrors = true;
    }

    if (email === "" || message === "") {
      return;
    }

    fetch("https://10.0.0.220/custom-discord-message", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        message: `Message from site || ${email} says: ${message}`,
      }),
    });
    sentMessage = true;
  };

  const sendMessageOnEnter = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const reOpenChat = (e) => {
    e.preventDefault();

    email = "";
    message = "";
    emailErrors = false;
    messageErrors = false;
    sentMessage = false;
  };
</script>

<div class="contact-overlay">
  {#if !sentMessage}
    <div class={`chat-container${open ? " chat-container-open" : ""}`}>
      <button class="message-me" on:click={openChat} on:keypress={openChat}
        >message<br />me</button
      >
      {#if open}
        <button class="close" on:click={closeChat} on:keypress={closeChat}
          ><img src="./cancel.svg" alt="Cancel" /></button
        >
        <label for="email">email</label>
        <input
          bind:value={email}
          on:keyup={sendMessageOnEnter}
          type="text"
          id="email"
          name="email"
          class={emailErrors ? "email-errors" : ""}
        />
        <label for="message">message</label>
        <textarea
          bind:value={message}
          on:keyup={sendMessageOnEnter}
          name="message"
          id="message"
          cols="30"
          rows="10"
          class={messageErrors ? "message-errors" : ""}
        />
        <button class="send" on:click={sendMessage} on:keypress={sendMessage}
          >send</button
        >
      {/if}
    </div>
  {:else}
    <div class="chat-container">
      <p class="thanks">
        thanks! <br />
        <a href="/" on:click={reOpenChat} on:keypress={reOpenChat}
          >message again</a
        >
      </p>
    </div>
  {/if}
</div>

<style>
  .contact-overlay {
    width: 100%;
    height: 100vh;
    margin-bottom: -100vh;
    pointer-events: none;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 130;
  }

  .chat-container {
    pointer-events: all;
    position: absolute;
    right: 30px;
    bottom: 100px;
    height: 44px;
    width: 110px;
    box-shadow:
      rgba(0, 0, 0, 0.12) 0px 1px 3px,
      rgba(0, 0, 0, 0.24) 0px 1px 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.5);
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
  }

  .chat-container .close {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .chat-container .close img {
    width: 25px;
  }

  .chat-container .message-me {
    text-align: center;
    opacity: 0.7;
    font-size: 0.9rem;
    width: 100%;
    height: 100%;
  }

  .chat-container input,
  .chat-container textarea {
    background-color: rgba(51, 51, 51, 0.25);
    width: 100%;
    border-radius: 3px;
    margin: 4px 0;
    padding: 4px;
    font-size: 0.9rem;
    font-family: "Roboto", sans-serif;
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(8px);
  }

  .chat-container textarea {
    resize: none;
  }

  .chat-container label {
    font-size: 0.9rem;
    opacity: 0.7;
    text-align: left;
    width: 100%;
    margin-bottom: -2px;
  }

  .chat-container .send {
    background-color: #0093e9;
    background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
    font-size: 0.9rem;
    color: white;
    border-radius: 3px;
    margin-top: 10px;
    padding: 4px 9px;
  }

  .chat-container .thanks {
    font-size: 0.9rem;
    font-style: italic;
    opacity: 0.7;
    text-align: center;
    padding: 8px 0;
  }

  .chat-container .thanks a {
    color: black;
    opacity: 0.5;
  }

  .chat-container-open {
    width: 220px;
    height: auto;
    justify-content: space-between;
    padding: 8px;
  }

  .email-errors,
  .message-errors {
    outline: 3px solid red;
  }
</style>
