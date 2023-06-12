import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  apidata : any = "";

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): any{
    this.homeService.getData().then((r) => {
      this.apidata = r;
    });
  }
}
