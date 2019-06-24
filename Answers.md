1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
.map, .filter, and .reduce
We use .map()



1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions send the "action" to the reducer so the reducer can commiunicate with the store and return the state to the action back to the component

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

App state is immutable and we always clone the state object
Component state is dynamic and is never cloned, always updated
When using Redux you must have App state to talk to the central store


1.  What is middleware?

Middleware is a powerful extension point for Redux. We can use middleware to add new functionality to Redux. The idea behind middleware is to intercept some process, run a function at the intercept point, then (usually) continue the process. Or, sometimes middleware stops the process entirely. 

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

When an action creator is called, redux-thunk will intercept and look at what is returned. If the thing returned is an action, it will forward the action through to the reducer. But, if the thing returned is a function, aka a thunk (a function returned from a function), then it will invoke that function and pass in the dispatch function as an argument to it.

1.  Which `react-redux` method links up our `components` with our `redux store`?

the Provider