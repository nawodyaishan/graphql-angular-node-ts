# GraphQL API with TypeScript and Angular Client

This project demonstrates how to create a simple GraphQL API using TypeScript, Express, and Apollo Server, with an
Angular client application.

## Project Structure

```
.
├── client (Angular client application)
│   ├── src
│   │   └── app
│   │       └── user (User component)
├── src (GraphQL API server)
│   ├── controllers (API controllers)
│   ├── routes (API routes)
│   ├── types (TypeScript interfaces)
│   └── utils (Utility functions and data)
└── tests (Test cases)
```

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- Angular CLI

### Installation

1. Clone the repo:

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Install client dependencies:

   ```bash
   cd client
   npm install
   ```

### Running the API Server

1. Start the GraphQL API server:

   ```bash
   yarn start
   ```

   The server will be running at `http://localhost:4000/graphql`.

### Running the Angular Client

1. Start the Angular client:

   ```bash
   cd client
   ng serve
   ```

   The client will be running at `http://localhost:4200`.

## Running Tests

1. Run tests for the API server:

   ```bash
   yarn test
   ```

## Sample graphQL Queries
example of a GraphQL mutation that could be used to create a new user with the setUser operation:

```
mutation SetUser($name: String!, $age: Int!, $address: String!) {
  setUser(name: $name, age: $age, address: $address) {
    id
    name
    age
    address
  }
}

{
"name": "Alice",
"age": 30,
"address": "123 Main St."
}
```
example of a GraphQL query that could be used to fetch a user's information given their id:

```
query GetUser($id: String!) {
  getUser(id: $id) {
    id
    name
    age
    # other fields you might want to fetch
  }
}


{
"id": "12345"
}
```

## Built With

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [Angular](https://angular.io/)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.