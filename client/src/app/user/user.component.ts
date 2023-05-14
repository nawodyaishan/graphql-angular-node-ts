import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Apollo, gql} from 'apollo-angular';

interface User {
  id: string;
  name: string;
  age: number;
  address: string;
}

interface QueryResponse {
  users: User[];
}


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any;

  constructor(private apollo: Apollo) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    // Define the query
    const GET_USERS = gql`
    query {
      users {
        id
        name
        age
        address
      }
    }
  `;

    // Fetch the data
    this.apollo.watchQuery<QueryResponse>({query: GET_USERS})
      .valueChanges
      .subscribe(({data}) => {
        this.users = data.users;
      }, error => {
        console.log(error);
      });

    this.apollo.watchQuery<QueryResponse>({query: GET_USERS})
      .valueChanges
      .subscribe(({data}) => {
        this.users = data.users;
      }, error => {
        console.log(error);
      });

  }

  setUser(name: string, age: number, address: string) {
    // Define the mutation
    const SET_USER = gql`
    mutation SetUser($name: String!, $age: Int!, $address: String!) {
      setUser(name: $name, age: $age, address: $address) {
        id
        name
        age
        address
      }
    }
  `;

    // Execute the mutation
    this.apollo.mutate({
      mutation: SET_USER,
      variables: {
        name,
        age,
        address,
      },
    }).subscribe(({data}) => {
      // Handle the response here
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  getUser(id: string) {
    // Define the query
    const GET_USER = gql`
    query GetUser($id: String!) {
      getUser(id: $id) {
        id
        name
        age
        address
      }
    }
  `;

    // Fetch the data
    this.apollo.watchQuery<{ getUser: User }>({
      query: GET_USER,
      variables: {id},
    })
      .valueChanges
      .subscribe(({data}) => {
        // Handle the response here
        console.log(data);
      }, error => {
        console.log(error);
      });


  }


}
