// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appVersion: '0.17.0',
  // appDomain: 'http://api.inholdings.vn/',
  // appDomain: 'https://erp-dev.appcenter.vn/',
  //appDomain: 'http://art.appcenter.vn/',
  //appDomain: "http://192.168.1.8:54009/",
  //appDomain: "http://10.211.55.6:54009/",
  appDomain: "http://localhost:54009/",
  
  apiVersion: "api/v1/",
  showScrollbar: (navigator.appVersion.indexOf("Win") > -1) || true,
  // signalRServiceDomain: 'https://localhost:5001/' 
  signalRServiceDomain: 'https://signalrservice.appcenter.vn/',
  loginEmail: '@hyec.vn'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
