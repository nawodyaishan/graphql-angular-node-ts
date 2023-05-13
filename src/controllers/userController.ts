import {User} from '../types/types'
import {users} from '../utils/users';

export const getUser = ({id}: { id: string }): User | undefined => {
    return users.find(user => user.id === id);
};

export const setUser = ({name, age, address}: { name: string, age: number, address: string }): User => {
    const newUser: User = {id: Date.now().toString(), name, age, address};
    users.push(newUser);
    return newUser;
};
