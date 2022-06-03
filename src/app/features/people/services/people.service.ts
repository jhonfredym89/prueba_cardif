import { Injectable } from "@angular/core";
import { Person } from "../models/person.model";

@Injectable()
export class PeopleService {

    private listPeople: Person[] = [
        {
            name: 'Andres',
            lastName: 'Guzman',
            identification: 10155584,
            gender: 'M',
            age: 26
        }
    ]

    public getHeaders(): string[] {
        return ['name', 'lastName', 'identification', 'gender', 'age']
    }

    public getPeople(): Person[] {
        return this.listPeople
    }

    public addPerson(person: Person): boolean {
        var exist = false
        this.listPeople.forEach(item => {
            if (item.identification === person.identification) {
                exist = true
            }
        });

        if (exist) {
            return false
        } else {
            this.listPeople.push(person)
            return true
        }
    }
}