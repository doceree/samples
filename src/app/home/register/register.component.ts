import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    if(this.userService.isLoggedIn()) {
      this.router.navigateByUrl('/dashboard');
    }
  }

  showSuccessMessage: boolean;
  serverErrorMessage: string;

  onSubmit(form: NgForm) {
    this.userService.postUser(form.value).subscribe(
      res => {
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if(err.status === 422) {
          this.serverErrorMessage = err.error.join('<br/>');
        }
        else{
          this.serverErrorMessage = 'Something went wrong. Please contact admin.';
        }
      }
    );
  }

  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      fullName: '',
      email: '',
      password: ''
    };
    form.resetForm();
    this.serverErrorMessage = '';
  }
}

