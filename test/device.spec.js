describe("Device Tests", function() {
  describe("first object version", function () {
    it("should set kitchen lights on", function() {
      var device = new MyFirstDevice('kitchen lights');
      device.setStatus('on');
      expect(device.getStatus()).toBe('on');
    });
  });
  describe("second object version", function () {
    it("should set kitchen lights on", function() {
      var device = new MySecondDevice('kitchen lights');
      device.setStatus('on');
      expect(device.getStatus()).toBe('on');
    });
    it("should not set kitchen lights to 30%", function() {
      var device = new MySecondDevice('kitchen lights');
      device.setStatus('30%');
      expect(device.getStatus()).toBe('unknown');
    });
    it("should not set kitchen lights to off", function() {
      var device = new MySecondDevice('kitchen lights');
      device.setStatus('off');
      expect(device.getStatus()).toBe('off');
    });
    it("should not set kitchen lights to invalid", function() {
      var device = new MySecondDevice('kitchen lights');
      device.setStatus('');
      expect(device.getStatus()).toBe('unknown');
    });
  });
});
