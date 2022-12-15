const login = async (req, res, next) => {
    try {
        
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};
const signup = async (req, res, next) => {
    try {
        res.send('hello');
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};
const logout = async (req, res, next) => {
    try {
        res.send('hello');
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};
const refresh = async (req, res, next) => {
    try {
        res.send('hello');
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};
export default { login, logout, signup, refresh };
