import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderCabecitaComponent } from './header-cabecita/header-cabecita.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { SocialNetworksComponent } from './social-networks/social-networks.component';
import { LoginComponent } from './login/login';
import { PrincipalpageComponent } from './principalpage/principalpage.component';
import { AlterComponent } from './alter/alter.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AboutComponent } from './about/about.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderCabecitaComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    SocialNetworksComponent,
    LoginComponent,
    PrincipalpageComponent,
    AlterComponent,
    ErrorComponent,
    FooterComponent,
    BannerComponent,
    AboutComponent,
    EditComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
