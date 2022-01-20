<p align="center">
      <img src="https://raw.githubusercontent.com/JNSAPH/Hue-Controller/master/assets/Logos/logo.png" width="80">
  <h1 align="center">
    hue-controller
  </h1>
</p>

 
 <h3 align="center">
  <img src="https://img.shields.io/npm/v/hue-controller?orange=blue"/>
  <img alt="downloads" src="https://img.shields.io/npm/dm/hue-controller.svg?color=blue" target="_blank"/>
  <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-yellow.svg" target="_blank" />
</h3>

This is the new and improved version of the deprecated [hue-controller](https://www.npmjs.com/package/hue-controller).


# Features
* Set Lamp Colors using RGB instead of XY / Hue
* Async / Await
* Easy to use and setup



# Installation
## Getting your Bridges IP and generating a Username
Read the Offical Meethue Developer Documentation for a complete explanation: https://developers.meethue.com/develop/get-started-2/

**IP-Adress:**<br>
Go to https://discovery.meethue.com/ to see your Bridges IP-Adress

**Username:**<br>
Follow the Steps under: https://developers.meethue.com/develop/get-started-2/#so-lets-get-started

## Download Package
```
npm install hue-controller
```

# Code examples
## Inital Setup - using require
```js
const HueController = require('hue-controller').default

const Hue = new HueController({
    "ip": "YOUR-BRIDGES-IP-ADRESS",
    "key": "YOUR-GENERATED-USERNAME"
})
```

## Inital Setup - using import
```ts
import HueController from 'hue-controller';

const Hue = new HueController({
    "ip": "YOUR-BRIDGES-IP-ADRESS",
    "key": "YOUR-GENERATED-USERNAME"
})
```

## Lights, Groups and Sensors
```js
Hue.getLights()
.then((lights) => {
    console.log(lights);
})

Hue.getGroups()
.then((groups) => {
    console.log(groups);
})

Hue.getSensors()
.then((sensors) => {
    console.log(sensors);
})
```

## Working with Lights
```js
// Turn a lamp on or off
Hue.changeState(1, false);

// Turn a lamp to full brightness
Hue.changeBrightness(9, 255);

// Set a lamps color to red
Hue.changeColor(9, {r: 255, g: 0, b: 0});
```

# Tutorials
If you made a Tutorial on how to use this Package please DM me on [Twitter](https://twitter.com/JNSAPH) to have your Video displayed here.

# Support
Having an Issue? Join the [Discord](https://discord.gg/VExqDrb) and we'll help you out!

# License
This Project is licensed under the [MIT License](https://github.com/JNSAPH/hue-controller-npm/blob/master/LICENSE)
