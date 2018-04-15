import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailRegexPattern } from '../../../../shared/utils/email-regex-pattern';
@Component({
	selector: 'app-signup',
	templateUrl: 'signup.page.html',
	styleUrls: ['signup.page.css']
})

export class SignUpPage implements OnInit {
	myForm: FormGroup;

	constructor() { }

	ngOnInit() {
		this.myForm = new FormGroup({
			firstName: new FormControl(null, Validators.required),
			lastName: new FormControl(null, Validators.required),
			email: new FormControl(null, [
				Validators.required,
				Validators.pattern(EmailRegexPattern())
			]),
			password: new FormControl(null, Validators.required)
		});
	}

	onSubmit(myForm) {
		console.log(myForm.value);
		// console.log(this.myForm);
		this.myForm.reset(); // Reset the form after transaction
	}
	
}