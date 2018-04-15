import { Container } from '@tinystate/core';
import { User } from '../models/user.model';

export class UserContainer extends Container<User> {

	getInitialState(): User {
		return {
			email: '',
			password: '',
			firstName: '',
			lastName: ''
		}
	}
}
