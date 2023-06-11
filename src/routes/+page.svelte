<script>

  import AboutMe1 from "./AboutMe1.svelte";
  import AboutMe2 from "./AboutMe2.svelte";
  import AboutMe3 from "./AboutMe3.svelte";
  import Dev1 from "./Dev1.svelte";
  import Dev2 from "./Dev2.svelte";
  import Welcome from "./Welcome.svelte";
  import { animXFactor, animYFactor } from "./store.js";

  let cardArray = [
    [{ component: Welcome }],
    [{ component: AboutMe1 }, { component: AboutMe2 }, { component: AboutMe3 }],
    [{ component: Dev1 }, { component: Dev2 }]
  ];

  let xIndex = 0;
  let yIndex = 0;
  $: selected = cardArray[xIndex][yIndex];

  function onKeyDown(e) {
    console.log("x: " + xIndex, "y: " + yIndex);
    switch (e.keyCode) {
      case 38: // up
        yIndex = Math.max(yIndex - 1, 0);
        animXFactor.set(0);
        animYFactor.set(-1);
        break;
      case 40: // down
        yIndex = Math.min(yIndex + 1, cardArray[xIndex].length - 1);
        animXFactor.set(0);
        animYFactor.set(1);
        break;
      case 37: // left
        xIndex = Math.max(xIndex - 1, 0);
        yIndex = 0;
        animXFactor.set(-1);
        animYFactor.set(0);
        break;
      case 39: // right
        xIndex = Math.min(xIndex + 1, cardArray.length - 1);
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
  <svelte:component this={selected.component} />
</section>

<svelte:window on:keydown|preventDefault={onKeyDown} />
