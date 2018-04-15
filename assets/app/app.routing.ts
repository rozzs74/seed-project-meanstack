import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
	{ path: 'messages', loadChildren: './modules/messages/messages.module#MessagesModule' },
	{ path: 'authentication', loadChildren: './modules/authentication/authentication.module#AuthenticationModule' },
	{ path: '', loadChildren: './modules/messages/messages.module#MessagesModule', pathMatch: 'full'},	
	{ path: '**', redirectTo: '/messages', pathMatch: 'full' }
];


export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
