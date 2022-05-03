import { Component, OnInit } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { SidebarOpenAnimation, SidebarCloseAnimation } from './animations';
const animationParams = {
  menuWidth: '250px',
  animationStyle: '500ms ease',
};

@Component({
  selector: 'app-container-route',
  templateUrl: './container-route.component.html',
  styleUrls: ['./container-route.component.scss'],
  animations: [
    trigger('sideMenu', [
      transition(':enter', [
        useAnimation(SidebarOpenAnimation, {
          params: {
            ...animationParams,
          },
        }),
      ]),
      transition(':leave', [
        useAnimation(SidebarCloseAnimation, {
          params: {
            ...animationParams,
          },
        }),
      ]),
    ]),
  ],
})
export class ContainerRouteComponent implements OnInit {
  isOpen = false;
  routes = [
    { name: 'First Route', route: 'first-route' },
    { name: 'Second Route', route: 'second-route' },
    { name: 'Third Route', route: 'third-route' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
