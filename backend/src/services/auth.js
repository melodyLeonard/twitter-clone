import jwt from 'jsonwebtoken';
import User from '../models/User'

import constants from '../config/constants';

export async function requireAuth(user) {
    if (!user || !user._id) {
        throw new Error('Unauthorized');
    }
    const me = User.findById(user._id)

    if (!me) {
        throw new Error('Unauthorized');
    }
    return me
}

export async function decodeToken(token) {
    try {
        const arr = token.split(' ');
        if (arr[0] === 'Bearer') {
            return await jwt.verify(arr[1], constants.JWT_SECRET);
        }
        throw new Error('Invalid token. Bearer not found');
    } catch (error) {
        throw error;
    }
}
