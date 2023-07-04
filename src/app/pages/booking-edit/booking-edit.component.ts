import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-booking-edit',
  templateUrl: './booking-edit.component.html',
  styleUrls: ['./booking-edit.component.css']
})
export class BookingEditComponent implements OnInit {
  customerForm!:FormGroup

  constructor(private custService:CustomerService,private activeRoot:ActivatedRoute,private route:Router){}

  ngOnInit(): void {

    this.formControl();

    this.activeRoot.params.subscribe((paramsValue:any)=>{
      console.log("Values are=>",paramsValue)

      const id=paramsValue.id;
      this.getCustomerById(id)
    })

  }
  
  getCustomerById(id:any) {

    this.custService.getById(id).subscribe((response:any)=>{
      this.customerForm.get("firstName")?.setValue(response.firstName),
      this.customerForm.get("middleName")?.setValue(response.middleName),
      this.customerForm.get("lastName")?.setValue(response.lastName),
      this.customerForm.get("address")?.setValue(response.address),
      this.customerForm.get("gender")?.setValue(response.gender),
      this.customerForm.get("email")?.setValue(response.email)

    })
  }
  formControl() {
    this.customerForm=new FormGroup({
      id:new FormControl(null),

      firstName:new FormControl(null,[Validators.required]),
      middleName:new FormControl(null,[Validators.required]),
      lastName:new FormControl(null,[Validators.required]),
      address:new FormControl(null,[Validators.required]),
      gender:new FormControl(null,[Validators.required]),
      email:new FormControl(null,[Validators.required]),

    })
  }

  onSave(){
    const values=this.customerForm.value;
    this.custService.update(values).subscribe((response:any)=>{
      console.log("values are=>",response)
      alert("data successfully updated")
      this.route.navigateByUrl("")
    })
  }

}
