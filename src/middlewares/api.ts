import {AnyAction} from "redux";

export const CALL_API = "CALL_API"

const middleware = (store: any) => (next: any) => (action: ITodoAction) => {
    const callApi = action[CALL_API]
    if (!("types" in callApi) ||
        typeof callApi === "undefined") return next(action)

    const [requestType, failedType, successType] = callApi.types
    const actionWith = (data: AnyAction) => {
        const mAction = Object.assign({}, action, data)
        delete mAction[CALL_API]
        return mAction
    }
    const payload = action["payload"]

    if (!("priority" in payload) ||
        typeof payload === "undefined") throw Error("Undefined payload")

    next(actionWith({type: requestType}))
    return httpRequest(payload).then(
        mTodo => {
            next(actionWith({type: successType, payload: mTodo}))
        },
        error => {
            next(actionWith({type: failedType, payload: error}))
        }
    )
}

function httpRequest(/*endpoint: string, */todo: ITodo) {
    // let url = `http://127.0.0.1:5000/${endpoint}`
    return new Promise<ITodo>(((resolve, reject) => {
        setTimeout(() => {
            resolve(todo)
        }, 3000)
    }))
}

export default middleware