import * as Joi from 'joi';

const CreateUsersValidator = Joi.object({
  name: Joi.string().alphanum().min(3).max(10).required(),
  password: Joi.string().min(4).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
});

export { CreateUsersValidator };
