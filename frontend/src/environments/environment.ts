// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:3000/api' ,
  firebase: {
    apiKey: "AIzaSyAjgnchKa5QhSFbgnDHJi-zsaO9O7fYx5I",
    authDomain: "ecoml2s1.firebaseapp.com",
    databaseURL: "https://ecoml2s1.firebaseio.com",
    projectId: "ecoml2s1",
    storageBucket: "ecoml2s1.appspot.com",
    messagingSenderId: "201158916236",
    appId: "1:201158916236:web:161cee23f5019403be63a9",
    measurementId: "G-GC9SLDYYLV"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
