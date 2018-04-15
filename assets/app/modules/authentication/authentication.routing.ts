import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthenticationPage } from "../authentication/pages/authentication/authentication.page";
import { SignUpPage } from '../authentication/pages/signup/signup.page';
import { SignInPage } from '../authentication/pages/signin/signin.page';
import { LogOutPage } from '../authentication/pages/logout/logout.page';

const authenticationChildRoutes: Routes = [
	{ path: '', redirectTo: 'signup', pathMatch: 'full' },
	{ path: 'signup', component: SignUpPage },
	{ path: 'signin', component: SignInPage },
	{ path: 'logout', component: LogOutPage },
]

const authenticationRoutes: Routes = [
	{ path: '', component: AuthenticationPage, children: authenticationChildRoutes}
];

export const AuthenticationRouting: ModuleWithProviders = RouterModule.forChild(authenticationRoutes);
