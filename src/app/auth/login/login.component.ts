import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { QuoteService } from '../../shared/service/quote.service';
import { Quote } from '../../shared/interface/quote.model';

@Component({
    selector: 'coopwith-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    quoteData: Quote;
    loginForm: FormGroup;
    constructor(
        private quoteService$: QuoteService
    ) { }

    ngOnInit() {
        this.loginForm = new FormGroup({
            email: new FormControl('932034728@qq.com', Validators.compose([Validators.required, Validators.email])),
            password: new FormControl('', Validators.required)
        });

        this.getQuoteData();
    }

    onSubmit(formData: NgForm, ev: Event): void {
        ev.preventDefault();
        console.log(formData);
    }

    private getQuoteData(): void {
        this.quoteService$
            .getQuote()
            .subscribe(res => {
                this.quoteData = res;
            });
    }

}
