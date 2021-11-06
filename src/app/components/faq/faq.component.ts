import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  cardNames = [
    "price",
    "purchase",
    "monitors",
    "resell",
    "contacts",
    "refound"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
