import successForm from './successForm.html';

class FeedbackController {
  constructor($scope, ngDialog) {
    this.$scope = $scope;
    this.ngDialog = ngDialog;
  }

  next() {
    this.$scope.closeThisDialog();
    this.ngDialog.open({
      template: successForm,
      plain: true,
      className: 'ngdialog-theme-plain ngdialog-custom'
    });
  }
}

FeedbackController.$inject = ['$scope', 'ngDialog'];

export default FeedbackController;
