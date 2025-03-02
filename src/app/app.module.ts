import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HerosessionComponent } from './component/herosession/herosession.component';
import { AboutComponent } from './component/about/about.component';
import { MyprojectsComponent } from './component/myprojects/myprojects.component';
import { SkillsComponent } from './component/skills/skills.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HerosessionComponent,
    AboutComponent,
    MyprojectsComponent,
    SkillsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
