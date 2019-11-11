import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyPolicyComponent } from './privacy-policy.component';
import { PrivacyPolicyEnComponent } from './privacy-policy-en.component';
import { PrivacyPolicyJaComponent } from './privacy-policy-ja.component';



@NgModule({
  declarations: [
    PrivacyPolicyComponent,
    PrivacyPolicyEnComponent,
    PrivacyPolicyJaComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PrivacyPolicyModule { }
