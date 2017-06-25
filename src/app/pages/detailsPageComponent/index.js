import './detailsPageComponent.scss';

class DetailsPageController {
  constructor() {
    this.basePath = require.context('../../../itemsImages', false);
  }

  getLgImagePath() {
    return this.basePath('./' + this.item.imgLg, true);
  }
}

export default {
  bindings: {
    item: '<'
  },
  template: require('./detailsPageComponent.html'),
  controller: DetailsPageController
};
