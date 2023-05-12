import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import {RouterModule} from "@angular/router";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { BlogComponent } from './blog/blog.component';


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    AboutComponent,
    HomeComponent,
    MenuComponent,
    NavBarComponent,
    PageNotFoundComponent,
    FooterComponent,
    ScheduleComponent,
    EquipmentComponent,
    BlogComponent
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
          { path: '', component: HomeComponent},
          { path: 'menu', component: MenuComponent},
          { path: 'quote', component: QuoteComponent},
          { path: 'about', component: AboutComponent},
          { path: 'equipment', component: EquipmentComponent},
          { path: 'schedule', component: ScheduleComponent},
          { path: 'blog', component: BlogComponent},
          { path: '**', component: PageNotFoundComponent}
        ]),
        NgbModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
