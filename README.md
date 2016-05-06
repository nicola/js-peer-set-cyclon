peer-set-cyclon JavaScript implementation
==================================

> Set of neighboors for the gossip protocol Cyclon

Builds on top of [peer-set](https://github.com/nicola/js-peer-set)

# Example

```js
const PeerSet = require('peer-set-cyclon')
const PeerInfo = require('peer-info')

const Alice = new PeerInfo()
const Bob = new PeerInfo()
const Charles = new PeerInfo()

const neighbors = new PeerSet([Alice, Bob], 3)
neighbors.updateAge()
// Alice.age == 1
// Bob.age == 1
neightbors.add([Charles])
neighbors.updateAge()
// Alice.age == 2
// Bob.age == 2
// Charles.age == 1

neighbors.oldest()
// Alice
```

# API

```js
const PeerSetCyclon = require('peer-set-cyclon')
```

See [peer-set](https://github.com/nicola/js-peer-set) APIs.

## const set = new PeerSetCyclon(peers, {limit: number, peerToId: function)

Creates a set of peers with an array of peers, a max size and a function to get the peerId from a peer object. By default, peer objects are assumed to be PeerInfo.

## set.updateAge()

Updates age of each peer by 1

## set.oldest()

Get the oldest peer in the set

# License

MIT