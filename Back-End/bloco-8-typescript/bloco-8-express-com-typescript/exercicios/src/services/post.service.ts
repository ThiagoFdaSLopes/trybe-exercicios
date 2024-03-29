import PostModel from "../models/Post.model";
import connection from "../models/connection";
import { IPost } from "../interfaces";

export default class PostService {
  postModel: PostModel

  constructor() {
    this.postModel = new PostModel(connection);
  }

  async getAll(): Promise<IPost[]> {
    const posts = await this.postModel.getAll();
    return posts;
  };

  async getById(id: number): Promise<IPost> {
    const post = await this.postModel.getById(id);
    return post;
  };

  // async create(post: IPost): Promise<IPost> {
  //   const 
  // }
}