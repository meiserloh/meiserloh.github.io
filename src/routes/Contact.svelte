<script>
  import { fly } from "svelte/transition";
  import { ANIM_DURATION, animXFactor, animYFactor } from "./store.js";
</script>
<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
     in:fly="{{duration: ANIM_DURATION, x: 1000 * $animXFactor, y: 1000 * $animYFactor}}"
     out:fly="{{duration: ANIM_DURATION, x: -1000 * $animXFactor, y: -1000 * $animYFactor}}">
  <h1 class="text-5xl text-white text-center">Contact</h1>
</div>
