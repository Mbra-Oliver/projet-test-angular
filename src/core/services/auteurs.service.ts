import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.prod";

@Injectable({
  providedIn: "root",
})
export class AuteursService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`/auteurs`);
  }

  create(data: any) {
    return this.http.post(`/auteurs`, data);
  }
}
