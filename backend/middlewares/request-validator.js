const validate = (schema, property) => {
    return (req, res, next) => {
        try {
            console.log('Req body');
            console.log(req.body);
            const { error } = schema.validate(req[property]);
            const valid = error == null;
            if (valid) {
                next();
            } else {
                const { details } = error;
                const message = details.map((i) => i.message).join(',');
                console.log('Body validation error messages');
                console.log('error', message);
                res.status(422).json({ success: false, message });
            }
        } catch (err) {
            console.log('Body validation error');
            console.log(err.message);
            res.status(500).json({
                success: false,
                message: 'Internal sever error',
            });
        }
    };
};

export default validate;
