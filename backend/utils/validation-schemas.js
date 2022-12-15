import Joi from 'joi';

const schemas = {
    signup: Joi.object().keys({
        username: Joi.string().min(6).required().label('User name'),
        email: Joi.string().email().required().label('Email'),
        password: Joi.string().required().min(8).label('Password'),
    }),
    login: Joi.object().keys({
        email: Joi.string().email().required().label('Email'),
        password: Joi.string().required().label('Password'),
    }),
};


export default schemas;
