import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PrivacyPolicyModule } from './privacy-policy/privacy-policy.module';
import { ProjectsModule } from './projects/projects.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectsModule,
    PrivacyPolicyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
