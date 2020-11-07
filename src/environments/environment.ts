// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Config } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'OUmotel',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44321',
    redirectUri: baseUrl,
    clientId: 'OUmotel_App',
    responseType: 'code',
    scope: 'offline_access OUmotel',
  },
  apis: {
    default: {
      url: 'https://localhost:44360',
      rootNamespace: 'OUmotel',
    },
  },
} as Config.Environment;


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
