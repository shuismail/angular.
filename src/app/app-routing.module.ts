import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { BookingComponent } from './pages/booking/booking.component';
import { BookingEditComponent } from './pages/booking-edit/booking-edit.component';

const routes: Routes = [
  {
    path:"",component:MainLayoutComponent,
    children:[
      {path:"",component:DashboardComponent},
      {path:"register",component:RegisterComponent},
      {path:"booking",component:BookingComponent},
      {path:"customer-edit/:id",component:BookingEditComponent}
    ]
  
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
