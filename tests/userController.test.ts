import {getUser, setUser} from '../src/controllers/userController';
import {users} from '../src/utils/users';
import {User} from '../src/types/types';

describe('User Controller', () => {
    it('Should fetch a user by id', () => {
        const id = '1';
        const user = getUser({id});
        expect(user).toEqual(users[0]);
    });

    it('Should add a user', () => {
        const name = 'John Doe';
        const age = 25;
        const address = '123 Street, City, Country';
        const newUser = setUser({name, age, address});
        expect(newUser).toMatchObject({name, age, address});
    });
    it('Should add a user', () => {
        const user = setUser({name: "Test User", age: 30, address: "123 Test St"});
        expect(user).toMatchObject({name: "Test User", age: 30, address: "123 Test St"});
    });
    // Test case to check if the getUser function returns undefined for a non-existent user
    it('Should return undefined for a non-existent user', () => {
        const nonExistentId = "non-existent-id";
        expect(getUser({id: nonExistentId})).toBeUndefined();
    });
});
