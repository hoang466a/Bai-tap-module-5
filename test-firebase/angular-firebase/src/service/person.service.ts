import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Person} from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  URL_LIST = 'http://localhost:8080/person/';

  constructor(private http: HttpClient) {
  }
getAllPerson(): Observable<Person[]>{
return this.http.get<Person[]>(this.URL_LIST);
}

savePerson(person:Person): Observable<Person>{
return this.http.post<Person>(this.URL_LIST,person);
}
}
