import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompeatComponent } from './compeat.component';


const routes: Routes = [
  {
    path: 'compeat',
    component: CompeatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompeatRoutingModule {}
