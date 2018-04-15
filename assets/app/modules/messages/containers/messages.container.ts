import { Container } from '@tinystate/core';
import { Message } from '../models/message.model';

/**
 * A Container is a very simple class that holds your state and some logic for updating it.
 * The shape of the state is described via an interface (in this example: CounterState).
 */

export interface Messages {
	message_lists: Message[],
	isLoading: boolean
}


export class MessagesContainer extends Container<Messages> {

	getInitialState(): Messages {
		return {
			message_lists: [],
			isLoading: true
		}
	}

	setContentState(message_data: any): void {
		this.setState(state => ({ message_lists: message_data }));
	}

}