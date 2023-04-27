import {AppState} from "../store";
import {addTodo} from "../actions/todoAction";
import {connect} from "react-redux";
import App from "../App";

const mapStateToProps = (state: AppState) => ({
    todos: state.todos
})
const mapReducerToProps = ({
    addTodo
})
export default connect(mapStateToProps, mapReducerToProps)(App)