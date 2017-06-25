export default function () {
  let currentStateObj;

  return {
    onStateChange(newState) {
      currentStateObj = newState;
    },

    on(callback) {
      // TODO: Make it beautiful!
      callback(currentStateObj);
    }
  };
}
