export const mockDataUser: MockData[] = [
    { id: 0, login: 'admin', password: 'admin', role: 'admin' },
    { id: 1, login: 'user', password: '1234', role: 'user' },
    { id: 2, login: 'aboba', password: '1234', role: 'user' },
    { id: 3, login: 'notadmin', password: '1234', role: 'user' },
];
export const mockDataPersonal: MockDataPersonal[] = [
    {
        id: 0,
        emai: 'admin@gmail.com',
        firstName: 'Тимур',
        lastName: 'Алексеевич',
        phoneNumber: '+79127221353',
        webSiteURL: 'https://www.google.ru/?hl=ru',
    },
    {
        id: 1,
        emai: 'user@gmail.com',
        firstName: 'Артём',
        lastName: 'Перевозчиков',
        phoneNumber: '+79127223351',
        webSiteURL: 'https://www.google.ru/?hl=ru',
    },
    {
        id: 2,
        emai: 'egor@gmail.com',
        firstName: 'Егор',
        lastName: 'Петров',
        phoneNumber: '+79124223323',
        webSiteURL: 'https://www.google.ru/?hl=ru',
    },
    {
        id: 3,
        emai: 'maks@gmail.com',
        firstName: 'Максим',
        lastName: 'Васильевичь',
        phoneNumber: '+79127123350',
        webSiteURL: 'https://www.google.ru/?hl=ru',
    },
];
export interface MockData {
    id: number;
    login: string;
    password: string;
    role: string;
}
//Представим, что у нас есть связи в нашей импровизированной бд

export interface MockDataPersonal {
    id: number;
    emai: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    webSiteURL: string;
}
