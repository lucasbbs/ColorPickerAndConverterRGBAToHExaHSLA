window.addEventListener('load', function () {
  rangeR = document.querySelector('#rangeR');
  rangeG = document.querySelector('#rangeG');
  rangeB = document.querySelector('#rangeB');
  rangeA = document.querySelector('#rangeA');

  inputR = document.querySelector('#inputR');
  inputG = document.querySelector('#inputG');
  inputB = document.querySelector('#inputB');
  inputA = document.querySelector('#inputA');

  rangeR.addEventListener('change', eventListenerRangeR);
  rangeG.addEventListener('change', eventListenerRangeG);
  rangeB.addEventListener('change', eventListenerRangeB);
  rangeA.addEventListener('change', eventListenerRangeA);

  function eventListenerRangeR() {
    inputR.value = rangeR.value;
    setBGColor(inputR.value, inputG.value, inputB.value, inputA.value);
  }
  function eventListenerRangeG() {
    inputG.value = rangeG.value;
    setBGColor(inputR.value, inputG.value, inputB.value, inputA.value);
  }
  function eventListenerRangeB() {
    inputB.value = rangeB.value;
    setBGColor(inputR.value, inputG.value, inputB.value, inputA.value);
  }
  function eventListenerRangeA() {
    inputA.value = rangeA.value;
    setBGColor(inputR.value, inputG.value, inputB.value, inputA.value);
  }
  box = document.querySelector('.box');

  function setBGColor(r, g, b, a) {
    let bgColor = `rgba(${r},${g},${b},${a})`;
    box.style.background = bgColor;
    document.querySelector('#inputHex').value = RGBAToHexA(r, g, b, a);
    document.querySelector('#inputRGBA').value = bgColor;
    document.querySelector('#inputHSLA').value = RGBToHSL(r, g, b, a);
  }

  function RGBAToHexA(r, g, b, a) {
    red = parseInt(r).toString(16);
    green = parseInt(g).toString(16);
    blue = parseInt(b).toString(16);
    alpha = Math.round(a * 255).toString(16);

    if (red.length == 1) red = '0' + red;
    if (green.length == 1) green = '0' + green;
    if (blue.length == 1) blue = '0' + blue;
    if (alpha.length == 1) alpha = '0' + alpha;

    return '#' + red + green + blue + alpha;
  }
  function RGBToHSL(r, g, b, a) {
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;

    // Find greatest and smallest channel values
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

    // Calculate hue
    // No difference
    if (delta == 0) h = 0;
    // Red is max
    else if (cmax == r) h = ((g - b) / delta) % 6;
    // Green is max
    else if (cmax == g) h = (b - r) / delta + 2;
    // Blue is max
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);
    // Make negative hues positive behind 360°
    if (h < 0) h += 360;
    // Calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return 'hsla(' + h + ',' + s + '%,' + l + '%,' + a + ')';
  }
});
