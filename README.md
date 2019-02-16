# bb8SpheroMac
Sphero BB8 control from Mac with modifications to use noble-mac

At the time this was created there appeared to be no working example for BB8 control from the Mac. This mostly stemmed from the ble implementations using noble. These needed to be updated to use noble-mac on the mac.

This is a very simple example and has very little error handling.

The cylon-ble package is included for discovery.

To find a BB8 device:
node findBB8.js

Modify index.js and update with the bleID of your device.

This project takes inspiration from here and other places:
https://github.com/hanernlee/bb8-sphero-drive 
