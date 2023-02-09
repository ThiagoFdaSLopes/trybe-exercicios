import { IPost } from "../interfaces";
import { OkPacket, Pool, RowDataPacket } from "mysql2/promise";

export default class PostModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll(): Promise<IPost[]> {
    const [rows] = await this.connection.execute<RowDataPacket[] & IPost[]>('SELECT * FROM Posts');
    return rows;
  }

  async getById(id: number): Promise<IPost> {
    const [[post]] = await this.connection.execute<RowDataPacket[] & IPost>('SELECT * FROM Posts WHERE id = ?', [id]);
    return post as IPost;
  }

  async create(post: IPost): Promise<Number> {
    const [{ insertId }] = await
      this.connection.execute<OkPacket>('INSERT INTO Posts (title, author, category, publicationDate) VALUES (?, ?, ?, ?)',
      [post.title, post.author, post.category, post.publicationDate]);
    return insertId;
  }
}