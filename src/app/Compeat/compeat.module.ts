import {  NgModule } from '@angular/core';
import { CompeatComponent } from './compeat.component';

import { SharedModule } from '../shared';
import { CompeatRoutingModule } from './compeat-routing.module';
import {MatDialogModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
@NgModule({
  imports: [
    SharedModule,
    CompeatRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
    CompeatComponent
  ],
  declarations: [
    CompeatComponent
  ],
  providers: [CompeatModule]

})
export class CompeatModule {}
