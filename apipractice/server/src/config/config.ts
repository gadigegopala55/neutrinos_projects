export default {
  logger: {
    level: 'debug',
    transport: ['file', 'console'],
    exceptionFile: 'logs/exception.log',
    logFile: 'logs/console.log',
  },
  middlewares: {
    pre: [
      { __ssdGlobalMiddlewares__: 'sd_OFawj8bqui9V3AVB' },
      { __ssdGlobalMiddlewares__: 'sd_Tp9jNbUvUZ1kJnAn' },
    ],
    post: [],
    sequences: {
      user_sequence: { pre: [{ users: 'user_middleware' }], post: [] },
      marks_sequence: { pre: [{ marks: 'marks_middleware' }], post: [] },
      calculator_sequence: {
        pre: [{ calculator: 'calculator_middleware' }],
        post: [],
      },
    },
  },
};
