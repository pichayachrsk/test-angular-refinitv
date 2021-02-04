import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  constructor(private http: HttpClient) {}
  public data: any;
  public tableData : any
  ngOnInit(): void {
    this.http.get('https://api.publicapis.org/categories').subscribe((data) => {
      this.data = data;
      this.tableData = data
    });
  }
  handleInput(input: any) {
    console.log(input.value);
    this.tableData = this.data.filter((data :any) => !input.value || data.toLowerCase().includes(input.value.toLowerCase()))
  }
}
