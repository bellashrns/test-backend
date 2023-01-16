import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export const getProducts = async (req, res) => {
    try {
        const response = await prisma.product.findMany();
        res.status(200).json(response); // 200: ok
    } catch (error) {
        res.status(500).json({ msg: error.message }); // 500: internal server error
    }
}

export const getProductByID = async (req, res) => {
    try {
        const response = await prisma.product.findUnique({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(200).json(response); // 200: ok
    } catch (error) {
        res.status(404).json({ msg: error.message }); // 404: not found
    }
}

export const createProduct = async (req, res) => {
    const { name, price } = req.body;
    try {
        const response = await prisma.product.create({
            data: {
                name,
                price
            }
        });
        res.status(201).json(response); // 201: created
    } catch (error) {
        res.status(400).json({ msg: error.message }); // 400: bad request
    }
}

export const updateProduct = async (req, res) => {
    const { name, price } = req.body;
    try {
        const response = await prisma.product.update({
            where: {
                id: Number(req.params.id)
            },
            data: {
                name,
                price
            }
        });
        res.status(201).json(response); // 201: created
    } catch (error) {
        res.status(400).json({ msg: error.message }); // 400: bad request
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const response = await prisma.product.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(201).json(response); // 201: created
    } catch (error) {
        res.status(400).json({ msg: error.message }); // 400: bad request
    }
    
}