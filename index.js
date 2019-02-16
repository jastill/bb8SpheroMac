
var sphero = require("sphero"),
    
  // Change the BLE ID top match the ID of your device. Hint, you will need to run a discovery.
  bleID = "0b9bbcd7baf24c888d321626e41fbeb1"
    
  bb8 = sphero(bleID);

bb8.connect(function() {
  // roll BB-8 in a random direction, changing direction every second
  setInterval(function() {
    var direction = Math.floor(Math.random() * 360);
    bb8.roll(150, direction);
  }, 1000);
});
