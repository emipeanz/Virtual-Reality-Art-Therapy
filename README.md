# Virtual Art Therapy - The Kaleidoscope Experience
##### A Web based virtual reality therapy tool for stroke patients - a prototype

Paint in VR in your browser. [Read more!](https://blog.mozvr.com/a-painter/)

![Visual Art Therapy](https://github.com/emipeanz/VR-Art-Therapy-700/blob/master/assets/images/logo-new.png)

## Users
User guide for using Virtual Art Therapy

### Features
The Kaleidoscope Experience shows off technologies and features that could be
extended in the future. A key aspect of this is the tessellation and rotation
of paint strokes.

- Paint strokes that are rotated around a point like a Kaleidoscope
- Paint in restricted areas to better target specific movements
- Users can place their own target paint area, or let the system do it for them
- Paint brush changes color randomly to create immerse and colourful experiences
- Ability for system to be extended in the future
- Option for therapists to input their own parameters to better target patients physical therapy
- Developer and testing tools provided

### Equipment
To use this application, you will need a VR capable web browser, node (if running locally, [see Development and start 
up below](https://github.com/emipeanz/VR-Art-Therapy-700#local-development-and-start-up)).

You will need an HTC Vive headset, 1 motion controller and 2 sensors, see [Vive](https://www.vive.com/nz/) 
for details on what each component is.

This application is designed for use sitting down in a stationary position.

## Development

### Usage

- Fork and Clone project [See Development and start up below](https://github.com/emipeanz/VR-Art-Therapy-700#local-development-and-start-up)
- Grab a [WebVR-enabled browser](https://webvr.rocks/).
- Start up Virtual Art Therapy [See Development and start up below](https://github.com/emipeanz/VR-Art-Therapy-700#local-development-and-start-up)
- Create some beautiful art

### Local Development and Start Up

#### Forking, cloning and set up
- Install [Node](https://nodejs.org/en/)

- Fork the repo by clicking the fork symbol up the top right hand corner
- Clone repo locally with commands below
```bash
>> git clone https://github.com/emipeanz/VR-Art-Therapy-700.git
>> cd a-painter
```
- Run node commands below to install application and start it locally
```bash
>> npm install
>> npm start
```

- Then, load [`http://localhost:8080`](http://localhost:8080) in your browser.

### Debugging and Testing

To test and debug the application, use developer tools available in your web browser. It is **strongly recommended**
you use Mozilla firefox as A-Painter and A-Frame were built by them.

Use `ctrl + shift + i` to open developer console.

Use `ctrl + alt + i` to open up the A-Frame inspector. This can be used to inspect the 3D scene and edit 3D objects there.

There are permanent developer buttons up top to help manage metrics and different modes available in the application.

### Base Application
Virtual Art Therapy is a tool developed from [Mozilla's A-Painter VR Application](https://aframe.io/a-painter/)
Repository was forked and mirrored from [A-Painter source code repository](https://github.com/aframevr/a-painter)

Use the A-Painter readme to get development instructions on how A-Painters URL parameters, their brush API, brush 
interface, common data, registering a new brush and the custom file format used to save 3D pieces of art work/
