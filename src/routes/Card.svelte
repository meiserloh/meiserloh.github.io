<script>
  import { fly } from "svelte/transition";
  import { animXFactor, animYFactor } from "./store.js";
</script>

<div in:fly="{{duration: 750, x: 1000 * $animXFactor, y: 1000 * $animYFactor}}"
     out:fly="{{duration: 750, x: -1000 * $animXFactor, y: -1000 * $animYFactor}}"
     class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4/5 md:aspect-[4/5] mx-2 px-4 py-10 bg-white shadow-lg rounded-3xl p-20 bg-clip-padding bg-opacity-20"
     style="backdrop-filter: blur(20px);">
  <slot />
</div>