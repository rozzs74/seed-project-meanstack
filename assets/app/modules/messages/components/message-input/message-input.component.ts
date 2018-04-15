import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { MessageService } from '../../services/message.service';
import { Message } from '../../models/message.model';
import { MessagesContainer } from '../../containers/messages.container';

@Component({
	selector: 'app-message-input',
	templateUrl: 'message-input.component.html',
	styleUrls: ['message-input.component.css']
})

export class MessageInputComponent implements OnInit {

	constructor(
		private _messageService: MessageService,
		private _messagesContainer: MessagesContainer
		)
		 { }

	ngOnInit() {

	}

	isFormValid(is_valid: boolean): boolean {
		return (is_valid ? true : false);
	}

	onSave(form: NgForm): void {
		const is_form_valid: boolean = this.isFormValid(form.valid);
		(is_form_valid ? this.processPOSTMethod(form) : form.controls.content.markAsTouched());
	}

	processPOSTMethod(form: NgForm): void {
		this._messageService.addMessage(form.value)
			.subscribe(
				response => this.setContentState(response),
				error => this.setContentState(''),
				() => console.log("DONE")
			);
			form.resetForm();
	}

	errorPOSTMethod(err): void {
		console.log("ERROR POST!", err);
	}

	setContentState(content: any): void {
		this._messagesContainer.setContentState(content);
	}
}