import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customerUrl=String ("http://localhost:8080/api/vi/customer")

  constructor(private http:HttpClient) { }


  addCustomer(body:any){
    return this.http.post(this.customerUrl,body);
  }

  getAll(){
    return this.http.get(this.customerUrl)
  }

  getById(id:any){
    const url=`${this.customerUrl}/${id}`
    return this.http.get(url);
  }

  delete(id:number){
    const url=`${this.customerUrl}/${id}`
    return this.http.delete(url);
  }

  update(body:any){
    return this.http.post(this.customerUrl,body);

  }
}

