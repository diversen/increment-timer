"use strict";

var incrementTimer = require ('./index.js');

console.log(incrementTimer)

// Use: require('increment-timer')
// Using npm: npm install --save increment-timer
var s = new incrementTimer();

s.min = -Math.PI; // minimun value of incrementer
s.max = Math.PI; // max value of incrementer
s.direction = 'inc'; // initial direction. Other option is 'dec'
s.by = 0.1; // increment by
s.current = 0; // initial value

for (var i = 0; i < 100; i++) {
    console.log(s.getCurrentAndIterate());
    // Or use: s.iterateAndGetCurrent()
}
