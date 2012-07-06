
var Dequeue = exports = module.exports = function Dequeue() {
  this.head = new Node()
  this.length = 0
}

Dequeue.prototype.push = function(d){
  var n = new Node(d)
  this.head.prepend(n)
  this.length += 1
  return this
}

Dequeue.prototype.unshift = function(d){
  var n = new Node(d)
  this.head.append(n)
  this.length += 1
  return this
}

Dequeue.prototype.pop = function(){
  var n = this.head.prev.remove()
  this.length -= 1
  return n.data
}

Dequeue.prototype.shift = function(){
  var n = this.head.next.remove()
  this.length -= 1
  return n.data
}

function Node(d) {
  this.data = d
  this.next = this
  this.prev = this
}

Node.prototype.append = function(n) {
  n.next = this.next
  n.prev = this
  this.next.prev = n
  this.next = n
  return n
}

Node.prototype.prepend = function(n) {
  n.prev = this.prev
  n.next = this
  this.prev.next = n
  this.prev = n
  return n
}

Node.prototype.remove = function() {
  this.next.prev = this.prev
  this.prev.next = this.next
  return this
}