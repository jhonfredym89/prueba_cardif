import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';

const routes: Routes = [
    {
      path: '',
      component: LayoutComponent,
      children: [
        { 
          path: '', 
          loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) 
        }, 
        { 
          path: 'people', 
          loadChildren: () => import('./features/people/people.module').then(m => m.PeopleModule) 
        }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  