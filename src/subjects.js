import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

document.addEventListener('click', () => {
  const stream$ = new ReplaySubject();

  stream$.subscribe(value => console.log('Value: ', value));

  stream$.next('Hello');
  stream$.next('Rx');
  stream$.next('JS');
})
