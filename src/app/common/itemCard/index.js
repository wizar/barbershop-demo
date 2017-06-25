import './itemCard.scss';

class ItemCardController {
  constructor() {
    this.basePath = require.context('../../../itemsImages', false);
  }

  getImgPath() {
    return this.basePath('./' + this.item.img, true);
  }
}

export default {
  bindings: {
    item: '<'
  },
  template: require('./itemCard.html'),
  controller: ItemCardController
};
