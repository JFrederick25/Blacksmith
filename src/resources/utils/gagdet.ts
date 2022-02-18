export class timer {
  time: number = 0;
  interval;

  startTimer() {
    this.interval = setInterval(() => {
      this.time++;
    },1000);
  }
}