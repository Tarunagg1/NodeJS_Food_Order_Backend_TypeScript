import bcrypt from 'bcrypt';
import { Request } from 'express';
import { APP_SECRET } from '../config';

export const GenerateSalt = async () => {
    return await bcrypt.genSalt()    
}


export const GeneratePassword = async (password: string, salt: string) => {

    return await bcrypt.hash(password, salt);

}
