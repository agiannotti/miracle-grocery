import { AdminModule } from './admin/admin.module';
import { AdminAuthGuard } from './shared/services/admin-auth-guard.service';
import { AuthGuard } from './shared/services/auth-guard.service';
import { AuthService } from './shared/services/auth.service';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';
import { UserService } from './shared/services/user.service';
import { CategoryService } from './shared/services/category.service';

@NgModule({
  declarations: [AppComponent, BsNavbarComponent, LoginComponent],
  imports: [
    AppRoutingModule,
    AdminModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
  ],

  providers: [
    UserService,
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    CategoryService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
