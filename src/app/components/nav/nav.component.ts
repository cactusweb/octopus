import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    private eRef: ElementRef
  ) { }

  ngOnInit(): void {
    
  }

  scrollTo( blockId: string, e: MouseEvent ){
    e.preventDefault();
    let btn: HTMLElement|null = document.querySelector('#to-next-block');
    btn?.click()
    setTimeout(() => {
      document.querySelector(`#${blockId}`)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }, 700);
  }

}
