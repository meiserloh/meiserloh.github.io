<script>

  import AboutMe1 from "./AboutMe1.svelte";
  import AboutMe2 from "./AboutMe2.svelte";
  import AboutMe3 from "./AboutMe3.svelte";
  import Dev1 from "./Dev1.svelte";
  import Dev2 from "./Dev2.svelte";
  import Welcome from "./Welcome.svelte";
  import { animXFactor, animYFactor } from "./store.js";
  import { swipe } from "svelte-gestures";
  import Contact from "./Contact.svelte";

  let cardArray = [
    [{ component: Welcome }],
    [{ component: AboutMe1 }, { component: AboutMe2 }, { component: AboutMe3 }],
    [{ component: Dev1 }, { component: Dev2 }],
    [{ component: Contact }],
  ];

  let xIndex = 0;
  let yIndex = 0;
  $: selected = cardArray[xIndex][yIndex];

  function onKeyDown(e) {
    // console.log("x: " + xIndex, "y: " + yIndex);
    let keyCodeToDirection = {37: "right", 38: "bottom", 39: "left", 40: "top"};
    handleInputForSectionChange(keyCodeToDirection[e.keyCode]);
  }

  function handler(event) {
    let direction = event.detail.direction;
    // console.log(direction);
    handleInputForSectionChange(direction);
  }

  function handleInputForSectionChange(animDirectionTo) {
    switch (animDirectionTo) {
      case "bottom":
        yIndex = Math.max(yIndex - 1, 0);
        animXFactor.set(0);
        animYFactor.set(-1);
        break;
      case "top":
        yIndex = Math.min(yIndex + 1, cardArray[xIndex].length - 1);
        animXFactor.set(0);
        animYFactor.set(1);
        break;
      case "right":
        xIndex = Math.max(xIndex - 1, 0);
        yIndex = 0;
        animXFactor.set(-1);
        animYFactor.set(0);
        break;
      case "left":
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

<svelte:body use:swipe={{ timeframe: 300, minSwipeDistance: 60}} on:swipe={handler} />
<svelte:window on:keydown|preventDefault={onKeyDown} />
