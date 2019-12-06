// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSnackBarModule,MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ColorPickerModule } from 'ngx-color-picker';

import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

// components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
//routes
import { appRoutes } from './routes';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';
//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
//components-2

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MobileappComponent } from './components/mobileapp/mobileapp.component';
import { EditorsListComponent } from './components/editors-list/editors-list.component';
import { EditorEditComponent } from './components/editor-edit/editor-edit.component';
import { HomeAnimComponent } from './components/home-anim/home-anim.component';
import { ProductComponent } from './components/mobileapp/components/product/product.component';
import { FileUPComponent } from './components/file-up/file-up.component';

import { ChartsModule } from 'ng2-charts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';
import { ProductEditComponent } from './components/mobileapp/components/product-edit/product-edit.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OrderComponent } from './components/mobileapp/components/order/order.component';
import { PrefComponent } from './components/mobileapp/components/pref/pref.component';
import { DashComponent } from './components/mobileapp/components/dash/dash.component';
import { TemplateComponent } from './components/mobileapp/components/template/template.component';
import { HelpComponent } from './components/mobileapp/components/help/help.component';
import { SalesComponent } from './components/mobileapp/components/sales/sales.component';
import { VieworderComponent } from './components/mobileapp/components/order/vieworder/vieworder.component';
import { ResetpwComponent } from './components/resetpw/resetpw.component';
import { ViewsalesComponent } from './components/mobileapp/components/sales/viewsales/viewsales.component';
import { PendingorderComponent } from './components/mobileapp/components/pendingorder/pendingorder.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MobileappComponent,
    EditorsListComponent,
    EditorEditComponent,
    HomeAnimComponent,
    ProductComponent,

    FileSelectDirective,

    FileUPComponent,
    ConfirmationDialogComponent,
    ProductEditComponent,
    ProfileComponent,
    OrderComponent,
    PrefComponent,
    DashComponent,
    TemplateComponent,
    HelpComponent,
    SalesComponent,
    VieworderComponent,
    ResetpwComponent,
    ViewsalesComponent,
    PendingorderComponent
  ],
  entryComponents: [FileUPComponent , ConfirmationDialogComponent ],
  imports: [
    BrowserModule,
    ColorPickerModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule,
    Ng2SearchPipeModule,
    NgbModule.forRoot(),
    ChartsModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService
,ConfirmationDialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
