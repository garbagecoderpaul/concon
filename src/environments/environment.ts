// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseApi: 'http://44.214.51.175:3025',
  // baseApi: 'https://api.ukraineconfidential.com/',
  // baseApi: 'https://ukraineconfidential.com/',
  decimals: 1000000000000000000,
  stakeAddressV2:'0x2f7dcb2ecE5E5a6B34dcaCd4Dca39dBc4f0EFffE',
  stakeAddressV1:'0xa7eDe20eC4A5EEe378c7f4399656930E43D404B2',
  testStake:false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
