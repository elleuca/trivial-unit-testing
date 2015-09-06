(function(window, undefined) {

  function MyFirstDevice(deviceName) {
    this.status = '';
    this.name = deviceName;

    this.setStatus = function setStatus(newStatus) {
      this.status = newStatus;
    };

    this.getStatus = function getStatus() {
      return this.status;
    };

  }

  window.MyFirstDevice = MyFirstDevice;

})(window);
