import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Success } from 'src/app/interfaces/success';
import { HttpService } from 'src/app/services/http.service';
import { map, take } from 'rxjs/operators';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-success-block',
  templateUrl: './success-block.component.html',
  styleUrls: ['./success-block.component.scss']
})
export class SuccessBlockComponent implements OnInit, AfterViewInit {
  @ViewChildren(CdkVirtualScrollViewport) viewPorts!: QueryList<CdkVirtualScrollViewport>;
  successVirtualScroll: any;
  currentIndex = 0;

  successes: Success[] = [];

  successBlock!: HTMLElement;

  constructor(
    private http: HttpService,
    private eRef: ElementRef
  ) { }

  ngOnInit() {
    this.getSuccess();
  }

  ngAfterViewInit(){
    
    this.successVirtualScroll = this.viewPorts.toArray()[0];

    this.successBlock = this.eRef.nativeElement.querySelector('#success-viewport .cdk-virtual-scroll-content-wrapper')
    this.successBlock.classList.add('success-block');
    this.intervalScroll()
  }

  intervalScroll(){
    console.log(  )
    setInterval( () => {
      let delta = window.screen.width > 780 ? 5 : 2;
      if ( this.successVirtualScroll?._dataLength <= this.currentIndex )
        this.currentIndex = 0;
      else 
      if ( !(this.successVirtualScroll._renderedRange.start <= this.currentIndex && this.successVirtualScroll._renderedRange.end >= this.currentIndex) )
        this.currentIndex = Math.round( (this.successVirtualScroll._renderedRange.end + this.successVirtualScroll._renderedRange.start)/2 )
      else
        this.currentIndex = this.currentIndex + delta

      this.successVirtualScroll.scrollToIndex(this.currentIndex, 'smooth')
    }, 4000)
  }

  getSuccess(){
    this.http.getSuccess()
      .pipe(
        take(1),
      )
      .subscribe(
        res => {
          if ( !this.successes[0] ){
            this.successes = res
            return
          }

          this.successes = res.slice( 0, res.length - this.successes.length ).concat(this.successes)
        },
        err => {},
        () => setTimeout(() => this.getSuccess(), 5000)
      )
  }

  scrollViewport( delta: number ){
    if ( this.currentIndex + delta > this.successes.length )
      this.currentIndex = 0;
    else 
    if ( this.currentIndex + delta < 0 )
      this.currentIndex = this.successes.length - 1;
    else
    if ( !(this.successVirtualScroll._renderedRange.start <= this.currentIndex && this.successVirtualScroll._renderedRange.end >= this.currentIndex) )
      this.currentIndex = Math.round( (this.successVirtualScroll._renderedRange.end + this.successVirtualScroll._renderedRange.start)/2 ) + delta
    else
      this.currentIndex = this.currentIndex + delta
    this.successVirtualScroll.scrollToIndex(this.currentIndex, 'smooth')
  }

}
