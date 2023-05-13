import {nanoid} from 'nanoid';

interface User {
    id: string;
    name: string;
    age: number;
    address: string;
}

let users: User[] = [];

export const root = {
    getUser: ({id}: { id: string }) => {
        return users.find(user => user.id === id);
    },
    setUser: ({name, age, address}: { name: string, age: number, address: string }) => {
        const newUser: User = {id: nanoid(), name, age, address};
        users.push(newUser);
        return newUser;
    }
};
