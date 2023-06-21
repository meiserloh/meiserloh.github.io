<script>
	import { fly } from 'svelte/transition';
	import { animXFactor, animYFactor, ANIM_DURATION } from './store.js';
</script>

<div
	in:fly={{ duration: ANIM_DURATION, x: 1000 * $animXFactor, y: 1000 * $animYFactor }}
	out:fly={{ duration: ANIM_DURATION, x: -1000 * $animXFactor, y: -1000 * $animYFactor }}
	class="card variant-soft absolute left-1/2 top-1/2 h-4/5 w-4/5 -translate-x-1/2 -translate-y-1/2 transform p-4 md:aspect-[4/5] md:w-auto"
>
	<slot />
</div>
