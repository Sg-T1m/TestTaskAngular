export interface ResponceServer {
    status: number,
    messenge: string,
    data: {
        id: number,
        login: string,
        role: string
    }
}
