import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PrivacyPolicyEnComponent } from './privacy-policy/privacy-policy-en.component';
import { PrivacyPolicyJaComponent } from './privacy-policy/privacy-policy-ja.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent },
  { path: 'en/privacy-policy', component: PrivacyPolicyEnComponent },
  { path: 'ja/privacy-policy', component: PrivacyPolicyJaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
