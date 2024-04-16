import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllComponent } from './components/get-all/get-all.component';
import { GetByIdComponent } from './components/get-by-id/get-by-id.component';
import { CreateComponent } from './components/create/create.component';
import { DeleteComponent } from './components/delete/delete.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  { path: 'home', redirectTo: 'getall', pathMatch: 'full' },
  { path: '', redirectTo: 'getall', pathMatch: 'full' },
  {path: 'getall', component: GetAllComponent},
  {path: 'getbyid', component: GetByIdComponent},
  {path: 'create', component: CreateComponent},
  {path: 'delete', component: DeleteComponent},
  {path: 'update', component: UpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
