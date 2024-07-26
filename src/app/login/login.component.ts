import { Component } from '@angular/core';
import { FormControl, FormGroup ,RequiredValidator,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  contactForm = new FormGroup({
    FirstName:new FormControl('', [Validators.required] ),
    MidleName:new FormControl(),
    LastName:new FormControl('', [Validators.required]),
    Date:new FormControl('', [Validators.required]),
    Department:new FormControl('', [Validators.required]),
    Gender:new FormControl('', [Validators.required]),
    Address:new FormControl('', [Validators.required]),
    Phone:new FormControl('', [Validators.required]),
    Email:new FormControl('', [Validators.required]),

      
  })
  onSubmit(){
    console.log(this.contactForm.value)
  }

}
