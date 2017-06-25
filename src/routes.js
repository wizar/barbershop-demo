export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  const pages = [
    'prices',
    'contacts'
  ];

  pages.forEach(page => {
    $stateProvider.state({
      name: page,
      url: `/${page}`,
      component: `${page}PageComponent`,
      data: {
        bodyClass: `${page}-page`
      }
    });
  });

  const defaultState = {
    name: 'main',
    url: '/',
    component: 'mainPageComponent',
    data: {
      bodyClass: 'index'
    }
  };

  $stateProvider.state(defaultState);

  $stateProvider.state({
    name: 'shop',
    url: '/shop',
    component: 'shopPageComponent',
    data: {
      bodyClass: 'shop-page'
    },
    resolve: {
      items(ItemsService) {
        return ItemsService.getItems();
      },

      manufacturers(ItemsService) {
        return ItemsService.getManufacturers();
      }
    }
  });

  $stateProvider.state({
    name: 'shop.details',
    url: '/{itemId}',
    views: {
      '@': {
        component: 'detailsPageComponent'
      }
    },
    data: {
      bodyClass: 'details-page'
    },
    resolve: {
      item(items, $stateParams) {
        return items.find(item => {
          return item.id == $stateParams.itemId;
        });
      }
    }
  });
}
