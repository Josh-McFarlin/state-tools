# state-tools
A library to help easily modify React state in one line.

## Usage
Install the package from npm:
```
npm install state-tools --save
```

## Why
When setting React's state, I found it easier to use tools like Lodash
to simplify the process, but many of the functions modify the variable
directly (thus messing with React's state) or return a different variable
meaning the function cannot be used inline.

This library is a set of functions to make it easier to modify React's state.
Each function clones the provided variable (so React state is not modified directly)
and returns the modified clone (so the function can be used inline).

## Examples
```javascript
import { removeAtIndex } from 'state-tools';

// Initial
this.state = {
    someArray: [1, 2, 3, 4, 5]
};

this.setState(prev => ({
    someArray: removeAtIndex(prev.someArray, 1)
}));

// Result
// this.state.someArray == [1, 3, 4, 5]
```

In some use cases, it might be preferable to ignore an error instead of crashing React.
For this use case, there is an utility function called `preserveState`, that can wrap
any function and return the original state if the function fails.
```javascript
import { preserveState, removeAtIndex } from 'state-tools';

// Initial
this.state = {
    someArray: [1, 2, 3, 4, 5]
};

this.setState(prev => ({
    someArray: preserveState(removeIndex, prev.someArray, 100))
}));

// Result
// this.state.someArray == [1, 2, 3, 4, 5]
```

## Function Documentation
state-tools documentation can be accessed [here](https://josh-mcfarlin.github.io/state-tools/api/).

You can also view the complete list of functions and JSDocs on
[GitHub](https://github.com/Josh-McFarlin/state-tools/tree/master/src).
