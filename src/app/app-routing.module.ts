import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { ErrorComponent } from './error/error.component';
import { PrincipalpageComponent } from './principalpage/principalpage.component';


const routes: Routes = [
  {path: '', component: PrincipalpageComponent},
  {path: 'edit', component: EditComponent},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
