import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsFormPage } from './details-form';
import { ApiServiceProvider } from '../../providers/api-service/api-service';

@NgModule({
  declarations: [
    DetailsFormPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsFormPage),
  ],
  providers: [
    ApiServiceProvider
  ]
})
export class DetailsFormPageModule {}
