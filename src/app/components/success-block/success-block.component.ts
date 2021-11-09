import { AfterViewInit, Component, OnDestroy, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { Success } from 'src/app/interfaces/success';
import { HttpService } from 'src/app/services/http.service';
import { take } from 'rxjs/operators';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-success-block',
  templateUrl: './success-block.component.html',
  styleUrls: ['./success-block.component.scss']
})
export class SuccessBlockComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren(CdkVirtualScrollViewport) viewPorts!: QueryList<CdkVirtualScrollViewport>;
  successVirtualScroll: any;
  currentIndex = 0;

  successes: Success[] = [];

  successBlock!: HTMLElement;

  lastScrollTimestamp: number = new Date().getTime();

  constructor(
    private http: HttpService,
    private renderer: Renderer2
  ) { }

  unlistener1!: () => void;
  unlistener2!: () => void;

  ngOnInit() {
    this.getSuccess();
  }

  ngAfterViewInit(){
    
    this.successVirtualScroll = this.viewPorts.toArray()[0];

    this.successBlock =  this.successVirtualScroll.elementRef.nativeElement.querySelector('.cdk-virtual-scroll-content-wrapper')
    this.successBlock.classList.add('success-block');
    this.intervalScroll();
    this.listenScrollSuccessBlock();
  }

  ngOnDestroy(){
    this.unlistener1();
    this.unlistener2();
  }

  listenScrollSuccessBlock(){
    this.unlistener1 = this.renderer.listen( this.successBlock, 'wheel', ( e: WheelEvent ) => {
      if ( e.deltaX === 0 || e.deltaX === -0 ) return;
      this.lastScrollTimestamp = new Date().getTime();
    })

    this.unlistener2 = this.renderer.listen( this.successBlock, 'touchmove', () => {
      this.lastScrollTimestamp = new Date().getTime() 
    })
  }

  intervalScroll(){
    setInterval( () => {
      if ( this.lastScrollTimestamp + 4000 > new Date().getTime() ) return;
      
      let delta = window.screen.width > 780 ? 5 : 2;
      if ( this.successVirtualScroll?._dataLength <= this.currentIndex )
        this.currentIndex = 0;
      else 
      if ( !(this.successVirtualScroll._renderedRange.end >= this.currentIndex) )
        this.currentIndex = this.successVirtualScroll._renderedRange.end + 5
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
