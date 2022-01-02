import {
  interval,
  fromEvent,
  map,
  filter,
  tap,
  take,
  takeLast,
  takeWhile,
  scan,
  reduce,
  switchMap
} from 'rxjs';

fromEvent(document, 'click')
  .pipe(
    switchMap(event => {
      return interval(1000)
        .pipe(
          tap(value => console.log('Tap: ', value)),
          take(5),
          reduce((acc, v) => acc + v, 0)
        )
    })
  )
  .subscribe({
    next: v => console.log('Next: ', v),
    complete: () => console.log('Complete')
  })

// const stream$ = interval(1000)
//   .pipe(
//     // tap(value => console.log('Tap: ', value)),
//     take(5),
//     // map(value => value * 3),
//     // filter(value => value % 2 === 0),
//     // take(10),
//     // takeLast(5),
//     // takeWhile(v => v < 7)
//     // scan((acc, v) => acc + v, 0),
//     reduce((acc, v) => acc + v, 0)
//   )
//
// stream$.subscribe({
//   next: value => console.log('Next: ', value),
//   complete: () => console.log('Complete')
// })
