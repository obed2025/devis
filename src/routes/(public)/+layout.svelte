<script lang="ts">
  const { children } = $props();
</script>

<nav>
  <ul>
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/auth">Auth</a>
    </li>
    <li>
      <a href="/account">Account</a>
    </li>
  </ul>
</nav>

{@render children()}
