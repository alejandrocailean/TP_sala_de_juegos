import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {  FormBuilder } from '@angular/forms';
import { FirestoreService } from 'src/app/Servicios/firestore/firestore.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  constructor(private  auth: AngularFireAuth,private router: Router,private fb: FormBuilder, private afs:AngularFirestore) { }

  ngOnInit(): void {
    
  }

  registerForm = this.fb.group({
    email: [''],
    password:['']    
  });

   async register(){

    // console.log(this.registerForm.value.email);
    // console.log(this.registerForm.value.password);
     try{
      const rta= await this.auth.createUserWithEmailAndPassword(this.registerForm.value.email,this.registerForm.value.password);
      console.log(rta);
      this.afs.collection('users_score').doc(this.registerForm.value.email).set({email:this.registerForm.value.email,puntaje:0})
      this.router.navigateByUrl("login");
      localStorage.clear();
    }
    catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  } 

  
}
