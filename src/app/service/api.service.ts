import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(
        private http: HttpClient,
    ) {
    }

    getUser() {
        return this.http.get('register');
    }


    insertUser(params: any) {
        const body = {
            number: params.number,
            firstName: params.firstName,
            lastName: params.lastName,
            birthDate: params.birthDate,
            gender: params.gender,
            email: params.email
        };
        return this.http.post('/register', body, {params});
    }


    // deleteUser(data: any) {
    //     const params = new HttpParams()
    //         .set('data', data.aa);
    //     return this.http.delete('register', {params});
    // }


}
