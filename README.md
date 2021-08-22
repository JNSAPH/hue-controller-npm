<p align="center">
      <img src="https://raw.githubusercontent.com/JNSAPH/Hue-Controller/master/assets/Logos/logo.png" width="80">
  <h1 align="center">
    hue-controller
  </h1>
</p>


 
 <h3 align="center">
  <img src="https://img.shields.io/npm/v/philips-hue-controller?orange=blue"/>
  <img alt="downloads" src="https://img.shields.io/npm/dm/philips-hue-controller.svg?color=blue" target="_blank"/>
  <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-yellow.svg" target="_blank" />
</h3>

I wanted to build an Application to controll my Hue Lamps from my PC and got fed up with there not being a good Package to help me build it. Building everything from scratch took forever and i want to save other people from having to do this. 

<br>

## Features
* Set Lamp Colors using RGB instead of XY / Hue
* Use Promises or Async/Await
* Easy to use and setup

<br>

## Getting your Bridges IP and generating a Username
Read the Offical Meethue Developer Documentation for a complete explanation: https://developers.meethue.com/develop/get-started-2/

**IP-Adress:**<br>
Go to https://discovery.meethue.com/ to see your Bridges IP-Adress

**Username:**<br>
Follow the Steps under: https://developers.meethue.com/develop/get-started-2/#so-lets-get-started

<br>

## Installation
```
npm install hue-controller
```

---
<br>

## Code examples
### Inital Setup
```ts
import HueController from 'hue-controller';

const Hue = new HueController({
    "ip": "YOUR-BRIDGES-IP-ADRESS",
    "key": "YOUR-GENERATED-USERNAME"
})
```

## Tutorials
If you made a Tutorial on how to use this Package please DM me on [Twitter](https://twitter.com/JNSAPH) to have your Video displayed here.

<br>

## License
This Project is licensed under the [MIT License](https://github.com/JNSAPH/hue-controller-npm/blob/master/LICENSE)
