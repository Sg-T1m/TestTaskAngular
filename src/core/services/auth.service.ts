import { Injectable } from '@angular/core';
import { ResponceServer } from 'app/inteface/interfaceCoreService/responceServer';
import { MockData, mockDataUser } from 'mockData/mockDataUser';
@Injectable({ providedIn: 'root' })
export class AuthService {
    responce: ResponceServer | undefined;

    public login(login: string, password: string): ResponceServer {
        for (let i = 0; i < mockDataUser.length; i++) {
            if (mockDataUser[i].login == login) {
                if (mockDataUser[i].password == password) {
                    var res: ResponceServer;
                    res = {
                        status: 200,
                        messenge: 'Вы авторизованны',
                        data: {
                            id: mockDataUser[i].id,
                            login: mockDataUser[i].login,
                            role: mockDataUser[i].role,
                        },
                    };
                    return res;
                }
            }
        }

        res = {
            status: 401,
            messenge: 'Неверные данные',
            data: {
                id: -1,
                login: '',
                role: '',
            },
        };
        return res;
    }

    public logout() {}
}
