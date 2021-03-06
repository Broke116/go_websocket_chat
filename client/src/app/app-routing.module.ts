import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/chat', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'chat',
    component: ChatComponent,
    canActivate: [
      AuthGuard
    ]
  }
  // { path: '**' , component: PageNotFoundComponent } TODO implement a logic which returns 404 page for unknown pages
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
