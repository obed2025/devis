<script lang="ts">
  import generic from '$lib/assets/OIP-3084535858.jpeg';

  export interface AvatarProps {
    userImage?: string | null;
  }

  const { userImage }: AvatarProps = $props();
</script>

<img
  src={userImage}
  alt=""
  onerror={(e) => {
    const el = e.target as HTMLImageElement;
    el.src = generic;
  }}
/>

<style>
  img {
    width: 2.5rem;
    aspect-ratio: 1;
    border-radius: 50%;
    margin-right: 0.35rem;
  }
</style>
