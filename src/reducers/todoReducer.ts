import {AnyAction, Reducer} from "redux";
import {TodoAction} from "../actions/todoAction";

export type RootState = {
    todos: ITodo[], status: "idle" | "failed" | "success"
}
const initialState: RootState = {
    status: "idle", todos: [
        {
            id: 1, priority: 100, value: "Data Penting jangan macam-macam cukup satu macam."
        },
        {
            id: 2, priority: 20, value: "Data kurang penting disini untuk melihat saja"
        },
    ]
}
const reducer: Reducer<RootState> = (
    state: RootState = initialState, action: AnyAction): RootState => {
    switch (action.type) {
        case TodoAction.TODO_ADD_SUCCESS:
            return {...state, todos: state.todos.concat(action.payload as ITodo)} as RootState
        default:
            return state
    }
}
export default reducer