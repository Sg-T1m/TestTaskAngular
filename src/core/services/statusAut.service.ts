import { Injectable } from '@angular/core';
import { StatusUser } from 'app/inteface/interfaceCoreService/statusUser';

@Injectable({ providedIn: 'root' })
export class StatusAutService {
    private userStatus: StatusUser = {
        authStatus: false,
        role: '',
    };
    public setStatusUser(authStatus: boolean, role: string): void {
        this.userStatus.authStatus = authStatus;
        this.userStatus.role = role;
    }
    public GetStatusUser(): StatusUser {
        this.userStatus.authStatus = !!localStorage.getItem('authStatus');
        return this.userStatus;
    }
}
