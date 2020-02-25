import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import User from '../User';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  public form:FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: UserService, private fm:FormBuilder) { }

  ngOnInit() {
    this.form=this.fm.group({
      name:[''],
      lastName:[''],
      address:[''],
      phone:['']
    });
  }

  addUser(){
    let myUser:User=new User();
    myUser.nombre=this.form.get("name").value;
    myUser.apellidos=this.form.get("lastName").value;
    myUser.direccion=this.form.get("address").value;
    myUser.telefono=this.form.get("phone").value;

    this.bs.addUser(myUser).subscribe(data=>{
      console.log(data);
    });
    
  }


}
