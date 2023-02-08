import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-mob-menu',
  templateUrl: './nav-mob-menu.component.html',
  styleUrls: ['./nav-mob-menu.component.scss'],
  host: {
    '[style.pointer-events]' : 'isActive ? "initial" : "none"'
  }
})
export class NavMobMenuComponent implements OnInit {
  @Input() isActive: boolean = false;
  @Output() onClose = new EventEmitter();

  constructor(
    private eRef: ElementRef
  ) { }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event'])
  clickout( event: MouseEvent ){
    let targetEl: any = event.target
    if(!this.eRef.nativeElement.contains(event.target) && this.isActive && targetEl.id != 'open-nav-mob' )
      this.changeActiveStatus()
  }

  changeActiveStatus(){
    this.isActive = !this.isActive;
    if ( !this.isActive ) this.onClose.emit()
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
