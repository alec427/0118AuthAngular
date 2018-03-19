import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response} from '@angular/http';

@Injectable()

export class SessionService {
  base_URL="http://localhost:3000/api"
  options= {withCredentials: true}
  constructor(private http: Http) { }
  
  handleError(e) {
    console.log(e); 
    alert(JSON.parse(e._body).message)
    return Observable.throw(e.message);
    //return Observable.throw(e.json().message);
  }

  //Primera forma de enviar datos a nuestro Back-End
  login(username,password){
    return this.http.post(`${this.base_URL}/login`,{username,password}, this.options)
      .map(res => res.json())
      .catch(err=>this.handleError(err));
  }

//Segunda forma de enviar datos a nuestro Back-End
  signup(formSignup){
    //if(Object.keys(formSignup).length < 1) return;
    return this.http.post(`${this.base_URL}/signup`,formSignup, this.options)
      .map(res => res.json())
      .catch(err=>this.handleError(err))      
  }

  loggedIn(){
    return this.http.get(`${this.base_URL}/loggedin`, this.options)
      .map(res => res.json())
      .catch(err=>this.handleError(err))      
  }

  logout(){
    return this.http.post(`${this.base_URL}/logout`, {}, this.options)
      .map(res=> res.json())
      .catch(err => this.handleError(err) )
  }

  delete(id){
    return this.http.get(`${this.base_URL}/delete/${id}`, this.options)
      .map(res=> res.json())
      .catch(err => this.handleError(err) )
  }

  update(user, id){
    return this.http.post(`${this.base_URL}/update/${id}`,user, this.options)
      .map(res => res.json())
      .catch(err=>this.handleError(err))      
  }
}
