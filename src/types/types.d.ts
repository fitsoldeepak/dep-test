type SET_FUNC<T> = (
  fn: (state: T) => T,
  replace?: false | undefined,
  action?: Action | undefined
) => void;
