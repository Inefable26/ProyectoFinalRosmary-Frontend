import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeletepageComponent } from './deletepage/deletepage.component';
import { EditComponent } from './edit/edit.component';
import { ErrorComponent } from './error/error.component';
import { AvilandGuardGuard } from './guards/aviland-guard.guard';
import { PrincipalpageComponent } from './principalpage/principalpage.component';


const routes: Routes = [
  {path: '', component: PrincipalpageComponent},
  {path: 'edit', component: EditComponent,canActivate:[AvilandGuardGuard]},
  {path: 'deletepage', component: DeletepageComponent,canActivate:[AvilandGuardGuard]},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
