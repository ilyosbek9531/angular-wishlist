import { Component, OnInit } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import { EventService } from 'src/shared/services/EventService';

import { WishService } from './wish.service';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete
]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  items!: WishItem[]

  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish: WishItem) => {
      const index = this.items.indexOf(wish)
      this.items.splice(index, 1)
    })
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe((data: any) => {
      this.items = data
    }, (error) => {
      alert(error.message)
    })
  }

  listFilter: string = '0'


  get visibleItems(): WishItem[] {
    return this.items.filter(filters[+this.listFilter])
  }

}
