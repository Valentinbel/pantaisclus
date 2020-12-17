import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PantaistvComponent } from './views/pantaistv/pantaistv.component';
import { NonantaComponent} from './views/nonanta/nonanta.component';

const routes: Routes = [
  {path : '', component: NonantaComponent},
  {path : 'tv', component: PantaistvComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
