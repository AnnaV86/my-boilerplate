import { City } from './cities';
import { User } from './users';

export interface IStore {
	users: Array<User>;
	cities: Array<City>;
}
