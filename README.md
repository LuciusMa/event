# event
js event bus with weakref

# usage
```
const ACTION_TEST = 'ACTION_TEST'
function actionTest() {}

e.subscribe(ACTION_TEST, actionTest)
// remove one by key
e.unSubscribe(Contants.ACTION_TEST, actionTest)
// remove all by key
e.unSubscribe(Contants.ACTION_TEST, actionTest)

e.publish(Contants.ACTION_TEST, ...arguments)
```

# GC
if no unSubscribe be called, gc will go on.

[WeakRef](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef)
