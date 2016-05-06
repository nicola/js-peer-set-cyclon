peer-set JavaScript implementation
==================================

> Abstraction on a set of peers

# Example

```js
const PeerSet = require('peer-set')
const PeerInfo = require('peer-info')

const Alice = new PeerInfo()
const Bob = new PeerInfo()
const Charles = new PeerInfo()
const Eve = new PeerInfo()

// Set up a PeerSet with 3 peers and a limit of 3 peers
const neighbors = new PeerSet([Alice, Bob, Charles], 3)

// Get two random peers
const replace = neighbors.sample(2)
// => [Alice, Bob]

// Add Eve, and in case we go beyond 3 peers (we will! we are already 3!)
// Then remove [Alice, Bob] in this order
neightbors.add([Eve], replace)

neighbors.peers
// => { aliceid: Alice, bobid: Bob, eveid: Eve }
```

# API

```js
const PeerSet = require('peer-set')
```

## const set = new PeerSet(peers, {limit: number, peerToId: function)

Creates a set of peers with an array of peers, a max size and a function to get the peerId from a peer object. By default, peer objects are assumed to be PeerInfo.

## set.sample(limit)

Randomly sample a set of peers of size `limit`

## set.length

Get the amount of peers

## set.peers

Get the map of peers (`peerId` => `peerObj`)

## set.get(peerObj)
## set.remove(peerObj)
## set.forEach(peer)
## set.add(peers, replaceable)

Adds an array of peers. When adding peers, if going over the limit, then, replace the ones in `replaceable`
## set.on('add', (peer) => {})

Triggered when a new peer is added to the set

## set.on('remove', (peer) => {})

Triggered when a new peer is removed from the set

# License

MIT