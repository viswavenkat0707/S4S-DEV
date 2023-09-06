import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
  get last(){
    return this.contactForm.get('lastName')
} /**short property for error msg */
get city(){
return this.contactForm.get('address')?.get('city')
}


onSubmit(){
  console.log(this.contactForm.value)
}

contactForm = new FormGroup({

firstName: new FormControl('',[Validators.required,Validators.maxLength(12),Validators.pattern("^[a-zA-Z]+$")]), 
email: new FormControl({
  value: '',
  disabled:false},[Validators.required,Validators.maxLength(20),Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]
),
phone: new FormControl('',[Validators.required])
})


}