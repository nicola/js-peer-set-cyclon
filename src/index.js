'use strict'

const PeerSet = require('peer-set')

function max (array) {
  return array.indexOf(Math.max.apply(Math, array))
}

class CyclonPeerSet extends PeerSet {
  constructor (peers, opts = {}) {
    super(peers, opts)

    // Set age = 0 to each peer by default
    Object.keys(this.peers).forEach((id) => {
      this.peers[id].age = 0
    })
  }
  add (peers, replaceable) {
    super.add(peers, replaceable)
    Object.keys(peers).forEach((peer) => {
      if (this.peers[peer] && !this.peers[peer].age) {
        this.peers[peer].age = 0
      }
    })
  }
  updateAge () {
    Object.keys(this.peers).forEach((id) => {
      if (!this.peers[id].age) {
        this.peers[id].age = 0
      }
      this.peers[id].age++
    })
  }
  oldest () {
    var ids = Object.keys(this.peers)
    let oldest = max(ids.map((key) => {
      return this.peers[key].age || 0
    }))
    let id = ids[oldest]
    return this.peers[id]
  }
}

module.exports = CyclonPeerSet
