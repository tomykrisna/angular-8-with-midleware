import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { MaterialModule } from '@app/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ShareModule} from '@app/pages/share/share.module';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        CoreModule,
        SharedModule,
        FlexLayoutModule,
        MaterialModule,
        HomeRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        ShareModule,
    ],
  declarations: [
    HomeComponent
  ],
  providers: [
      DatePipe
  ]
})
export class HomeModule { }
