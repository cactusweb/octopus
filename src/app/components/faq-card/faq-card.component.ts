import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-card',
  templateUrl: './faq-card.component.html',
  styleUrls: ['./faq-card.component.scss']
})
export class FaqCardComponent implements OnInit {
  isOpen: boolean = false;

  @Input('name') cardName: string = '';

  constructor(
    private eRef: ElementRef
  ) { }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if(!this.eRef.nativeElement.contains(event.target) && this.isOpen)
      this.onClickCard();
  }

  
  onClickCard(){
    this.isOpen = !this.isOpen;
    let p: HTMLElement = this.eRef.nativeElement.querySelector('p.card__body');
    p.style['maxHeight'] = this.isOpen ? `${p.scrollHeight}px` : '0px';
  }

}
