import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'coopwith-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    constructor() { }

    ngOnInit() {
        this.loginForm = new FormGroup({
            email: new FormControl('932034728@qq.com', Validators.compose([Validators.required, Validators.email])),
            password: new FormControl('', Validators.required)
        })
    }

    onSubmit(formData: NgForm, ev: Event): void {
        ev.preventDefault();
        console.log(formData);
    }

}
