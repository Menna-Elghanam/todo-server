
// import express from 'express';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();
// const app = express();

// app.use(express.json());

// // Get all todos
// app.get('/todos', async (req, res) => {
//     try {
//         const todos = await prisma.todo.findMany();
//         res.json(todos);
//     } catch (error) {
//         console.error('Error fetching todos:', error);
//         res.status(500).json({ error: 'Error fetching todos' });
//     }
// });

// // Get a single todo by ID
// app.get('/todos/:id', async (req, res) => {
//     const { id } = req.params;
//     try {
//         const todo = await prisma.todo.findUnique({
//             where: { id: Number(id) },
//         });
//         if (!todo) {
//             return res.status(404).json({ error: 'Todo not found' });
//         }
//         res.json(todo);
//     } catch (error) {
//         console.error('Error fetching todo:', error);
//         res.status(500).json({ error: 'Error fetching todo' });
//     }
// });

// // Create a new todo
// app.post('/todos', async (req, res) => {
//     const { title, description } = req.body;
    
//     try {
//         const todo = await prisma.todo.create({
//             data: {
//                 title,
//                 description,
//             },
//         });
//         res.status(201).json(todo);
//     } catch (error) {
//         console.error('Error creating todo:', error);
//         res.status(500).json({ error: 'Error creating todo' });
//     }
// });

// // Update a todo
// app.put('/todos/:id', async (req, res) => {
//     const { id } = req.params;
//     const { title, description } = req.body;
    
//     try {
//         const updatedTodo = await prisma.todo.update({
//             where: { id: Number(id) },
//             data: {
//                 title,
//                 description,
//             },
//         });
//         res.json(updatedTodo);
//     } catch (error) {
//         console.error('Error updating todo:', error);
//         res.status(500).json({ error: 'Error updating todo' });
//     }
// });

// // Delete a todo
// app.delete('/todos/:id', async (req, res) => {
//     const { id } = req.params;
    
//     try {
//         await prisma.todo.delete({
//             where: { id: Number(id) },
//         });
//         res.status(204).send();
//     } catch (error) {
//         console.error('Error deleting todo:', error);
//         res.status(500).json({ error: 'Error deleting todo' });
//     }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });


import express from 'express';
import { PrismaClient } from '@prisma/client';
import todoRoutes from './routes/todoRoutes';
import cors from 'cors';


const app = express();
const prisma = new PrismaClient();

// Enable CORS for all routes
app.use(cors());

app.use(express.json());

// Use routes
app.use('/api/todos ', todoRoutes);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
