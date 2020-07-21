import { Deserializable } from './deserializable'

export class Employee implements Deserializable {
  public id: number;
  public name: string;
  public lastName: string;
  public salary: number;
  public state: number;
  public position: number;
  public mail: string;

    deserialize(input: any): this {
    Object.assign(this, input);

    return this;
  }

}
