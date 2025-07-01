<script lang="ts">
  import "../styles/app.scss";
  import "@fortawesome/fontawesome-free/css/all.css";
  import "@fontsource-variable/inter";

  import Nav from "./components/Nav.svelte";
  import Footer from "./components/Footer.svelte";

  let { children } = $props();
</script>

<Nav></Nav>
<main class="container">
  {@render children()}
</main>
<Footer></Footer>
