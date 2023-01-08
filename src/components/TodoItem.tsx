import React, {FC, PropsWithChildren} from 'react';
import {ITodo} from "../types/types";

interface TodoItemProps extends PropsWithChildren {
    todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
    return (
        <div>
            <input type="checkbox" checked={todo.completed}/>
            {todo.id}. {todo.title}
        </div>
    );
};

export default TodoItem;