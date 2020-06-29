import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';

// Reactive Form
import { ReactiveFormsModule } from "@angular/forms";

// App routing modules
import { AppRoutingModule } from './shared/routing/app-routing.module';

// App components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/layouts/home/home.component';
import { NewObraComponent } from './components/obras/new/new-obra.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { ListObraComponent } from './components/obras/list/list-obra.component';
import { SignInComponent } from './components/public/sign-in/sign-in.component';
import { SignUpComponent } from './components/public/sign-up/sign-up.component';
import { EditObraComponent } from './components/obras/edit/edit-obra.component';
import { NavHeaderComponent } from './components/layouts/nav-header/nav-header.component';
import { VerifyEmailComponent } from './components/public/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './components/public/forgot-password/forgot-password.component';

// Firebase services + enviroment module
import { AngularFireModule } from "@angular/fire";
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

// Services
import { AuthService } from "./shared/services/auth.service";
import { StorageService } from './shared/services/storage.service';
import { FirestoreService } from './shared/services/firestore.service';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ListObraComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    NewObraComponent,
    EditObraComponent,
    HomeComponent,
    NavHeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatDialogModule
  ],
  providers: [AuthService, FirestoreService, StorageService],
  bootstrap: [AppComponent]
})

export class AppModule { }