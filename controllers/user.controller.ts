import { Request, Response } from 'express';
import User from '../models/user.model';

export const getUsers = async (req: Request, res: Response) => {
    
    const users = await User.findAll();

    if(users) {
        res.status(200).json(users);
    } else {
        res.status(404).json({
            msg: 'Users not founded'
        });
    }
}

export const getUser = async (req: Request, res: Response) => {

    const { id } = req.params;

    const user = await User.findByPk(id);

    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({
            msg: 'User not founded'
        });
    }
}

export const putUser = (req: Request, res: Response) => {

    const { id } = req.params;

    const { body } = req.body;

    res.json({
        msg: 'putUser',
        body
    })
}

export const postUser = (req: Request, res: Response) => {

    const { body } = req;

    res.json({
        msg: 'postUser',
        body
    })
}

export const deleteUser = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        msg: 'deleteUser',
        id
    })
}