import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PersonService} from '../../service/person.service';
import {formatDate} from '@angular/common';

import {Router} from '@angular/router';
import {finalize} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  selectedImage: any = '';
  dowloadUrl: Observable<any>;
  numberOfFile = 0;
  private urlTest: '';
  public checkSubmit: number;

  constructor(private personService: PersonService,
              private storage: AngularFireStorage,
              private router: Router) {
  }

  createForm = new FormGroup({
    imgUrl: new FormControl()
  });


  ngOnInit(): void {
  }

  createPerson() {
    let url=this.uploadFirebase(this.selectedImage);
    this.createForm.get('imgUrl').setValue(url);
    this.personService.savePerson(this.createForm.value).subscribe((res: any) => {
    });
  }


  uploadFirebase(selectedImage: any): string {
    let urlImg:string;
    const nameImg = UpdateProfileComponent.getCurrentDateTime() + this.selectedImage.name;
    const fileRef = this.storage.ref(nameImg);
    const task = this.storage.upload(nameImg, this.selectedImage);
    task.snapshotChanges().pipe(
      finalize(() => {
        this.dowloadUrl = fileRef.getDownloadURL();
        this.dowloadUrl.subscribe(url => {
          urlImg=url;
        });
      })
    ).subscribe();
    return urlImg;
  }




  showPreview(event: any) {
    if (event.target.files.length > 0) {
      this.selectedImage = event.target.files[0];
      this.numberOfFile = event.target.files.length;
    }

    console.log(this.selectedImage);
  }

// @ts-ignore
  private static getCurrentDateTime(): string {
    return formatDate(new Date(), 'dd-MM-yyyy', 'en-US');
  }


// @ts-ignore
  clickSubmit() {
    this.checkSubmit = 1;
  }

}
