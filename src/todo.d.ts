interface ISchema {}

interface ICallApiAction {
    types: [request, failed, success]
    endpoint: string
    schema: ISchema
}
interface ITodo extends ISchema {
    id: number
    priority: number
    value: string
}
interface ITodoAction {
    [key: string]: ITodo | ICallApiAction
}