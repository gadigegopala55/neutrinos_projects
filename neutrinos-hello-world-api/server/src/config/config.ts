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
    sequences: {
      IDSAuthroizedAPIs: { pre: [{ ids: 'Authorize' }], post: [] },
      custom_sequence: {
        pre: [{ pre_middleware: 'pre_auth' }],
        post: [{ post_middleware: 'post_auth' }],
      },
    },
  },
  ids: {
    client_id: 'whXv1d4_8_8lvgkiDrqUI',
    client_secret:
      'wyvp4QywLGjpykJC0esUubHVgMnx-bPhUW7BB3JYDYd5XY-BxXxvgkXl2F7_Iwoqq5lAkgX46F8LfVBudc7w7A',
    issuerURL: 'https://ids.neutrinos.co',
    enabled: true,
  },
};
