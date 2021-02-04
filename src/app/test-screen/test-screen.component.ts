import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-screen',
  templateUrl: './test-screen.component.html',
  styleUrls: ['./test-screen.component.css']
})
export class TestScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public inputNum = '';
  public typeNum = 'isPrime';
  public fibonacci = false;
  public prime = false;
  handleInput() {
    if (parseInt(this.inputNum) < 0) {
      this.inputNum = '1';
    }
    this.inputNum = this.inputNum.replace(
      /\D/g,
      this.inputNum.charCodeAt(0).toString()
    );
    this.typeNum == 'isPrime'
      ? (this.prime = this.isPrime(parseInt(this.inputNum)))
      : (this.fibonacci = this.isFibonacci(parseInt(this.inputNum)));
  }
  isFibonacci(num: number) {
    if (
      this.isSquare(5 * (num * num) - 4) ||
      this.isSquare(5 * (num * num) + 4)
    ) {
      this.fibonacci = true;
      return true;
    } else {
      this.fibonacci = false;
      return false;
    }
  }
  isSquare(n: number) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
  }
  isPrime(num: number) {
    for (var i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
  }
  handleSelect() {
    console.log('Select', this.typeNum);
    this.typeNum == 'isPrime'
      ? (this.prime = this.isPrime(parseInt(this.inputNum)))
      : (this.fibonacci = this.isFibonacci(parseInt(this.inputNum)));
  }

}
