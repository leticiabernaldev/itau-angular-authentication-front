import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {

  password: string = '';
  validationMessage: string = '';
  successMessage: string = '';

  constructor(private http: HttpClient) { }

  submitPassword() {
    const url = 'http://localhost:8080/api/v1/password';
    const body = { password: this.password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.validationMessage = '';
    this.successMessage = '';

    this.http.post(url, body, { headers: headers }).subscribe(
      (response: any) => {
        if (response.succeeded) {
          this.successMessage = "Senha criada com sucesso";
        }
      },
      (error: any) => {
        if (error.status === 422) {
          this.validationMessage = "Senha não validada";
        }
      }
    );

    this.password = '';
  }
}
