<script>
	import { fly } from 'svelte/transition';
	import { ANIM_DURATION, animXFactor, animYFactor } from './store.js';
	import arrow from '$lib/images/arrow_right_blur.png';
</script>

<div
	class="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center"
	in:fly={{ duration: ANIM_DURATION, x: 1000 * $animXFactor, y: 1000 * $animYFactor }}
	out:fly={{ duration: ANIM_DURATION, x: -1000 * $animXFactor, y: -1000 * $animYFactor }}
>
	<h1 class="text-center text-5xl text-white">MATTHIAS<br />EISERLOH</h1>
	<img
		src={arrow}
		alt="arrow right"
		class="relative top-32 -translate-x-4 animate-bounce-right-fade-in opacity-0"
	/>
</div>
