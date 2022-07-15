import { ofType } from 'redux-observable';
import { tap, delay, ignoreElements } from 'rxjs/operators';

const gameEpics = (action$) =>
  action$.pipe(
    ofType('fasdfasdasd'),
    delay(3000),
    // eslint-disable-next-line no-console
    tap(console.log),
    ignoreElements(),
  );

export { gameEpics };
