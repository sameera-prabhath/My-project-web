import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeComponent } from './components/home/home.component';
import { MobileappComponent } from './components/mobileapp/mobileapp.component';
import { EditorsListComponent } from './components/editors-list/editors-list.component';
import { EditorEditComponent } from './components/editor-edit/editor-edit.component';


import { ProductComponent } from './components/mobileapp/components/product/product.component';
import { ProductEditComponent } from './components/mobileapp/components/product-edit/product-edit.component';
import { OrderComponent } from './components/mobileapp/components/order/order.component';
import { PrefComponent } from './components/mobileapp/components/pref/pref.component';
import { DashComponent } from './components/mobileapp/components/dash/dash.component';
import { TemplateComponent } from './components/mobileapp/components/template/template.component';
import { HelpComponent } from './components/mobileapp/components/help/help.component';
import { SalesComponent } from './components/mobileapp/components/sales/sales.component';
import { ViewsalesComponent } from './components/mobileapp/components/sales/viewsales/viewsales.component';
import { PendingorderComponent } from './components/mobileapp/components/pendingorder/pendingorder.component';


import { FileUPComponent } from './components/file-up/file-up.component';

import { VieworderComponent } from './components/mobileapp/components/order/vieworder/vieworder.component';

import { ProfileComponent } from './components/profile/profile.component';

import { ResetpwComponent } from './components/resetpw/resetpw.component';


import { AuthGuard } from './auth/auth.guard';

import { AuthGuard2 } from './auth/auth.gurd2';

export const appRoutes: Routes = [

    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'addEditor', component: UserProfileComponent,
        children: [{ path: '', component: SignUpComponent, canActivate: [AuthGuard] }]
    },


    {
        path: 'home', component: UserProfileComponent,
        children: [{ path: '', component: HomeComponent, canActivate: [AuthGuard] }]
    },
    {
        path: 'editorslist/edit/:id', component: UserProfileComponent,
        children: [{ path: '', component: EditorEditComponent, canActivate: [AuthGuard] }]
    },
    {
        path: 'editorslist', component: UserProfileComponent,
        children: [{ path: '', component: EditorsListComponent, canActivate: [AuthGuard2] }]
    },
    {
        path: 'mobileapp', component: UserProfileComponent,
        children: [{ path: '', component: MobileappComponent,children: [{ path: '', redirectTo: '/dashboard', pathMatch: 'full',canActivate: [AuthGuard] }]  }]
    },
    {
        path: 'userprofile', component: UserProfileComponent,
        children: [{ path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [AuthGuard] }]
    },

    {
        path: 'userprofile', component: UserProfileComponent, canActivate: [AuthGuard]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
        path: 'resetpw/:token', component: ResetpwComponent
    },



    //mobile app

    {
        path: 'products', component: UserProfileComponent,
        children: [{ path: '', component: MobileappComponent, children: [{ path: '', component: ProductComponent }] }]
    },
    {
        path: 'addproducts', component: UserProfileComponent,
        children: [{ path: '', component: MobileappComponent, children: [{ path: '', component: FileUPComponent }] }]
    },
    {
        path: 'products/edit/:id', component: UserProfileComponent,
        children: [{ path: '', component: MobileappComponent, children: [{ path: '', component: ProductEditComponent }] }]
    },
    {
        path: 'order', component: UserProfileComponent,
        children: [{ path: '', component: MobileappComponent, children: [{ path: '', component: OrderComponent }] }]
    },

    {
        path: 'vieworder/:id', component: UserProfileComponent,
        children: [{ path: '', component: MobileappComponent, children: [{ path: '', component: VieworderComponent }] }]
    },

    {
        path: 'viewosales/:id', component: UserProfileComponent,
        children: [{ path: '', component: MobileappComponent, children: [{ path: '', component: ViewsalesComponent }] }]
    },

    {
        path: 'pref', component: UserProfileComponent,
        children: [{ path: '', component: MobileappComponent, children: [{ path: '', component: PrefComponent }] }]
    },


    {
        path: 'dashboard', component: UserProfileComponent,
        children: [{ path: '', component: MobileappComponent, children: [{ path: '', component: DashComponent }] }]
    },   
     {
        path: 'sales', component: UserProfileComponent,
        children: [{ path: '', component: MobileappComponent, children: [{ path: '', component: SalesComponent }] }]
    }, 



    {
        path: 'pendingo', component: UserProfileComponent,
        children: [{ path: '', component: MobileappComponent, children: [{ path: '', component: PendingorderComponent }] }]
    }, 


       {
        path: 'template', component: UserProfileComponent,
        children: [{ path: '', component: MobileappComponent, children: [{ path: '', component: TemplateComponent }] }]
    },  
      {
        path: 'help', component: UserProfileComponent,
        children: [{ path: '', component: MobileappComponent, children: [{ path: '', component: HelpComponent }] }]
    },





    {
        path: 'ProfileComponent', component: UserProfileComponent,
        children: [{ path: '', component: ProfileComponent, canActivate: [AuthGuard] }]
    }
];