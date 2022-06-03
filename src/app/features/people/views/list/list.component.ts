import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Person } from "../../models/person.model";
import { PeopleService } from "../../services/people.service";

@Component({
    templateUrl: './list.component.html',
    styleUrls: ['/list.component.scss']
})
export class ListComponent implements OnInit {
    public people: Person[] | undefined;
    public headers: string[] | undefined;

    constructor(private readonly peopleService: PeopleService,
        private readonly router: Router) {
    }

    public ngOnInit(): void {
        this.people = this.peopleService.getPeople();
        this.headers = this.peopleService.getHeaders();
    }

    public addNewPerson(): void {
        this.router.navigate(['people/add']);
    }
}