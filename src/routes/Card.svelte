<script>
  import { fly } from "svelte/transition";
  import { animXFactor, animYFactor, ANIM_DURATION } from "./store.js";
</script>

<div in:fly="{{duration: ANIM_DURATION, x: 1000 * $animXFactor, y: 1000 * $animYFactor}}"
     out:fly="{{duration: ANIM_DURATION, x: -1000 * $animXFactor, y: -1000 * $animYFactor}}"
     class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4/5 md:aspect-[4/5] w-4/5 md:w-auto px-4 py-10 bg-white shadow-lg rounded-3xl bg-clip-padding bg-opacity-20"
     style="backdrop-filter: blur(20px);">
  <slot />
</div>