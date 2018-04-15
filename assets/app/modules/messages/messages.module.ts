import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessagesRouting } from '../messages/messages.routing';
import { HttpModule } from '@angular/http';

/* PAGES*/
import { MessagesPage } from '../messages/pages/messages/messages.page';
/* COMPONENTS */
import { MessageInputComponent } from '../messages/components/message-input/message-input.component';
import { MessageListComponent } from '../messages/components/message-list/message-list.component';
import { MessageComponent } from '../messages/components/message/message.component';
/* SERVICES */
import { MessageService } from '../messages/services/message.service';
/* CONTAINERS */
import { MessagesContainer } from '../messages/containers/messages.container'; 

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		HttpModule,
		MessagesRouting
	],
	exports: [],
	declarations: [
		MessagesPage,
		MessageInputComponent,
		MessageListComponent,
		MessageComponent
	],
	providers: [
		MessageService,
		MessagesContainer
	],
})

export class MessagesModule { }
