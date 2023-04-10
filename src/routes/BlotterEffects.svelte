<script>
  import { onMount } from "svelte";

  const blotterInit = () => {
    let text = new Blotter.Text("observation", {
      family: "'EB Garamond', serif",
      size: 48,
      fill: "#171717",
      // paddingLeft: 40,
      // paddingRight: 40,
    });

    let material = new Blotter.ChannelSplitMaterial();

    material.uniforms.uOffset.value = 0.05;
    material.uniforms.uRotation.value = 240.0;
    material.uniforms.uApplyBlur.value = 0.0;
    material.uniforms.uAnimateNoise.value = 1.0;

    let blotter = new Blotter(material, {
      texts: text,
    });

    let elem = document.getElementById("blotter");
    let scope = blotter.forText(text);

    scope.appendTo(elem);
  };

  // onMount(blotterInit);
</script>

<div id="blotter" />

<style>
  #blotter {
    position: absolute;
  }
</style>
