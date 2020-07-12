import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObraComponent } from '../../components/obras/obra/obra.component';
import { HomeComponent } from '../../components/layouts/home/home.component';
import { NewObraComponent } from '../../components/obras/new/new-obra.component';
import { SignInComponent } from '../../components/public/sign-in/sign-in.component';
import { SignUpComponent } from '../../components/public/sign-up/sign-up.component';
import { EditObraComponent } from '../../components/obras/edit/edit-obra.component';
import { ListObraComponent } from '../../components/obras/list/list-obra.component';
import { VerifyEmailComponent } from '../../components/public/verify-email/verify-email.component';
import { ForgotPasswordComponent } from '../../components/public/forgot-password/forgot-password.component';

import { AuthGuard } from "../../shared/guard/auth.guard";

const routes: Routes = [

  //guarded routes
  { 
    path: 'home', 
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'list-obra', pathMatch: 'full' },
      { path: 'obra', redirectTo: 'list-obra', pathMatch: 'full'},
      { path: 'obra/:id', component: ObraComponent },
      { path: 'new-obra', component: NewObraComponent },
      { path: 'list-obra', component: ListObraComponent },
      { path: 'edit-obra', component: EditObraComponent }
    ]
  },

  //public routes
  { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent},
  { path: 'register-user', component: SignUpComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },

  // otherwise redirect to home
  // { path: '**', redirectTo: '/404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
