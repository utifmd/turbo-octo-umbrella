import {AppDispatch, AppState} from "../store";
import {CALL_API} from "../middlewares/api";
import {AnyAction} from "redux";

export enum TodoAction {
    TODO_ADD_REQUEST = "@@TODO_ADD_REQUEST",
    TODO_ADD_FAILED = "@@TODO_ADD_FAILED",
    TODO_ADD_SUCCESS = "@@TODO_ADD_SUCCESS",

    TODO_REMOVE_REQUEST = "@@TODO_REMOVE_REQUEST",
    TODO_REMOVE_FAILED = "@@TODO_REMOVE_FAILED",
    TODO_REMOVE_SUCCESS = "@@TODO_REMOVE_SUCCESS",

    TODO_UPDATE_REQUEST = "@@TODO_UPDATE_REQUEST",
    TODO_UPDATE_FAILED = "@@TODO_UPDATE_FAILED",
    TODO_UPDATE_SUCCESS = "@@TODO_UPDATE_SUCCESS",

    TODO_GET_REQUEST = "@@TODO_GET_REQUEST",
    TODO_GET_FAILED = "@@TODO_GET_FAILED",
    TODO_GET_SUCCESS = "@@TODO_GET_SUCCESS",

    TODOS_GET_REQUEST = "@@TODOS_GET_REQUEST",
    TODOS_GET_FAILED = "@@TODOS_GET_FAILED",
    TODOS_GET_SUCCESS = "@@TODOS_GET_SUCCESS"
}

const addTodoAction = (todo: ITodo): ITodoAction => ({
    [CALL_API]: {
        endpoint: "http://example.com",
        schema: todo,
        types: [
            TodoAction.TODO_ADD_REQUEST,
            TodoAction.TODO_ADD_FAILED,
            TodoAction.TODO_ADD_SUCCESS
        ]
    }
})
export const addTodo = (todo: ITodo) =>
    (dispatch: AppDispatch) =>
        dispatch({type: TodoAction.TODO_ADD_SUCCESS, payload: todo} as AnyAction)

export const addTodoAsync = (todo: ITodo) =>
    (dispatch: AppDispatch, getState: AppState) => {
        return dispatch(addTodoAction(todo) as AnyAction)
    }