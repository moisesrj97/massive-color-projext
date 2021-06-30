let chroma = require('chroma-js');

let levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

export let createPalette = (starterPallete) => {
  let newPallete = {
    paletteName: starterPallete.paletteName,
    id: starterPallete.id,
    emoji: starterPallete.emoji,
    colors: {},
  };
  for (let level of levels) {
    newPallete.colors[level] = [];
  }

  for (let color of starterPallete.colors) {
    let scale = getScale(color.color, 10);
    for (let i = 0; i < scale.length; i++) {
      newPallete.colors[levels[i]].push({
        name: color.name + ' ' + levels[i],
        id: color.name.toLowerCase() + '_' + levels[i],
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i]).css().replace('rgb', 'rgba').replace(')', ',1.0)'),
      });
    }
  }

  return newPallete;
};

let getRange = (hexColor) => {
  return [chroma(hexColor).darken(1.4).hex(), chroma(hexColor).hex(), chroma('white').hex()];
};

let getScale = (hexColor, numOfColors) => {
  return chroma.scale(getRange(hexColor)).mode('lab').colors(numOfColors);
};

export let getShades = (color) => {
  let shades = [];
  let shadesScale = getScale(color, 10);
  for (let i = 0; i < levels.length; i++) {
    shades.push({ level: levels[i], color: shadesScale[i] });
  }
  return shades;
};

export let getLuminance = (color) => {
  return chroma(color).luminance();
};
