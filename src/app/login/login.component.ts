import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticateService } from "../services/authenticate/authenticate.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm : FormGroup;
  loading = false;
  submitted = false;
  constructor(
    private authenticationService : AuthenticateService,
    private route: ActivatedRoute,
    private router: Router) 
    { }

  ngOnInit() {
  }
  onLogin(f) {
    debugger;
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    var user = this.authenticationService.login(f.username.value, f.password.value)
      if(user != null) {
          this.router.navigate(['/']);
      }
      else{
          alert('Username or password invalid!');
          this.loading = false;
      }
  }
}
