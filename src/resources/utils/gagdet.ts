export class GameTimer {

  // provided a time in milliseconds and a function,
  // provide a count down to call function
  startCountDown(func, time) {
      setTimeout(() => func, time);
  }
  // setTimeout(() => function, time)
  // provide a timed interval to loop function calls
  // setInterval(() => function, time)
  // provide a clear interval function
}

// figure out why timer doesn't work
