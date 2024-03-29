import { Request, Response } from "express";
import PostService from "../services/post.service";

export default class PostController {
  
  constructor(private postService = new PostService()){}

  getAll = async (_req: Request, res: Response) => {
    const posts = await this.postService.getAll();
    if(!posts) return res.status(400).json({ message: 'Erro nao identificado'})
    res.status(200).json(posts);
  }

  getById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const post = await this.postService.getById(id);
    if(!post) return res.status(404).json({ message: 'Erro id nao identificado'})
    res.status(200).json(post)
  }
};