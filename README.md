_This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)._

# Highlights Map

A Google Maps React Application for the Udacity Front End Nanodegree program showing cool places in my area.

## Getting started

**Installation**

_Cloning the repository_

```
git clone https://github.com/circular-code/highlightsmap.git
```

_Dev Server_

- install all project dependencies with `npm install`
- start the development server with `npm start`

_Build Server_

- to output a build version run `npm run build`
- after the build folder has been deployed run `npm install -g serve`, or skip if you have installed serve already
- run `serve -s build` to launch the static server. It will usualy be available at localhost:5000
- in order to test the service worker you need to run a build server

## Using the Application

**Choosing a Place**

1. Choose a place, by clicking on one of the green markers located on the map. You may also click on the label or on the list on the left.
2. The chosen place will highlight in aqua color and a new section will open, showing details of the location, aswell as impression images of the location loaded from flickr.
3. You can change places by clicking on another place on the map. Only one place can be selectead at a time.

**Filter Places**

1. On the left part of the page, you will see an input. You can enter a name of a place you want to find, and the list will be filtered accordingly.
2. You can tab with the tab key between the input and the items in the list.
3. Select a focused place by pressing the enter key.
4. Additional information will be shown, which can now also be accesed by tabbing (after the list of places).

## License

None.

## Dependencies

The following dependencies have been used to build this project.
Make sure to run `npm install` before launching the project.

- [React](https://github.com/facebook/React)
- [React Router](https://github.com/ReactTraining/react-router)
- [React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
- [Udacity Books API](https://reactnd-books-api.udacity.com)
- [Google Map React](https://github.com/google-map-react/google-map-react)

## Contributing

This repository is a student project for udacity FEND. Contributions are not intended.
