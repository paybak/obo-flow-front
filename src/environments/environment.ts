// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  debug: {
    msal: true,
    router: true,
  },
  aad: {
    clientId: '<APPLICATION_ID_DU_FRONT>',
    tenantId: '<TENANT_ID>',
    redirectUri: 'https://localhost:4200/callback',
    backends: [
      {
        uri: 'http://localhost:8080',
        scopes: ['http://localhost:8080/user_impersonation']
      }
      // Je ne sais pas si je dois rajouter les infos de l'api distante/microservice. En tout cas, ça ne marchais pas quand le rajoutais, 
      // J'avais l'erreur : The resource principal named http://localhost:8081 was not found in the tenant named <TENANT_ID> alors que l'app était bien sur le tenant ..
      // {
      //   uri: 'http://localhost:8081',
      //   scopes: ['http://localhost:8081/user_impersonation']
      // }
    ]
  }
};

/* 'api://84fabf81-c786-4a4d-ba9c-40df2637dfb0/user.read',
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
