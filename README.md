A Simple Double Ended Queue Datastructure
=========================================

I was using a javascript array as a FIFO. Somewhere between 100,000 and
200,000 entries the program performance went to hell (dev host is a MBP
w/8GB RAM). 15 minutes later, I implemented a simple dequeue and my FIFO
scales up to millions of entries.

It is a dropin replacement for javascript-arrays-as-fifo.

BTW, I use [Felix's Node.js Style Guide](http://nodeguide.com/style.html);
get over it ;)

## So here is the API:

    var Dequeue = require('dequeue')
    
    //var fifo = []
    var fifo = new Dequeue()
    
    fifo.length === 0 //=> true
    
    fifo.push(d1)
    fifo.length === 1 //=> true
    
    fifo.unshift(d2)
    
    fifo.pop() === d1 //=> true
    
    fifo.push(d3)
    
    fifo.shift() === d2 //=> true
    
    fifo.length === 1 //=> true; only d3 is in the dequeue
