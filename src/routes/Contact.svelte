<script>
	import { fly } from 'svelte/transition';
	import { ANIM_DURATION, animXFactor, animYFactor } from './store.js';
</script>

<div
	class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
	in:fly={{ duration: ANIM_DURATION, x: 1000 * $animXFactor, y: 1000 * $animYFactor }}
	out:fly={{ duration: ANIM_DURATION, x: -1000 * $animXFactor, y: -1000 * $animYFactor }}
>
	<h1 class="text-center text-5xl text-white">Contact</h1>
</div>
