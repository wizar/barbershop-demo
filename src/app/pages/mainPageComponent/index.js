import './index-content.scss';
import '../../../../node_modules/ng-dialog/css/ngDialog.min.css';
import '../../../../node_modules/ng-dialog/css/ngDialog-theme-plain.min.css';
import feedbackTemplate from './feedback.html';
import successForm from './successForm.html';

class MainPageController {
  constructor(ngDialog) {
    this.ngDialog = ngDialog;
  }

  openFeedbackForm() {
    this.ngDialog.open({
      template: feedbackTemplate,
      plain: true,
      className: 'ngdialog-theme-plain ngdialog-custom',
      controller: 'FeedbackController'
    });
  }

  openSignInSuccessModal() {
    this.ngDialog.open({
      template: successForm,
      plain: true,
      className: 'ngdialog-theme-plain ngdialog-custom'
    });
  }
}

MainPageController.$inject = ['ngDialog'];

export default {
  template: require('./index-content.html'),
  controller: MainPageController
};
