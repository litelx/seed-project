import { Routes, Router, RouterModule } from '@angular/router'

import { MessagesComponent } from './messages/messages.component';
import { AuthanticationComponent } from './auth/authantication.component';
import { AUTH_ROUTES } from './auth/auth.routing';

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/messages', pathMatch: 'full'},
    {path: 'messages', component: MessagesComponent},
    {path: 'auth', component: AuthanticationComponent, children: AUTH_ROUTES}
]

export const routing = RouterModule.forRoot(APP_ROUTES)