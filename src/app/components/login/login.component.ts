import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginModel } from '../model/loginModel';
import { LoginService } from 'src/app/service/login.service';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',

  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  email!: string;
  senha!: string ;
 


  constructor(private formBuild: FormBuilder,
    private router: Router,
    public loginService: LoginService) { }
    
  
    ngOnInit(): void {  
        this.loginForm = this.formBuild.group({
          email :['', [Validators.required, Validators.email]],
          senha: ['', [Validators.required]]
        })
      }

    submitLogin() {
      // debugger
      var dadosLogin = this.loginForm.getRawValue() as loginModel;
      
      if(dadosLogin.email === "simbiosecode@gmail.com.br" && dadosLogin.senha === '1234')
      {
        this.router.navigateByUrl('home');
      }
      else(alert('Acesso negado'))
      // this.loginService.loginUsuario(dadosLogin).subscribe(
      //   token =>{
      //     debugger
      //     var myToken = token
      //   },
      //   erro =>{
      //     // debugger
      //     console.log(erro)
      //   }
      //)
    }
    // direcionar(login: string, senha: string): void{
    //   alert(login + senha)
    //   this.router.navigateByUrl('home');
    // }

     
    
     
    
}
