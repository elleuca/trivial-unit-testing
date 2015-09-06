describe("A suite", function() {
  it("kitchen lights on", function() {
    var device = new MyFirstDevice('kitchen lights');
    device.setStatus('on');
    expect(device.getStatus()).toBe('on');
  });
});
