import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { SportsnewsComponent } from './sportsnews/sportsnews.component';
import { HealthnewsComponent } from './healthnews/healthnews.component';
import { EntertainmentnewsComponent } from './entertainmentnews/entertainmentnews.component';
import { GeneralnewsComponent } from './generalnews/generalnews.component';

const routes: Routes = [
  {path:'',component:TopheadingComponent},    //home
  {path:'tech',component:TechnewsComponent},   //tech news
  {path:'business',component:BusinessnewsComponent},   //business news
  {path:'sports',component:SportsnewsComponent},   //sports news
  {path:'health',component:HealthnewsComponent},   //health news
  {path:'entertainment',component:EntertainmentnewsComponent},   //entertainment news
  {path:'general',component:GeneralnewsComponent},   //general news
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
