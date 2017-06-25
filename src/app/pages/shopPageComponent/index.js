import './shopPageComponent.scss';

class ShopPageController {
  constructor() {
    this.$onInit = () => {
      this.selectedManufacturers = [...this.manufacturers];
    };
  }
}

export default {
  bindings: {
    manufacturers: '<',
    items: '<'
  },
  template: require('./shopPageComponent.html'),
  controller: ShopPageController
};
