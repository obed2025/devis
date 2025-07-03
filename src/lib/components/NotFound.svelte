<script lang="ts">
  const { children } = $props();
</script>

<section class="center">
  <span class="big shrug-emoji">🤷‍♂️</span>
  {@render children()}
</section>

<style>
  .shrug-emoji {
    display: inline-block;
    width: 100%;
    text-align: center;

    animation: shrug 1.5s ease-in-out infinite;
    font-size: 5rem;
  }

  @keyframes shrug {
    0%,
    100% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(-10px);
    }
    40% {
      transform: translateY(5px);
    }
    60% {
      transform: translateY(-5px);
    }
    80% {
      transform: translateY(2px);
    }
  }
</style>
