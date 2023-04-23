import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderCabecitaComponent } from './header-cabecita/header-cabecita.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectComponent } from './project/project.component';
import { SocialNetworksComponent } from './social-networks/social-networks.component';
import { LoginComponent } from './login/login.component';
import { PrincipalpageComponent } from './principalpage/principalpage.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AboutComponent } from './about/about.component';
import { EditComponent } from './edit/edit.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { EditHeaderComponent } from './edit-header/edit-header.component';
import { EditBannerComponent } from './edit-banner/edit-banner.component';
import { EditAboutComponent } from './edit-about/edit-about.component';
import { EditExperienceComponent } from './edit-experience/edit-experience.component';
import { EditEducationComponent } from './edit-education/edit-education.component';
import { EditSkillsComponent } from './edit-skills/edit-skills.component';
import { EditProjectsComponent } from './edit-projects/edit-projects.component';
import { EditSocialComponent } from './edit-social/edit-social.component';
import { AvilandGuardGuard } from './guards/aviland-guard.guard';
import { DeleteAboutComponent } from './delete-about/delete-about.component';
import { DeleteBannerComponent } from './delete-banner/delete-banner.component';
import { DeleteEducationComponent } from './delete-education/delete-education.component';
import { DeleteExperienceComponent } from './delete-experience/delete-experience.component';
import { DeleteHeaderComponent } from './delete-header/delete-header.component';
import { DeleteProjectsComponent } from './delete-projects/delete-projects.component';
import { DeleteSkillsComponent } from './delete-skills/delete-skills.component';
import { DeleteSocialComponent } from './delete-social/delete-social.component';
import { DeleteFooterComponent } from './delete-footer/delete-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderCabecitaComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectComponent,
    SocialNetworksComponent,
    LoginComponent,
    PrincipalpageComponent,
    ErrorComponent,
    FooterComponent,
    BannerComponent,
    AboutComponent,
    EditComponent,
    EditHeaderComponent,
    EditBannerComponent,
    EditAboutComponent,
    EditExperienceComponent,
    EditEducationComponent,
    EditSkillsComponent,
    EditProjectsComponent,
    EditSocialComponent,
    DeleteAboutComponent,
    DeleteBannerComponent,
    DeleteEducationComponent,
    DeleteExperienceComponent,
    DeleteHeaderComponent,
    DeleteProjectsComponent,
    DeleteSkillsComponent,
    DeleteSocialComponent,
    DeleteFooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    interceptorProvider,
    AvilandGuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
