import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "src/app/shared/modules/material/material.module";
import { PeopleRoutingModule } from "./people-routing.module";
import { PeopleService } from "./services/people.service";
import { AddComponent } from "./views/add/add.component";
import { ListComponent } from "./views/list/list.component";

@NgModule({
    declarations: [
      ListComponent,
      AddComponent
    ],
    imports: [
      CommonModule,
      PeopleRoutingModule,
      MaterialModule,
      RouterModule
    ],
    providers: [
      PeopleService
    ]
  })
  export class PeopleModule { }