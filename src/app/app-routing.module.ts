import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PantaistvComponent } from './views/pantaistv/pantaistv.component';

const routes: Routes = [
  {path : '', component: PantaistvComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
