import {
  range,
  timer,
  interval,
  of,
  from,
  fromEvent,
  scan,
  map,
  filter
} from "rxjs";

// const stream$ = of("Hello", "World");

// stream$.subscribe((value) => {
//   console.log("Value: ", value);
// });

// const arr$ = from([1, 2, 3, 4]).pipe(scan((acc, v) => acc.concat(v), []));
// arr$.subscribe((value) => console.log(value));

// const stream$ = new Observable((observer) => {
//   observer.next("First value");
//
//   setTimeout(() => observer.next("After 1000 ms"), 1000);
//   // setTimeout(() => observer.complete("Complete"), 1500);
//   setTimeout(() => observer.error("Error!!!"), 2000);
//   setTimeout(() => observer.next("After 1000 ms"), 3000);
// });

// stream$.subscribe(
//   (value) => console.log("Value: ", value),
//   (error) => console.log("Something went wrong!"),
//   () => console.log("Complete")
// );

// stream$.subscribe({
//   next(val) {
//     console.log(val);
//   },
//   error(err) {
//     console.log(err);
//   },
//   complete() {
//     console.log('Complete');
//   }
// });

// fromEvent(document.querySelector('canvas'), 'mousemove')
//   .pipe(
//     map(e => ({
//       x: e.offsetX,
//       y: e.offsetY,
//       ctx: e.target.getContext('2d')
//     }))
//   )
//   .subscribe(pos => {
//     pos.ctx.fillRect(pos.x, pos.y, 2, 2);
//   });
//
// const clear$ = fromEvent(document.getElementById('clear'), 'click');
//
// clear$.subscribe(() => {
//   const canvas = document.querySelector('canvas');
//   canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
// })

// const sub$ = interval(500).subscribe(value => console.log(value));
// setTimeout(() => {
//   sub$.unsubscribe();
// }, 4000);

// timer(2500).subscribe((value => console.log(value)));

// range(42, 10).subscribe(value => console.log(value));
