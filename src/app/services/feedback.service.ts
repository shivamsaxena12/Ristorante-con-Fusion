import { Injectable } from '@angular/core';
import { Feedback } from '../shared/feedback';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService{

  constructor(private restangular: Restangular) { }

    submitFeedback(feed: Feedback): Observable<Feedback[]>
    {
        
        console.log(feed);
        return this.restangular.all('feedback').post(feed);

    }

}
