import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ShopComponent } from './components/pages/shop/shop.component';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

export const routes: Routes = [
    {path: 'home', title: 'Home page', component: HomeComponent},
    {path: '', title: 'Home page', component: HomeComponent},
    {path: 'about', title: 'About page', component: AboutComponent},
    {path: 'contact', title: 'Contact page', component: ContactComponent},
    {path: 'shop', title: 'Shop page', component: ShopComponent},
    {path: 'sign-in', title: 'Sign-in page', component: SignInComponent},
    {path: 'sign-up', title: 'Sign-up page', component: SignUpComponent},
    {path: '**', component:NotFoundComponent},

];
