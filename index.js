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