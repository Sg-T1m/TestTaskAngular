import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { ResponceServer } from 'app/inteface/interfaceCoreService/responceServer';
import { AuthService } from 'core/services';
import { StatusAutService } from 'core/services/statusAut.service';
@Component({
    selector: 'app-authModule',
    templateUrl: './authModule.component.html',
    styleUrls: ['./authModule.component.css'],
})
export class AuthModuleComponent implements OnInit {
    formConrolLogin!: FormGroup;
    errorMessenge: boolean = false;
    constructor(
        private _AuthService: AuthService,
        private _StatusAutService: StatusAutService,
        private _Router: Router
    ) {
        this._createForm();
    }
    btnDisable: boolean = true;
    ngOnInit() {}
    private _createForm(): void {
        this.formConrolLogin = new FormGroup({
            login: new FormControl(null),
            password: new FormControl(null),
        });
    }
    public chechDataAuth(): void {
        var Responce: ResponceServer = this._AuthService.login(
            this.formConrolLogin.value.login,
            this.formConrolLogin.value.password
        );
        if (Responce.status > 200) {
            this.errorMessenge = true;
        } else {
            // ну так конечно данны ене хранят, ну да ладно)
            localStorage.setItem('authStatus', 'true');
            localStorage.setItem('role', Responce.data.role);
            localStorage.setItem('id', Responce.data.id.toString());
            console.log(
                localStorage.getItem('authStatus'),
                localStorage.getItem('role')
            );
            this._StatusAutService.setStatusUser(true, Responce.data.role);
            this.errorMessenge = false;
            this._Router.navigate(['app']);
        }
    }
}
