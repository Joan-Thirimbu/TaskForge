import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { TaskComponent } from './component/task/task.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AboutPageComponent } from './component/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    data: { title: 'Home' },
  },
  { path: 'task', component: TaskComponent },
  { path: 'about', component: AboutPageComponent},
  { path: 'error', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
