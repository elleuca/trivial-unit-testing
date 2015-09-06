
var MySecondDevice = ( function( window, undefined ) {

  // this object is used to store private variables and methods across multiple instantiations
  var privates = {
    status: undefined,
    name: undefined,
  };

  var isValidStatus = function isValidStatus (statusToCheck) {
    if (statusToCheck === 'on' || statusToCheck === 'off') {
      return true;
    }
    return false;
  };

  function MySecondDevice(newName) {
    privates.name = newName;
    privates.status = 'unknown';

    this.getName = function getName() {
      return privates.name;
    };

    this.setStatus = function setStatus(newStatus) {
      if (isValidStatus(newStatus)) {
        privates.status = newStatus;
      } else {
        privates.status = 'unknown';
      }
    };

    this.getStatus = function getStatus() {
      return privates.status;
    };

  }

  return MySecondDevice;

} )( window );
