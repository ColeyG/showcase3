<script>
  import Contact from "$lib/Contact.svelte";
</script>

<Contact />
<div class="center">
  <div class="pp-con">
    <img src="pp.jpg" alt="Profile" />
  </div>
  <p class="text top-text">Cole Geerts</p>
  <p class="text">Great things are Coming</p>
  <nav>
    <a href="resume">r&eacute;sum&eacute;</a>
    <a
      href="https://github.com/ColeyG"
      target="_blank"
      rel="noopener noreferrer">github</a
    >
    <!-- <a href="misc">misc</a> -->
  </nav>
</div>

<style>
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    margin-top: 220px;
  }

  .top-text {
    z-index: 100;
    position: relative;
  }

  .text {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    z-index: 100;
    position: relative;
  }

  .pp-con {
    z-index: 100;
    margin-bottom: 34px;
    width: 120px;
    height: 120px;
    overflow: hidden;
    border-radius: 50%;
    filter: grayscale(1);
  }

  .pp-con img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  nav {
    z-index: 100;
    position: relative;
    text-align: center;
    margin-top: 33px;
  }

  nav a {
    color: black;
  }
</style>
