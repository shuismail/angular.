import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  customerForm!:FormGroup

  constructor(private custService:CustomerService){}

  ngOnInit(): void {

    this.formControl();


  }
  formControl() {
    this.customerForm=new FormGroup({
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
    this.custService.addCustomer(values).subscribe((response:any)=>{
      console.log("values are=>",response)
      alert("new data successfully inserted")
      this.customerForm.reset()
    })
  }

}
