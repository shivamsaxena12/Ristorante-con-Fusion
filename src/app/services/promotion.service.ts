import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { RestangularModule, Restangular } from 'ngx-restangular';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import 'rxjs/add/operator/delay';

@Injectable()
export class PromotionService 
{

  constructor(private restangular: Restangular) { }

  getPromotions(): Observable<Promotion[]>
  {
    return this.restangular.all('promotions').getList();
  }

  getPromotion(id: number): Observable<Promotion>
  {
     return  this.restangular.one('promotions',id).get();
  }

  getFeaturedPromotion(): Observable<Promotion>
  {
    return this.restangular.all('promotions').getList({featured: true})
      .map(promotions => promotions[0]);
  }
}