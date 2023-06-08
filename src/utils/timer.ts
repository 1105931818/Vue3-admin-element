export class timer {
  hours: number;
  message: string;
  constructor() {
    this.hours = new Date().getHours();
    this.message = this.init();
  }

  init(): string {
    if (this.hours > 5 && this.hours < 9) {
      return 'Hi,早上好';
    } else if (this.hours < 12) {
      return 'Hi,上午好';
    } else if (this.hours < 14) {
      return 'Hi,中午好';
    } else if (this.hours < 18) {
      return 'Hi,下午好';
    } else {
      return 'Hi,晚上好';
    }
  }
}

export default new timer();
