import { PersonalDataUserService } from './../../../../services/personalDataUser.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonalDataUserInterface } from 'app/inteface/personalDataUserInterface';

@Component({
    selector: 'app-formProfile',
    templateUrl: './formProfile.component.html',
    styleUrls: ['./formProfile.component.css'],
})
export class FormProfileComponent implements OnInit {
    formControlProfile!: FormGroup;
    presonalData: PersonalDataUserInterface = {
        emai: '',
        firstName: '',
        lastName: '',
        phoneNumber: '+7',
        webSiteURL: '',
    };
    constructor(
      private _PersonalDataUserService: PersonalDataUserService
    ) {
        this._createForm();

    }

    ngOnInit() {}
    private _createForm(): void {
        this.formControlProfile = new FormGroup({
            emai: new FormControl(this.presonalData.emai, [Validators.email]),
            firstName: new FormControl(this.presonalData.firstName, [
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(255),
            ]),
            lastName: new FormControl(this.presonalData.lastName, [
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(255),
            ]),
            phoneNumber: new FormControl(this.presonalData.phoneNumber, [
                Validators.required,
                Validators.minLength(12),
                Validators.maxLength(12),
            ]),
            webSiteURL: new FormControl(this.presonalData.webSiteURL, [
                Validators.required,
                Validators.minLength(10),
                Validators.pattern(
                    /^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/
                ),
            ]),
        });
    }

    public saveDataProfile() {
        if (
         
            this.formControlProfile.controls['lastName'].valid &&
            this.formControlProfile.controls['phoneNumber'].valid &&
            this.formControlProfile.controls['phoneNumber'].valid &&
            this.formControlProfile.controls['webSiteURL'].valid
        ) {
            this.presonalData = {
                emai: '',
                firstName: this.formControlProfile.value.firstName,
                lastName: this.formControlProfile.value.lastName,
                phoneNumber: this.formControlProfile.value.phoneNumber,
                webSiteURL: this.formControlProfile.value.webSiteURL,
            };
          
            this._PersonalDataUserService.postDataProfile(this.presonalData)
        }
    }
}
