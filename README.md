# Grafiti-Map
**Project Goal:** This platform will act as a little game where users can see and try to spot all of the grafiti around campus at the University of Illinois. Users will see a map of all the general locations of grafiti and be able to check them off inidividually. After a grifiti location is selected, a 3d model of the object the grafiti is on will be displayed (as a sort of hint). Users will also be able to sort by "type" and location of grafiti on the map.

**Technologies**
- Frontend -> [ReactJS](https://react.dev/) is the main driver for the frontend. Many components are borrowed from [MUI React Components](https://mui.com/joy-ui/getting-started/) (JOY UI Core). The map element is an extension of [LeafletJS](https://leafletjs.com/) for React named [React Leaflet](https://react-leaflet.js.org/).
- Backend -> [Flask](https://flask.palletsprojects.com/en/3.0.x/) is the main driver for the backend. It will be a data meditaor between the database and the frontened.
- Database -> [MongoDB](https://www.mongodb.com/) is the database of choice. It will house the grafiti location, type, and model data.

**Next Steps**
- Port the project to TypeScript
- Collect Grafiti data around campus
- Add 3d model display functionality (look at [ThreeJS](https://threejs.org/_)
- MongoDB database integration
- Deployment + Advertisement
