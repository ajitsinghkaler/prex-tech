import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseRouteComponent } from './components/base-route/base-route.component';
import { ContainerRouteComponent } from './components/container-route/container-route.component';
import { FirstRouteComponent } from './components/first-route/first-route.component';
import { SecondRouteComponent } from './components/second-route/second-route.component';
import { ThirdRouteComponent } from './components/third-route/third-route.component';

const routes: Routes = [
  {
    path: '',
    component: BaseRouteComponent
  },
  {
    path: 'app',
    component: ContainerRouteComponent,
    children: [
      {
        path: 'first-route',
        component: FirstRouteComponent,
      },
      {
        path: 'second-route',
        component: SecondRouteComponent,
      },
      {
        path: 'third-route',
        component: ThirdRouteComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
