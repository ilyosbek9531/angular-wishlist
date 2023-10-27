import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { WishItem } from 'src/shared/models/wishItem';

@Injectable({
  providedIn: 'root'
})

export class WishService {

  constructor(private http: HttpClient) { }

  private getStandartOptions(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  getWishes() {
    let options = this.getStandartOptions()

    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    })

    return this.http.get('assets/wishes.json', options)
  }

  private addWish(wish: WishItem) {
    let options = this.getStandartOptions()
    options.headers = options.headers.set('Authorization', 'value-need-for-authorization')
    return this.http.post('assets/wishes.json', wish, options)
  }
}
