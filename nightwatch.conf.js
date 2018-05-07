const seleniumServer = require("selenium-server");
const chromedriver = require("chromedriver");

const config = {
    "src_folders" : ["tests"],
    "output_folder" : "reports",
    "custom_commands_path" : "",
    "custom_assertions_path" : "",
    "page_objects_path" : ["tests/pages"],
    "globals_path" : "",

    "selenium" : {
      "start_process" : true,
      "server_path" : seleniumServer.path,
      "log_path" : "./test-results/",
      "port" : 4444,
      "cli_args" : {
        "webdriver.chrome.driver" : chromedriver.path
      }
    },

    "test_settings" : {
      "default" : {
        "launch_url" : "http://localhost",
        "selenium_port": 4444,
        "selenium_host": "localhost",
        "silent": true,
        "screenshots" : {
          "enabled" : false,
          "path" : ""
        },
        "desiredCapabilities": {
            "browserName": "chrome",
            "javascriptEnabled": true,
            "acceptSslCerts": true,
            "chromeOptions": {
                "args": ["window-size=1800,1200"] // ["headless", "disable-gpu"]
            }
        }
      }
    }
  }

  module.exports = config;
