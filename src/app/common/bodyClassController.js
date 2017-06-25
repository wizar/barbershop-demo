class BodyClassController {
  constructor($transitions) {
    $transitions.onSuccess({}, event => {
      const toState = event.$to();
      if (angular.isDefined(toState.data.bodyClass)) {
        this.bodyClass = toState.data.bodyClass;
      }
    });
  }
}

BodyClassController.$inject = ['$transitions'];

export default BodyClassController;
