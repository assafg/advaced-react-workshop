
export const loggerMiddleware = store => next => action => {
  console.log('Action:', action.type);
  let result = next(action)
  console.log('next state', store.getState().toJS())
  return result
};

const crashReporter = store => next => action => {
  try {
    return next(action)
  } catch (err) {
    console.error('Caught an exception!', err);
    // Optional - add external error reporter
    throw err
  }
}

export default [loggerMiddleware, crashReporter];
