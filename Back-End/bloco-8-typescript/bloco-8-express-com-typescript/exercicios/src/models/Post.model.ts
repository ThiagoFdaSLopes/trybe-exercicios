import { IPost } from "../interfaces";
import { Pool, RowDataPacket } from "mysql2/promise";

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
}