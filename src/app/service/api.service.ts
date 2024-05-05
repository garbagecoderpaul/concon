import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient, private router: Router)  {
  }
  getProjectDesc(): Observable<any> {
    return this.http.get(`${environment.baseApi}/getappProjectDesc`)
  }
  getVideoSet(): Observable<any> {
    return this.http.get(`${environment.baseApi}/getVideoSet`)
  }
  getBannerVideo(): Observable<any> {
    return this.http.get(`${environment.baseApi}/getBannerVideo`)
  }
  getDocumentryVideo(): Observable<any> {
    return this.http.get(`${environment.baseApi}/getAppDocumentryVideo`)
  }
  getallnft(data): Observable<any> {
    return this.http.post(`${environment.baseApi}/getallnft`,data)
  }
  getComics(): Observable<any> {
    return this.http.get(`${environment.baseApi}/getComics`)
  }
  getallapproadmap(): Observable<any> {
    return this.http.get(`${environment.baseApi}/getallapproadmap`)
  }
  getallappFAQ(): Observable<any> {
    return this.http.get(`${environment.baseApi}/getallappFAQ`)
  }
  getallappTeam(): Observable<any> {
    return this.http.get(`${environment.baseApi}/getallappTeam`)
  }
  getallappcomicdesc(): Observable<any> {
    return this.http.get(`${environment.baseApi}/getallappcomicdesc`)
  }
  getComicById(id): Observable<any> {
    return this.http.get(`${environment.baseApi}/getComicById/${id}`)
  }
  addWalletHistory(body):Observable<any> {
    return this.http.post(`${environment.baseApi}/addWalletHistory`,body)
  }
}
