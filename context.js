let proto = {}
function defineProp(prop, name) {
    Object.defineProperty(proto,name, {
        get: function () { return this[prop][name] },
        set: function(val){ this[prop][name] = val}
    })
}

defineProp('request', 'url')
defineProp('request', 'path')
defineProp('request', 'query')
defineProp('response', 'body')

// .....
module.exports = proto