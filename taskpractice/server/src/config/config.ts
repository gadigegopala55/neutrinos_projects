export default {
  logger: {
    level: 'debug',
    transport: ['file', 'console'],
    exceptionFile: 'logs/exception.log',
    logFile: 'logs/console.log',
  },
  middlewares: {
    pre: [
      { ids: 'hrefstart' },
      { __ssdGlobalMiddlewares__: 'sd_7EmxxOk703exD5hF' },
      { __ssdGlobalMiddlewares__: 'cors' },
    ],
    post: [],
    sequences: { IDSAuthroizedAPIs: { pre: [{ ids: 'Authorize' }], post: [] } },
  },
  ids: {
    client_id: '9r082634PxV7RbchvaCdp',
    client_secret:
      'ixrUPZt8bhjw-ptL6jIlhbG7beKJxhi_pjo13FyEzBydPzA7T7_m-JIzk8GTkiTPqSLpFyrcx1_SIvWBzDZS4g',
    issuerURL: 'https://ids.neutrinos.co',
    enabled: true,
  },
};
