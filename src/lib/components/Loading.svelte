<section class="center">
  <p class="big loading">⏳</p>
</section>

<style>
  .loading {
    animation: shake-rotate 1.5s infinite;
    font-size: 5rem;
  }

  @keyframes shake-rotate {
    0%,
    100% {
      transform: translateY(0) rotate(0deg);
    }
    25% {
      transform: translateY(-10px) rotate(10deg);
    }
    50% {
      transform: translateY(0) rotate(-10deg);
    }
    75% {
      transform: translateY(10px) rotate(10deg);
    }
  }
</style>
