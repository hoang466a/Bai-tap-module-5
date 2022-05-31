import { Component, OnInit } from '@angular/core';
import {Person} from '../../models/person';
import {PersonService} from '../../service/person.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-update-profile',
  templateUrl: './list-update-profile.component.html',
  styleUrls: ['./list-update-profile.component.css']
})
export class ListUpdateProfileComponent implements OnInit {
personList:Person[];
collection:any[] =this.personList;
  constructor(private personService: PersonService,
              private route:Router) { }

  ngOnInit(): void {
this.personService.getAllPerson().subscribe(data=>{
  this.personList=data;
  console.log(this.personList);
})
  }

}
