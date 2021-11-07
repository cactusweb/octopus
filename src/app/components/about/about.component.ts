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
      'technic',
      'nft',
    ],
    [
      'crypto-games',
      'sneakers',
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
