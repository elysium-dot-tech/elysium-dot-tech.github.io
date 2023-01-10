const social = document.getElementsByTagName("a")[0];

let h = 0;
let s = 100;
let l = 50;
setInterval(() => {
  h = (h + 1) % 360;
  social.style.color = 'hsl('+h+', 100%, 50%, 1)';
}, 10);