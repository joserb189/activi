import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({

  providedIn: 'root'
})
export class ApicompleService {
  url = "apicomplementarias.salinacruz.tecnm.mx/public";

  constructor(private http : HttpClient ) { }


  getAcademico(): Observable<any> {
    return this.http.get((this.url));
    

}

  }
