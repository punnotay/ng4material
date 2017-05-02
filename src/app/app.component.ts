import { Component } from '@angular/core';
import { Http, Response } from '@angular/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  spaceScreens: Array<any>;
  constructor(private http: Http) {
    this.http.get('assets/data.json')
      .map((response:Response) => response.json().screenshots)
      .subscribe(res => this.spaceScreens = res);
  }

  likeMe(i) {
    if (this.spaceScreens[i].liked == 1)
      this.spaceScreens[i].liked = 0;
    else
      this.spaceScreens[i].liked = 1;
  }

  deleteMe(i) {
    this.spaceScreens.splice(i,1);
  }

  openDialog() {
    //this.dialog.open(DialogOverview);
    console.log("test");
  }
}

/*@Component({
  selector: 'dialog-overview',
  templateUrl: './dialog-overview.html'
})
export class DialogOverview {}*/
