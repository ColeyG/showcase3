<script>
  let open = false;
  let sentMessage = false;
  let email = "";
  let message = "";

  const openChat = () => {
    open = true;
  };

  const closeChat = () => {
    open = false;
  };

  const sendMessage = () => {
    fetch("https://coley.world/api/custom-discord-message", {
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
</script>

<div class="contact-overlay">
  {#if !sentMessage}
    <div class={`chat-container${open ? " chat-container-open" : ""}`}>
      <button class="message-me" on:click={openChat} on:keypress={openChat}
        >message<br />me</button
      >
      {#if open}
        <button class="close" on:click={closeChat} on:keypress={closeChat}
          >X</button
        >
        <label for="email">email</label>
        <input bind:value={email} type="text" id="email" name="email" />
        <label for="message">message</label>
        <textarea
          bind:value={message}
          name="message"
          id="message"
          cols="30"
          rows="10"
        />
        <button class="send" on:click={sendMessage} on:keypress={sendMessage}
          >send</button
        >
      {/if}
    </div>
  {:else}
    <div class="chat-container">
      <p class="thanks">thanks!</p>
    </div>
  {/if}
</div>

<style>
  .contact-overlay {
    width: 100%;
    height: 100%;
    margin-bottom: -100vh;
    pointer-events: none;
    position: relative;
  }

  .chat-container {
    pointer-events: all;
    position: absolute;
    right: 30px;
    bottom: 50px;
    height: 44px;
    width: 80px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    transition: 0.2s;
  }

  .chat-container .close {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .chat-container .message-me {
    text-align: center;
    opacity: 0.7;
    font-size: 0.9rem;
  }

  .chat-container input,
  .chat-container textarea {
    background-color: #eee;
    width: 100%;
    border-radius: 3px;
    margin: 4px 0;
    padding: 4px;
    font-size: 0.9rem;
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
    background-color: #175676;
    font-size: 0.9rem;
    color: white;
    border-radius: 3px;
  }

  .chat-container .thanks {
    font-size: 0.9rem;
    font-style: italic;
  }

  .chat-container-open {
    width: 300px;
    height: auto;
    justify-content: space-between;
    padding: 8px;
  }
</style>
