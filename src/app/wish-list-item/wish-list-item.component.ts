import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import { EventService } from 'src/shared/services/EventService'

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']
})
export class WishListItemComponent {
  @Input() wish!: WishItem


  constructor(private events: EventService) {

  }
  removeWish() {
    this.events.emit('removeWish', this.wish)
  }

  togleFullFilled() {
    this.wish.isComplete = !this.wish.isComplete
  }
}
