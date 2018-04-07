// Usage:
// import { ufgHTTPRequest } from './UfgApi';
//
// in application:
//
// ufgHTTPRequest("hi", null, null).then(
//   response => (
//     ...
//   )
// );

import config from './config';
import $ from 'jquery';

export function ufgHTTPRequest(gameID, method, parameters) {
  return new Promise((resolve) => {
    let requestPath = "/" + gameID;
    if (method) {
      requestPath += "/" + method;
      if (parameters) {
        requestPath += "/" + parameters.join("/");
      }
    }
    $.get(config.ufgAPIBaseUrl + requestPath, resolve);
  });
}
