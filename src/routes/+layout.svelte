<script lang="ts">
  import "../styles/app.scss";
  import "@fortawesome/fontawesome-free/css/all.css";
  import "@fontsource-variable/inter";

  import Nav from "$lib/components/Nav.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import OpenGraph from "$lib/components/OpenGraph.svelte";
  import ScrollToTop from "$lib/components/ScrollToTop.svelte";
  import { goto } from "$app/navigation";
  import { browser } from "$app/environment";

  let { children, data } = $props();
  const userImage = data.user?.image;
  const userName = data.user?.name;

  if (userName && browser) {
    goto("/sync-changes");
  }
</script>

<OpenGraph></OpenGraph>

<Nav {userImage} {userName}></Nav>
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
