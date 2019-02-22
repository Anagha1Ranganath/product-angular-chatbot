import { Component, OnInit} from '@angular/core';
import { Subject } from 'rxjs';
import { Search } from './Search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  products: Search[] = [];
  productName: String;
  constructor() { }
  ngOnInit() {
    this.products = [
      {
        'productId': '1',
        'productName': 'Nike'
      },
      {
        'productId': '2',
        'productName': 'Nike'
      },
      {
        'productId': '3',
        'productName': 'Brakley'
      }
    ];
   }
   search() {
     this.products = this.products.filter(res => {
       return res.productName.toLocaleLowerCase().match(this.productName.toLocaleLowerCase());
     });
   }

  // startAt = new Subject()b
  // endAt = new Subject();
  // lastKeyPress = 0;

  // constructor(private searchService: SearchService) { }
  // ngOnInit() {
  //   this.searchService.getProducts(this.startAt, this.endAt).subscribe(products => this.products = products);
  // }

  // search($event) {
  //   if ($event.timestamp - this.lastKeyPress > 200) {
  //   const q = $event.target.value;
  //   this.startAt.next(q);
  //   this.endAt.next(q + '\uf8ff');
  //   }
  //   this.lastKeyPress = $event.timestamp;
  // }
}
