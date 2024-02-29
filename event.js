const e = {
  map: new Map(),
  subscribe: function(key, fn) {
    if (!key) return false
    if('function' !== typeof fn) return false
    const list = this.map.get(key) || []
    fn = new WeakRef(fn)
    list.push(fn)
    this.map.set(key, list)
  },
  publish: function(key, ...arg) {
    const list = this.map.get(key)
    if (!list) {
      return 0
    }
    list.forEach(ref => {
      const fn = ref.deref()
      fn && fn.call(this, ...arg)
    })
  },
  unSubscribe: function(key, fn) {
    const list = this.map.get(key)
    if(!list) return false

    if (!fn) {
      list.length = 0
    } else {
      list.forEach((ref, index) => {
        if (ref.deref() === fn) {
          list.splice(index, 1)
        }
      })
    }
  }
}

export default e
