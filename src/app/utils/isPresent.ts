import { isEmpty, isNil } from 'ramda';

const isUndefined = (data: unknown) => data === 'undefiend';

export const isPresent = (data: unknown) =>
  !isEmpty(data) && !isNil(data) && !isUndefined(data);
