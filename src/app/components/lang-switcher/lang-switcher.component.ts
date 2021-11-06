import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-lang-switcher',
  templateUrl: './lang-switcher.component.html',
  styleUrls: ['./lang-switcher.component.scss']
})
export class LangSwitcherComponent implements OnInit {
  isEnLang: boolean = true;

  constructor(
    private transloco: TranslocoService
  ) { 
    this.isEnLang = this.transloco.getActiveLang() == 'en'
  }

  ngOnInit(): void {
  }

  onChangeLang(){
    this.transloco.setActiveLang( this.isEnLang ? 'en' : 'ru' );
    localStorage.setItem( "lang", this.isEnLang ? 'en' : 'ru' )
  }
  

}
