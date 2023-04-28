import {AppState} from "../store";
import {addTodo, addTodoAsync} from "../actions/todoAction";
import {connect} from "react-redux";
import App from "../App";

const mapStateToProps = (state: AppState) => ({
    todos: state.todos
})
const mapReducerToProps = ({
    addTodo, addTodoAsync
})
export default connect(mapStateToProps, mapReducerToProps)(App)