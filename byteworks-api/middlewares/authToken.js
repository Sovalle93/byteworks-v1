import jwt from 'jsonwebtoken';

const decodeTokenMiddleware = (req, res, next) => {
    const authorizationHeader = req.header('Authorization');
    if (!authorizationHeader) {
        return res.status(401).json({ error: 'Authorization header is missing' });
    }
    const token = authorizationHeader.split(' ')[1];
    try {
        if (!token || typeof token !== 'string') {
            throw new Error('Invalid token format');
        }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        if (decodedToken.exp && Date.now() >= decodedToken.exp * 1000) {
            throw new Error('Token has expired');
        }
        const userEmail = decodedToken.email;
        req.userEmail = userEmail;
        next();
    } catch (error) {
        console.error('Error decoding token:', error);
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ error: 'Invalid token' });
        } else if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ error: 'Token has expired' });
        }
        return res.status(401).json({ error: 'Unauthorized' });
    }
};

export { decodeTokenMiddleware };

