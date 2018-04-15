import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MessagesPage } from "../messages/pages/messages/messages.page";

const messagesRoutes: Routes = [
	{ path: "", component: MessagesPage }
];

export const MessagesRouting: ModuleWithProviders = RouterModule.forChild(messagesRoutes);
