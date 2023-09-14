//append_imports_start

import * as sd_tDWsJ0c91cmg11dV from 'app/sd-services/login'; //_splitter_
import * as sd_YVNBe6nHoF3YV2Ej from 'app/sd-services/register'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class __NEU_ServiceInvokerService__ {
  constructor(
    private sd_tDWsJ0c91cmg11dV: sd_tDWsJ0c91cmg11dV.login,
    private sd_YVNBe6nHoF3YV2Ej: sd_YVNBe6nHoF3YV2Ej.register
  ) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
