<script>
  import { onMount } from "svelte";

  let offset = 2;
  let size = 34;
  let canvas, c;

  const letterArray = [];

  const randomLetter = () => {
    const allowedCharacters =
      "abcdefghijklmnopqrstuvwxyz0123456789+=/!?@#$%&;:";

    return allowedCharacters.charAt(
      Math.floor(Math.random() * allowedCharacters.length)
    );
  };

  const animation = () => {
    requestAnimationFrame(animation);

    canvas.width = canvas.offsetWidth * devicePixelRatio;
    canvas.height = canvas.offsetHeight * devicePixelRatio;

    c.globalCompositeOperation = "multiply";

    letterArray.forEach((letter, index) => {
      const rad = (letter.rotation * Math.PI) / 180;

      c.font = `${size}px Times serif`;

      c.translate(letter.left - size / 4, letter.top - size / 4);

      //magenta
      c.fillStyle = "rgba(252,3,215,0.8)";
      c.rotate(rad);
      c.fillText(letter.letter, 0, 0);
      c.rotate(rad * -1);
      //yellow
      c.fillStyle = "rgba(227,252,3,0.8)";
      c.translate(offset * -1, offset * -1);
      c.rotate(rad);
      c.fillText(letter.letter, 0, 0);
      c.rotate(rad * -1);
      c.translate(offset, offset);
      //cyan
      c.fillStyle = "rgba(3,240,252,0.8)";
      c.translate(offset, offset);
      c.rotate(rad);
      c.fillText(letter.letter, 0 + offset, 0 + offset);
      c.rotate(rad * -1);
      c.translate(offset * -1, offset * -1);
      c.translate((letter.left - size / 4) * -1, (letter.top - size / 4) * -1);

      letterArray[index].left = letterArray[index].left + letter.velL;
      letterArray[index].top = letterArray[index].top + letter.velT;
      letterArray[index].rotation = letterArray[index].rotation + letter.velR;

      if (letter.left > canvas.width + size) {
        letterArray[index].velL = letterArray[index].velL * -1;
      }

      if (letter.top > canvas.height + size) {
        letterArray[index].velT = letterArray[index].velT * -1;
      }

      if (letter.left + size * 2 < 0) {
        letterArray[index].velL = letterArray[index].velL * -1;
      }

      if (letter.top + size < 0) {
        letterArray[index].velT = letterArray[index].velT * -1;
      }
    });

    if (Math.random() < 0.005) {
      let target = Math.floor(Math.random() * letterArray.length);
      letterArray[target].letter = randomLetter();
      letterArray[target].rotation = Math.random() * 360;
    }
  };

  const canvasInit = () => {
    canvas = document.querySelector("#canvas");
    c = canvas.getContext("2d");

    canvas.width = canvas.offsetWidth * devicePixelRatio;
    canvas.height = canvas.offsetHeight * devicePixelRatio;

    for (let i = 0; i < 15; i++) {
      letterArray.push({
        letter: randomLetter(),
        left: Math.random() * canvas.width - 70 / 4,
        top: Math.random() * canvas.height + 70 / 4,
        rotation: Math.random() * 360,
        // rotation: 90,
        // size: Math.floor(Math.random() * 10 + 15),
        velL: Math.random() * 0.25 - 0.125,
        velT: Math.random() * 0.25 - 0.125,
        velR: Math.random() * 0.25 - 0.125,
        // velR: 10,
      });
    }

    animation();
  };

  const canvasResized = (e) => {
    e.target.width = e.target.offsetWidth;
    e.target.height = e.target.offsetHeight;
  };

  onMount(canvasInit);
</script>

<div class="canvas-mask" />
<canvas id="canvas" on:resize={canvasResized} />

<style>
  .canvas-mask {
    height: 100vh;
    position: absolute;
    width: 100%;
    display: block;
    z-index: 20;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.75) 30%,
      rgba(255, 255, 255, 0.9) 50%,
      rgba(255, 255, 255, 0.75) 70%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  #canvas {
    height: 100vh;
    position: absolute;
    width: 100%;
    display: block;
    object-fit: contain;
    z-index: 10;
  }
</style>
