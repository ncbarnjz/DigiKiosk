import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface LoginDetails {
  mobile: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = "https://mocki.io/v1/a3c864b4-9fcd-4763-b0ff-d082b84f3410";
  constructor(private http: HttpClient) { }

  login(user: LoginDetails) {
    return this.http.get<any>(`${this.url}`);
  }
}
