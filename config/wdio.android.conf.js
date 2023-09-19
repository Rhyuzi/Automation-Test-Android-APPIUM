const path = require('path');
const { config } = require('./wdio.shared.conf');

// ====================
// Runner Configuration
// ====================
//
config.port = 4723;

//
// ============
// Specs
// ============
config.specs = [
  path.join(process.cwd(), './test/specs/android/webview*.js')
];

//
// ============
// Capabilities
// ============
  config.capabilities = [
    {
      platformName: "Android",
      "appium:platformVersion": "11",
      "appium:deviceName": "Pixel 3 API 30",
      "appium:automationName": "UIAutomator2",
      "appium:app": path.join(process.cwd(), "./app/android/app-debug.apk"),
      "appium:autoGrantPermissions": true,
      "appium:appPackage": "id.reminderapp",
      "appium:appActivity": "MainActivity"
      
    }
  ]

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = [['appium', {
  args: {
    address: 'localhost',
    port: 4723,
    relaxedSecurity: true
  },
  logPath: './'
}]];

exports.config = config;
