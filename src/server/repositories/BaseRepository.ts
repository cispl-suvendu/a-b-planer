import { Model, UpdateQuery, Document } from 'mongoose';
import { NotFoundError } from '../errors';

export abstract class BaseRepository<T extends Document> {
  protected constructor(protected readonly model: Model<T>) {}

  async findById(id: string): Promise<T | null> {
    return this.model.findById(id).exec();
  }

  async findByIdOrThrow(
    id: string,
    resourceName: string = 'Resource'
  ): Promise<T> {
    const doc = await this.findById(id);
    if (!doc) {
      throw new NotFoundError(`${resourceName} with ID ${id} not found`);
    }
    return doc;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async findOne(filter: Record<string, any>): Promise<T | null> {
    return this.model.findOne(filter).exec();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async find(filter: Record<string, any> = {}): Promise<T[]> {
    return this.model.find(filter).exec();
  }

  async create(data: Partial<T>): Promise<T> {
    const doc = new this.model(data);
    return doc.save();
  }

  async updateById(id: string, update: UpdateQuery<T>): Promise<T | null> {
    return this.model.findByIdAndUpdate(id, update, { new: true }).exec();
  }

  async deleteById(id: string): Promise<T | null> {
    return this.model.findByIdAndDelete(id).exec();
  }
}
