"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    bluetooth: { adaptor: "central", module: __dirname +"/node_modules/cylon-ble/" }
  },

  work: function(my) {
    var peripherals = {};

    my.bluetooth.on("discover", function(peripheral) {
      // Only look for a local name with BB at the start. Typical name :
      // Name    | UUID                             | RSSI
      // ------- | -------------------------------- | ----
      // BB-A691 | 0b9bbcd7baf24c888d321626e41fbeb1 | -72

      if (peripheral.advertisement.hasOwnProperty("localName")) {
        if (peripheral.advertisement.localName.indexOf('BB') == 0 ) {
          peripherals[peripheral.uuid] = peripheral;
        }
      }
    });

    console.log("Listening for BLE peripherals, one moment...");

    every((5).seconds(), function() {
      console.log("Known Bluetooth Peripherals:");
      console.log("Name    | UUID                             | RSSI");
      console.log("------- | -------------------------------- | ----");

      for (var uuid in peripherals) {
        var p = peripherals[uuid];

        console.log([
          p.advertisement.localName,
          p.uuid,
          p.rssi
        ].join(" | ") + "\n");
      }
    });
  }
}).start();