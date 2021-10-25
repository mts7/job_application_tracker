import { extend } from 'vee-validate';
import { email, required } from 'vee-validate/dist/rules';

extend('email', email);

extend('max', {
	validate: (value: string, { length }): boolean => {
		return value.length <= length;
	},
	params: ['length'],
	message: 'The {_field_} field must have no more than {length} characters.',
});

extend('positive', {
	validate: (value: number): boolean => {
		return value >= 0;
	},
	message: 'The {_field_} field must have a positive number.',
});

extend('required', {
	...required,
	message: 'The {_field_} is required.',
});
