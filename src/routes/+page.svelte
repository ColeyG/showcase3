<script>
  import Contact from "$lib/Contact.svelte";
</script>

<Contact />
<p class="text top-text">Cole Geerts</p>
<p class="text">Great things are Coming</p>
<nav>
  <a href="resume">r&eacute;sum&eacute;</a>
  <a href="misc">misc</a>
</nav>

<style>
  .top-text {
    padding-top: 40vh;
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
