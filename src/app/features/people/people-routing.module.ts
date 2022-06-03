import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddComponent } from "./views/add/add.component";
import { ListComponent } from "./views/list/list.component";

const routes: Routes = [
    { 
      path: '', 
      component: ListComponent 
    },
    { 
      path: 'add', 
      component: AddComponent 
    }
    ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ]
  })
  export class PeopleRoutingModule { }
  