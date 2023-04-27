interface ISchema {}

interface ITodo extends ISchema {
    id: number,
    priority: number,
    value: string
}

interface ITodoAction {
    [key: string]: string | {
        types: string[],
        endpoint: string,
        schema: ISchema
    }
}