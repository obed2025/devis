<script lang="ts">
  import "../styles/app.scss";
  import "@fortawesome/fontawesome-free/css/all.css";
  import "@fontsource-variable/inter";

  import Nav from "$lib/components/Nav.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import OpenGraph from "$lib/components/OpenGraph.svelte";
  import ScrollToTop from "$lib/components/ScrollToTop.svelte";

  let { children } = $props();
</script>

<OpenGraph></OpenGraph>

<Nav></Nav>
<main class="container">
  {@render children()}
</main>
<Footer></Footer>

<ScrollToTop></ScrollToTop>

<style>
  @media print {
    main {
      padding: 0;
      margin: 0;
    }
  }
</style>
