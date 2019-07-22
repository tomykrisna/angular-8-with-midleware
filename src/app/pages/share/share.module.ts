import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormValidationStyleDirective} from '@app/pages/share/form-validation-style.directive';
import {ControlMessageComponent} from '@app/pages/share/control-message.component';

@NgModule({
  declarations: [
      FormValidationStyleDirective,
      ControlMessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
      FormValidationStyleDirective,
      ControlMessageComponent
  ]
})
export class ShareModule { }
