/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
    browser.tabs.insertCSS({code: "body { background: aliceblue !important; }"});
  });
  