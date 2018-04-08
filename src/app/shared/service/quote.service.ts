import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Quote } from '../interface/quote.model';
import { HttpClient } from '@angular/common/http';
import { Appconfig } from '../interface/appconfig';

@Injectable()
export class QuoteService {
    constructor(
        private http: HttpClient,
        @Inject('BASE_CONFIG') private config: Appconfig
    ) {

    }

    public getQuote(): Observable<Quote> {
        const uri = `${this.config.appBaseUrl}/quotes/${Math.floor(Math.random() * 10)}`;
        return this.http.get<Quote>(uri);
    }
}
