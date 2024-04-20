import db from '../config/config-db';

const registerRepository = async (email: string, name: string, lastName: string, phoneNumber: string, hashedPassword: string) => {
    const sql = 'INSERT INTO users (email, nombres, apellidos, telefono, password) VALUES (?, ?, ?, ?, ?)';
    const values = [email, name, lastName, phoneNumber, hashedPassword];
    return db.execute(sql, values);
}

export default registerRepository;