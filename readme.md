<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Select Picker</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <div class="container">
      <h1>Seleção de cores</h1>
      <div class="inputGroup">
        <label class="label">(R) Red</label>
        <input
          class="range"
          type="range"
          value="0"
          min="0"
          max="255"
          id="rangeR"
        />
        <input class="text" type="text" value="0" disabled id="inputR" />
      </div>

      <div class="inputGroup">
        <label class="label">(G) Green</label>
        <input
          class="range"
          type="range"
          value="0"
          min="0"
          max="255"
          id="rangeG"
        />
        <input class="text" type="text" value="0" disabled id="inputG" />
      </div>
      <div class="inputGroup">
        <label class="label">(B) Blue</label>
        <input
          class="range"
          type="range"
          value="0"
          min="0"
          max="255"
          id="rangeB"
        />
        <input class="text" type="text" value="0" disabled id="inputB" />
      </div>
      <div class="inputGroup">
        <label class="label">(A) Alpha</label>
        <input
          class="range"
          type="range"
          value="1"
          min="0"
          max="1"
          id="rangeA"
          step="0.01"
        />
        <input class="text" type="text" value="1" disabled id="inputA" />
      </div>
      <div class="results">
        <label class="label">
          <span>Hexadecimal&nbsp;</span>
          <input id="inputHex" type="text" value="0" readonly disabled />
        </label>
        <label class="label">
          <span>HSLA&nbsp;</span>
          <input id="inputHSLA" type="text" value="0" readonly disabled />
        </label>
        <label class="label">
          <span>RGBA&nbsp;</span>
          <input id="inputRGBA" type="text" value="0" readonly disabled />
        </label>
      </div>
      <div>
        <div class="box"></div>
      </div>
    </div>
    <script src="js/script.js"></script>
  </body>
</html>
