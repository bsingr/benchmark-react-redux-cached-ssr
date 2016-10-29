module.exports = (state = {}, action) => {
  let newState;
  if (action.type === 'increment') {
    newState = {};
    newState.count = state.count || 0;
    newState.count += 1;
  } else if (action.type === 'complex') {
    newState = Object.assign(
      {},
      state,
      {
        foo: {
          bar: {
            baz: {
              foo: 'Hello from foo',
              bar: 'Hello from bar',
              baz: 'Hello from baz'
            }
          }
        }
      }
    )
  } else if (action.type === 'reset') {
    newState = {};
  }
  return newState;
};
