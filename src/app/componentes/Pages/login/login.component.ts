import { Component, OnInit } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:string;
  password:string;
  email;

  constructor(private  auth: AngularFireAuth,private router: Router) { }

  ngOnInit(): void {
    console.log(this.auth);
  }

  async login(e){
    try {
      
      const rta = await this.auth.signInWithEmailAndPassword(this.usuario,this.password);
      //console.log(rta);
      this.router.navigateByUrl("");
      localStorage.setItem('logged','true');
      
      this.email=(await this.auth.currentUser).email;      
      localStorage.setItem('email', this.email); 

    } catch (error) {
      console.log(error.message);
      alert(error.message);
      
    }
  }

  async signOut(){
    
  }

  


}
