import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetAllComponent } from './components/get-all/get-all.component';
import { GetByIdComponent } from './components/get-by-id/get-by-id.component';
import { CreateComponent } from './components/create/create.component';
import { DeleteComponent } from './components/delete/delete.component';
import { UpdateComponent } from './components/update/update.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GetAllComponent,
    GetByIdComponent,
    CreateComponent,
    DeleteComponent,
    UpdateComponent
  ],

  
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    MatSlideToggleModule,
    NgbModule,
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }







