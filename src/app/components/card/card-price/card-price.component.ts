import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.css']
})
export class CardPriceComponent implements OnInit {

  @Input() gameType:string = '';
  @Input() console:string = '';
  @Input() price:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
