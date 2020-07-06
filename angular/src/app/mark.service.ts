import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarkService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/employees';

  constructor(private http: HttpClient) { }

  getMark(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createMark(mark: Object): Observable<Object> {
    return this.http.post('http://localhost:8080/api/v1/marks', mark);
  }

  updateCar(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteMark(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getMarksList(): Observable<any>  {
    return this.http.get('http://localhost:8080/api/v1/marks');
  }
}
