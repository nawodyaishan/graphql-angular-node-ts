import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface User {
  name: string;
  age: number;
  address: string;
}

export interface QueryResponse {
  data: { users: User[] };
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.http.get<QueryResponse>('http://localhost:4000/graphql?query={ users { name age address } }').subscribe(data => {
      this.users = data.data.users;
    }, error => {
      console.log(error);
    });
  }

}
