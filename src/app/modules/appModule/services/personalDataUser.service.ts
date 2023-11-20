import { Injectable } from '@angular/core';
import { AppModule } from 'app/app.module';
import { PersonalDataUserInterface } from 'app/inteface/personalDataUserInterface';
import { PostReqstStatus } from 'app/inteface/postReqstStatus';
import { ProfileResponsePostReqst } from 'app/inteface/profileResponse';
import { Subject } from 'rxjs';

@Injectable({ providedIn: AppModule })
export class PersonalDataUserService {
    constructor() {}

    dataUser: PersonalDataUserInterface = {
        emai: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        webSiteURL: '',
    };
    postReqstStatus: PostReqstStatus = {
        errorChange: false,
        trueChange: false,
    };
    public $presonalData = new Subject<PersonalDataUserInterface>();
    public $postReqstStatus = new Subject();

    public postDataProfile(
        DataUser: PersonalDataUserInterface
    ): ProfileResponsePostReqst {
        if (DataUser.firstName.length < 3) {
            var Response: ProfileResponsePostReqst = {
                status: 400,
                messenge: 'ошибка в данных',
            };
            this.postReqstStatus = {
                errorChange: true,
                trueChange: false,
            };
            this.$postReqstStatus.next(this.postReqstStatus);

            return Response;
        } else {
            var Response: ProfileResponsePostReqst = {
                status: 200,
                messenge: 'успешно',
            };
           
            this.dataUser = {
                emai: DataUser.emai,
                firstName: DataUser.firstName,
                lastName: DataUser.lastName,
                phoneNumber: DataUser.phoneNumber,
                webSiteURL: DataUser.webSiteURL,
            };
            this.postReqstStatus = {
                errorChange: false,
                trueChange: true,
            };
            this.$postReqstStatus.next(this.postReqstStatus);
            this.$presonalData.next(this.dataUser);
            return Response;
        }
    }
    public GetDataProfile(): PersonalDataUserInterface {
        return this.dataUser;
    }
    public GetStatusReqst() {
        return this.postReqstStatus;
    }
    public serStausReqst(status: PostReqstStatus) {
        this.$postReqstStatus.next(status);
    }
}
