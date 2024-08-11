import { Request, Response } from 'express';
import { PrismaClient, todo } from '@prisma/client';

const prisma = new PrismaClient();


  
export const getTodos = async (req: Request, res: Response) => {
    try {
        const todos = await prisma.todo.findMany();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: "Error fetching todos" });
    }
};
export const createTodo = async (req: Request, res: Response) => {
    const { title, description, date } = req.body;

    // Validate the presence of the required fields
    if (!title || !date) {
        return res.status(400).json({ error: "Title and Date are required fields" });
    }

    try {
        const todo = await prisma.todo.create({
            data: {
                title,
                description: description || null,
                date: new Date(date), // Convert to Date object if necessary
            },
        });
        res.json(todo);
    } catch (error) {
        console.error("Error creating todo:", error);
        res.status(500).json({ error: "Internal Server Error. Unable to create todo." });
    }
};




export const updateTodo = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { isComplete } = req.body;
  
    try {
      const updatedTodo = await prisma.todo.update({
        where: { id: Number(id) },
        data: { isComplete },
      });
      res.json(updatedTodo);
    } catch (error) {
      res.status(500).json({ error: 'Error updating todo' });
    }
  };

export const deleteTodo = async (req: Request, res: Response) => {
    const { id } = req.params;
    await prisma.todo.delete({ where: { id: Number(id) } });
    res.status(204).send();
};
