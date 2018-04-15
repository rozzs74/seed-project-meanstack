import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailRegexPattern } from '../../../../shared/utils/email-regex-pattern';

@Component({
	selector: 'app-signin',
	templateUrl: 'signin.page.html',
	styleUrls: ['signin.page.css']
})

export class SignInPage implements OnInit {
	myForm: FormGroup
	constructor() { }

	ngOnInit() {
		this.myForm = new FormGroup({
			email: new FormControl(null, [
				Validators.required,
				Validators.pattern(EmailRegexPattern())
			]),
			password: new FormControl(null, Validators.required)
		});
	}

	onSubmit(myForm) {
		console.log(myForm.value);
		this.myForm.reset();
	}
}
