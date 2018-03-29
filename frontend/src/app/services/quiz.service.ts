import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, RequestOptions } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';


import 'rxjs/add/operator/map';
@Injectable()
export class QuizService {

  constructor(private http: Http) { }

  get(url: Number) {
    return this.http.get('admin/quiz/'+url).map(res => res.json() );
  }

 

getquiz(){
   return this.http.get('admin/quiz')
     .map(res=> res.json());
}

  addquiz( newquiz: any) {   
   console.log(newquiz);
   var headers= new Headers();
   headers.append('Content-Type', 'application/json');
   return this.http.post('admin/addquiz',newquiz, {headers: headers})
   .map(res=>res.json());
  }

  deletequiz(id){
     return this.http.delete('admin/deletequiz/'+id)
    .map(res=>res.json());
  }

  savescore(quizscore){ 
    var headers= new Headers();
   headers.append('Content-Type', 'application/json');
    return this.http.post('admin/addscore', quizscore, {headers: headers}).map(res => res.json());
  }

  addComment(comment){ 
    var headers= new Headers();
   headers.append('Content-Type', 'application/json');
    return this.http.post('admin/addcomment', comment, {headers: headers}).map(res => res.json());
  }

  getComment(quizid){
    return this.http.get('admin/comments/'+quizid)
    .map(res=> res.json());
  }
}
