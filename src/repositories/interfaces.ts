export interface IRead<T> {
    find(item: T): Promise<T[]>;
    findOne(id: string): Promise<T>;
}

export interface IWrite<T> {
    create(item: T): Promise<boolean>;
    update(id: string, item: T): Promise<boolean>;
    remove(id: string): Promise<boolean>;
}