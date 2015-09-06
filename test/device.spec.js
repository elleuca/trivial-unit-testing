describe("A suite", function() {
  it("kitchen lights on - first device", function() {
    var device = new MyFirstDevice('kitchen lights');
    device.setStatus('on');
    expect(device.getStatus()).toBe('on');
  });

  it("kitchen lights on - second device", function() {
    var device = new MySecondDevice('kitchen lights');
    device.setStatus('on');
    expect(device.getStatus()).toBe('on');
  });
});
