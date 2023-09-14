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
//CORE_REFERENCE_IMPORT-periodicDataContainerComponent
import { periodicDataContainerComponent } from '../components/dataInteraction/periodicDataContainer.component';
//CORE_REFERENCE_IMPORT-periodicDataComponent
import { periodicDataComponent } from '../components/dataInteraction/periodicData.component';
//CORE_REFERENCE_IMPORT-dialog_pendingComponent
import { dialog_pendingComponent } from '../components/dialog_pending.component';
//CORE_REFERENCE_IMPORT-dialogComponent
import { dialogComponent } from '../components/dialog.component';
//CORE_REFERENCE_IMPORT-cards_dataComponent
import { cards_dataComponent } from '../components/cards_data.component';
//CORE_REFERENCE_IMPORT-task_tableComponent
import { task_tableComponent } from '../components/task_table.component';
//CORE_REFERENCE_IMPORT-task_dataComponent
import { task_dataComponent } from '../components/task_data.component';
//CORE_REFERENCE_IMPORT-task_addComponent
import { task_addComponent } from '../components/task_add.component';
//CORE_REFERENCE_IMPORT-task_homeComponent
import { task_homeComponent } from '../components/task_home.component';
//CORE_REFERENCE_IMPORT-tasks
import { tasks } from '../sd-services/tasks';
//CORE_REFERENCE_IMPORT-get_books_dataComponent
import { get_books_dataComponent } from '../components/get_books_data.component';
//CORE_REFERENCE_IMPORT-side_nav_pageComponent
import { side_nav_pageComponent } from '../components/side_nav_page.component';
//CORE_REFERENCE_IMPORT-HomeComponent
import { HomeComponent } from '../components/app_layout/Home.component';
//CORE_REFERENCE_IMPORT-CreateBookComponent
import { CreateBookComponent } from '../components/CreateBook.component';
//CORE_REFERENCE_IMPORT-Card_taskComponent
import { Card_taskComponent } from '../components/Card_task.component';
//CORE_REFERENCE_IMPORT-CardsComponent
import { CardsComponent } from '../components/Cards.component';
//CORE_REFERENCE_IMPORT-books
import { books } from '../sd-services/books';
//CORE_REFERENCE_IMPORT-name
import { name } from '../sd-services/name';
//CORE_REFERENCE_IMPORT-RegisterComponent
import { RegisterComponent } from '../components/Register.component';
//CORE_REFERENCE_IMPORT-LoginComponent
import { LoginComponent } from '../components/Login.component';

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
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-periodicDataContainerComponent
  periodicDataContainerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-periodicDataComponent
  periodicDataComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-dialog_pendingComponent
  dialog_pendingComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-dialogComponent
  dialogComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-cards_dataComponent
  cards_dataComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-task_tableComponent
  task_tableComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-task_dataComponent
  task_dataComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-task_addComponent
  task_addComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-task_homeComponent
  task_homeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-get_books_dataComponent
  get_books_dataComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-side_nav_pageComponent
  side_nav_pageComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-HomeComponent
  HomeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-CreateBookComponent
  CreateBookComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-Card_taskComponent
  Card_taskComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-CardsComponent
  CardsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-RegisterComponent
  RegisterComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-LoginComponent
  LoginComponent,
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
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-tasks
  tasks,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-books
  books,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-name
  name,
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'card-task', component: Card_taskComponent },
      { path: 'create-book', component: CreateBookComponent },
      { path: 'cards', component: CardsComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'card-task', component: Card_taskComponent },
  { path: 'create-book', component: CreateBookComponent },
  {
    path: 'side-nav-page',
    component: side_nav_pageComponent,
    children: [
      { path: 'card-task', component: Card_taskComponent },
      { path: 'create-book', component: CreateBookComponent },
    ],
  },
  {
    path: 'task-home',
    component: task_homeComponent,
    canActivate: [NeutrinosAuthGuardService],
    children: [
      { path: 'task-add', component: task_addComponent },
      { path: 'task-data', component: task_dataComponent },
      { path: 'task-table', component: task_tableComponent },
    ],
  },
  { path: 'cards-data', component: cards_dataComponent },
  { path: 'dialog', component: dialog_pendingComponent },
  {
    path: 'testing-data',
    component: periodicDataContainerComponent,
    data: { display: true },
  },
  { path: '', redirectTo: 'home/cards', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
