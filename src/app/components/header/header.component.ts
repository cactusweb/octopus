import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private eRef: ElementRef
  ) { }

  ngOnInit(){
    document.querySelector( 'header' )
      ?.addEventListener( 'mousemove', this.parallax )
  }
  
  parallax( e: MouseEvent ){
    let ells = document.querySelectorAll( '.parallax-block > div' );
    ells.forEach( (ell: any) => {
      if ( window.innerWidth < 780 ) return; 
      
      const speed = ell.getAttribute('data-speed');
      
      if (!speed) return;

      let x =  -e.pageX*Number(speed)/100;
      let y = -e.pageY*Number(speed)/100;

      ell['style'].transform = `translate( ${x}px, ${y}px )`
    })
    
  }


}
