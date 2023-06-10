<script>

import Card from "./Card.svelte";
import AboutMe1 from "./AboutMe1.svelte";
import AboutMe2 from "./AboutMe2.svelte";
import AboutMe3 from "./AboutMe3.svelte";
import Dev1 from "./Dev1.svelte";
import Dev2 from "./Dev2.svelte";
import Welcome from "./Welcome.svelte";
import { fly } from 'svelte/transition';
import { animXFactor, animYFactor } from "./store.js";

let cardArray = [
	[{isCard: false, component: Welcome}],
	[{isCard: true, component: AboutMe1}, {isCard: true, component: AboutMe2}, {isCard: true, component: AboutMe3}],
	[{isCard: true, component: Dev1}, {isCard: true, component: Dev2}]
]

let xIndex = 0;
let yIndex = 0;
$: selected = cardArray[xIndex][yIndex];

function onKeyDown(e) {
	console.log("x: " + xIndex, "y: " + yIndex);
	switch(e.keyCode) {
		case 38: // up
			yIndex = Math.max(yIndex-1, 0);
			animXFactor.set(0);
			animYFactor.set(-1);
			break;
		case 40: // down
			yIndex = Math.min(yIndex+1, cardArray[xIndex].length - 1);
			animXFactor.set(0);
			animYFactor.set(1);
			break;
		case 37: // left
			xIndex = Math.max(xIndex-1, 0);
			yIndex = 0;
			animXFactor.set(-1);
			animYFactor.set(0);
			break;
		case 39: // right
			xIndex = Math.min(xIndex+1, cardArray.length - 1);
			yIndex = 0;
			animXFactor.set(1);
			animYFactor.set(0);
			break;
	}
}


</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="w-full h-screen">
	{#if selected.isCard}
		{#key (xIndex.toString() + yIndex.toString())}
			<Card>
				<svelte:component this={selected.component}/>
			</Card>
		{/key}
	{:else}
	<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
			 in:fly="{{x: 1000 * $animXFactor, y: 1000 * $animYFactor}}" out:fly="{{x: -1000 * $animXFactor, y: -1000 * $animYFactor}}">
		<svelte:component this={selected.component}/>
  </div>
	{/if}
</section>

<svelte:window on:keydown|preventDefault={onKeyDown}/>
