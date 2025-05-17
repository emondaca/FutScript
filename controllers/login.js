import bcript from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

const login = async (req, res) => {
    const administrador = req.body;
    const username = process.env.admin;
    let password = process.env.password;
    const adminValido = { username, password }
    console.log(typeof(administrador));
    console.log(typeof(adminValido));
    try {
        if (administrador == adminValido) {
        return res.status(400).json({ message: "Invalid credentials" });
        };

        /*const payload = { email, user_id: user.id };*/

        const token = jwt.sign(administrador, process.env.secretKey);
        console.log(token, administrador)
        return res.status(200).json({ message: "User logged successfully", token });

    } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
    }
};

export const logIn = {
  
    login
};