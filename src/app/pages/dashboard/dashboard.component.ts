import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  customerList:any

  constructor(private customerService:CustomerService,private route:Router){}


  ngOnInit(): void {
    this.getAllCustomer();

  }
  getAllCustomer() {
    this.customerService.getAll().subscribe((response:any)=>{
      this.customerList=response;
      console.log(response)
    })

  }


  OnEdit(list:any){
    return this.route.navigateByUrl("customer-edit/"+list.id)
  }

  Delete(list:any){
   this.customerService.delete(list).subscribe(response=>{
    console.log()
    alert("Data deleted successfully")
    this.getAllCustomer()
   })
  }

}
