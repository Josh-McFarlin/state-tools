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

## Example
```javascript
// Initial
this.state = {
    someArray: [1, 2, 3, 4, 5]
};

this.setState(prev => ({
    someArray: stateTools.removeIndex(prev.someArray, 1)
}));

// Result
// this.state.someArray == [1, 3, 4, 5]
```

## Documentation
Until the first version has been released with official documentation, you can view the
complete list of functions and JSDocs in [src/functions](src/array).
