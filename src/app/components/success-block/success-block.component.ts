import { Component, OnInit } from '@angular/core';
import { Success } from 'src/app/interfaces/success';
import { HttpService } from 'src/app/services/http.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-success-block',
  templateUrl: './success-block.component.html',
  styleUrls: ['./success-block.component.scss']
})
export class SuccessBlockComponent implements OnInit {
  success: Success[] = [];

  constructor(
    private http: HttpService
  ) { }

  ngOnInit() {
    this.getSuccess();
  }

  getSuccess(){
    this.http.getSuccess()
      .pipe(take(1))
      .subscribe(
        res => this.success = res,
        err => {}
      )
  }

}
