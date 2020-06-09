const store = {
  debug: true,
  state: {
    userData: {},
    loggedIn: false,
  },
  setUserData(newValue) {
    if (this.debug) console.log('setUserData triggered with', newValue);
    this.state.userData = newValue;

    if (this.state.userData && this.state.userData.token) {
      this.state.loggedIn = true;
    }
    debugger;
  },
  removeUserData() {
    if (this.debug) console.log('removeUserData triggered');
    this.state.userData = {};
    this.state.loggedIn = false;
  },
};

export default store;
