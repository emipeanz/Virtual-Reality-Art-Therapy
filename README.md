# Virtual Art Therapy - an Web based virtual reality therapy tool for stroke patients 

Paint in VR in your browser. [Read more!](https://blog.mozvr.com/a-painter/)

[![Visual Art Therapy](https://github.com/emipeanz/VR-Art-Therapy-700/blob/master/assets/images/logo-new.png)]

##Users
User guide for using Virtual Art Therapy

###Features
// To Do

###Equipment
To use this application, you will need a VR capable web browser, node (if running locally, [see Development and start 
up below](https://github.com/emipeanz/VR-Art-Therapy-700#local-development-and-start-up)).

You will need an HTC Vive headset, 1 motion controller and 2 sensors, see [Vive](https://www.vive.com/nz/) 
for details on what each component is.

##Development

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
git clone git@github.com:aframevr/a-painter && cd a-painter
```
- Run node commands below to install application and start it locally
```bash
npm install
npm start
```

- Then, load [`http://localhost:8080`](http://localhost:8080) in your browser.

###Debugging and Testing

To test and debug the application, use developer tools available in your web browser. It is **strongly recommended**
you use Mozilla firefox as A-Painter and A-Frame were built by them.

Use ctrl + shift + i to open developer console.

Use ctrl + alt + i to open up the A-Frame inspector. This can be used to inspect the 3D scene and edit 3D objects there.

### Base Application
Virtual Art Therapy is a tool developed from [Mozilla's A-Painter VR Application](https://aframe.io/a-painter/)
Repository was forked and mirrored from [A-Painter source code repository](https://github.com/aframevr/a-painter)

Use the A-Painter readme to get development instructions on how A-Painters URL parameters, their brush API, brush 
interface, common data, registering a new brush and the custom file format used to save 3D pieces of art work/
