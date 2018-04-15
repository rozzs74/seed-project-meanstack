import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthenticationRouting } from '../authentication/authentication.routing';

/* PAGES */
import { AuthenticationPage } from '../authentication/pages/authentication/authentication.page';
import { SignUpPage } from '../authentication/pages/signup/signup.page';
import { SignInPage } from '../authentication/pages/signin/signin.page';
import { LogOutPage } from '../authentication/pages/logout/logout.page';


/* COMPONENTS */
import { AuthenticationNavbarComponent } from '../authentication/components/authentication-navbar/authentication-navbar.component';
/* SERVICES */

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		AuthenticationRouting
	],
	exports: [],
	declarations: [
		AuthenticationPage,
		SignUpPage,
		SignInPage,
		LogOutPage,
		AuthenticationNavbarComponent
	],
	providers: [],
})
export class AuthenticationModule { }
