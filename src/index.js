import angular from 'angular';

import 'angular-ui-router';
import 'checklist-model';
import 'ngmap';
import 'ng-dialog';

import routesConfig from './routes';

// DEBUG
// import {Visualizer} from '@uirouter/visualizer';

// Common components
import bsHeader from './app/common/header/header';
import bsFooter from './app/common/footer/footer';

// Pages
import mainPageComponent from './app/pages/mainPageComponent';
import pricesPageComponent from './app/pages/pricesPageComponent';
import shopPageComponent from './app/pages/shopPageComponent';
import detailsPageComponent from './app/pages/detailsPageComponent';
import contactsPageComponent from './app/pages/contactsPageComponent';

// Components
import itemCard from './app/common/itemCard';

// Standalone controllers
import BodyClassController from './app/common/bodyClassController';
import FeedbackController from './app/pages/mainPageComponent/feedbackController';

// Services
import ItemsService from './app/services/itemsService';

// Filters
import InArrayFilter from './app/filters/inArray';

import './index.scss';

export const app = 'app';

angular
  .module(app, ['ui.router', 'checklist-model', 'ngMap', 'ngDialog'])
  .config(routesConfig)
  .controller('BodyClassController', BodyClassController)
  .controller('FeedbackController', FeedbackController)
  .service('ItemsService', ItemsService)
  .filter('inArray', InArrayFilter)
  .component('bsHeader', bsHeader)
  .component('bsFooter', bsFooter)
  .component('mainPageComponent', mainPageComponent)
  .component('pricesPageComponent', pricesPageComponent)
  .component('shopPageComponent', shopPageComponent)
  .component('detailsPageComponent', detailsPageComponent)
  .component('contactsPageComponent', contactsPageComponent)
  .component('itemCard', itemCard);
