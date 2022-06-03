import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { PeopleService } from "../../services/people.service";

@Component({
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss']
})
export class AddComponent {
    public personForm: FormGroup 

    constructor(private readonly formBuilder: FormBuilder,
                private readonly peopleService: PeopleService,
                private readonly snackBar: MatSnackBar,
                private readonly router: Router) {

        this.personForm = this.formBuilder.group({
            name: ['', Validators.required],
            lastName: ['', Validators.required],
            identification: ['', Validators.required],
            gender: ['', Validators.required],
            age: ['', Validators.required]
        });
    }

    public addPerson(): void {
        const successful = this.peopleService.addPerson(this.personForm.value)

        if (successful) {
            this.snackBar.open('Persona agendada exitosamente', '', {
                duration: 2000,
                horizontalPosition: 'center',
                verticalPosition: 'bottom'
            });
            this.router.navigate(['people']);
        } else {
            this.snackBar.open('La persona ya ha sido agendada previamente', '', {
                duration: 2000,
                horizontalPosition: 'center',
                verticalPosition: 'bottom'
            });
        }
    }
}