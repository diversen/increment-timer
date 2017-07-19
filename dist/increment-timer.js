/* Package: increment-timer. Version: 1.0.0. License: MIT. Author: dennis iversen. Homepage: https://github.com/diversen/amplitude-control#readme   */ (function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.incrementTimer = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Object controlling increment and decrement according to settings
function incrementTimer () {
    this.current = 0;
    this.by = 1;
    this.direction = 'inc';
    this.max = 0;
    this.min = 300;
    
    // Increment and get current value
    this.getCurrentAndIterate = function () {
        this.iterate();
        return this.current;
    };
    
    // Get now and increment
    this.iterateAndGetCurrent = function () {
        var current = this.now;
        this.next;
        return current;
    };
    
    this.iterate = function () {
        if (this.current >= this.max ) this.direction = 'dec';
        if (this.current <= this.min) this.direction = 'inc';
        
        if (this.direction === 'inc') {
            this.current += this.by;
        } 
        if (this.direction === 'dec') {
            this.current -= this.by;
        }
    };
}

module.exports = incrementTimer;
},{}]},{},[1])(1)
});