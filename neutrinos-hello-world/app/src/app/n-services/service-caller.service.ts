//append_imports_start

import * as sd_fwssyW0CyBk692ak from 'app/sd-services/books'; //_splitter_
import * as sd_c2q08HMR2qCBU5Bp from 'app/sd-services/name'; //_splitter_
import * as sd_4CBWUeicfjqRkMYB from 'app/sd-services/tasks'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class __NEU_ServiceInvokerService__ {
  constructor(
    private sd_fwssyW0CyBk692ak: sd_fwssyW0CyBk692ak.books,
    private sd_c2q08HMR2qCBU5Bp: sd_c2q08HMR2qCBU5Bp.name,
    private sd_4CBWUeicfjqRkMYB: sd_4CBWUeicfjqRkMYB.tasks
  ) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
