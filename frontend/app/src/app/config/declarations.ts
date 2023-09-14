import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-register
import { register } from '../sd-services/register';
//CORE_REFERENCE_IMPORT-login
import { login } from '../sd-services/login';
//CORE_REFERENCE_IMPORT-commonService
import { commonService } from '../services/common/common.service';
//CORE_REFERENCE_IMPORT-profileComponent
import { profileComponent } from '../components/profile.component';
//CORE_REFERENCE_IMPORT-dashboardComponent
import { dashboardComponent } from '../components/dashboard.component';
//CORE_REFERENCE_IMPORT-reactive_formsComponent
import { reactive_formsComponent } from '../components/reactive_forms.component';
//CORE_REFERENCE_IMPORT-registerComponent
import { registerComponent } from '../components/register.component';
//CORE_REFERENCE_IMPORT-loginComponent
import { loginComponent } from '../components/login.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/home.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-profileComponent
  profileComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-dashboardComponent
  dashboardComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-reactive_formsComponent
  reactive_formsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-registerComponent
  registerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginComponent
  loginComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
  homeComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-register
register,
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-login
login,
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-commonService
commonService,
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  { path: 'training', component: homeComponent },
  { path: 'login', component: loginComponent },
  { path: 'register', component: registerComponent },
  { path: 'demo', component: reactive_formsComponent },
  { path: 'dashboard', component: dashboardComponent },
  { path: 'profile', component: profileComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
