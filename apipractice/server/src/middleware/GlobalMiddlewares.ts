//append_imports_start

import * as cors from 'cors'; //_splitter_
import * as expressSession from 'express-session'; //_splitter_
import { TypeormStore } from '../utils/ndefault-session/Session/SessionStore'; //_splitter_
import { getConnection } from 'typeorm'; //_splitter_
//append_imports_end
export let Middlewares = {
  sd_Tp9jNbUvUZ1kJnAn: () => {
    let corsOptions = {
      origin: true,

      credentials: false,

      preflightContinue: false,
    };
    return cors(corsOptions);
  },
  sd_OFawj8bqui9V3AVB: () => {
    let sess: expressSession.SessionOptions = {
      cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 60 * 60 * 1000,
        sameSite: true,
      },

      proxy: false,

      resave: false,

      rolling: false,

      saveUninitialized: false,

      secret: 'gopal',

      unset: 'keep',

      store: new TypeormStore({
        repository: getConnection('postgres_0').getRepository('Session'),
      }),
    };
    return expressSession(sess);
  },
  //appendnew_flow
};
