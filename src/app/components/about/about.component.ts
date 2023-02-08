import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  cardsName = [
    [
      'market',
      'crypto-currency',
    ],
    [
      'cardano',
      'nft',
    ],
    [
      'crypto-games',
      'software',
    ],
    [
      'groupbuys',
      'community'
    ]
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
