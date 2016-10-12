'use strict'

/**
 * Module dependencies
 */

const cluster = require('cluster')
const cm = require('cluster-map')
const noop = function () {}
const co = require('co')

/**
 * Actions
 */

const create = cm.createClusterMap
const handle = cm.handleTask

/**
 * Export `Cluster`
 */

module.exports = Cluster

/**
 * Initialize `Cluster`
 */

function Cluster (map, fn) {
  fn = co.wrap(fn)
  if (cluster.isMaster) {
    return create(cluster)(map)
  } else if (cluster.isWorker) {
    handle(fn)
    return new Promise(noop)
  }
}
