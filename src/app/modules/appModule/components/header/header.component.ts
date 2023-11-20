import { Component, OnInit } from '@angular/core';
import { PersonalDataUserService } from '../../services/personalDataUser.service';
import { PersonalDataUserInterface } from 'app/inteface/personalDataUserInterface';
import { Subscription } from 'rxjs';
import { PostReqstStatus } from 'app/inteface/postReqstStatus';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    constructor(public _PersonalDataUserService: PersonalDataUserService) {}
    dataUser?: PersonalDataUserInterface =
        this._PersonalDataUserService.GetDataProfile();
    authStaust? = this._PersonalDataUserService.GetStatusReqst();
    subsPost?: Subscription;
    subsAuth?: Subscription;

    errorChange = false;
    trueChange = false;

    ngOnInit() {
        this.subsAuth = this._PersonalDataUserService.$presonalData?.subscribe(
            (DataUser: PersonalDataUserInterface) => this.setDataUser(DataUser)
        );
        this.subsAuth =
            this._PersonalDataUserService.$postReqstStatus.subscribe(
                (status: any) => this.setStatusAuth(status)
            );
    }
    private setDataUser(DataUser: PersonalDataUserInterface): void {
        this.dataUser = DataUser;
    }
    private setStatusAuth(status: PostReqstStatus) {
        if (status.trueChange) {
            this.errorChange = status.errorChange;
            this.trueChange = status.trueChange;
            setTimeout(() => {
                this.offErorMessenge();
            }, 30000);
        } else {
            this.errorChange = status.errorChange;
            this.trueChange = status.trueChange;
        }
    }
    ngOnDestroy(): void {
        this.subsAuth?.unsubscribe();
    }
    public offErorMessenge() {
        const statusOff: PostReqstStatus = {
          errorChange: false,
            trueChange: false,
        };
        console.log(`отработал`)
        this._PersonalDataUserService.serStausReqst(statusOff);
    }
}
