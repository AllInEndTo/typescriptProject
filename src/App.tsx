import React from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <div>
                    <Link to='/users'>Пользователи</Link>
                    <Link to='/todos'>Список дел</Link>
                </div>
                <Route path="/users" element={<UsersPage/>}/>
                <Route path="/todos" element={<TodosPage/>}/>
                <Route path="/user/:id" element={<UserItemPage/>}/>
                <Route path="/todo/:id" element={<TodoItemPage/>}/>
                <Route path="*" element={<div>NotFound</div>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;


// <div>
//     <EventsExample/>
//     <Card onClick={(num) => console.log('click', num)} variant={CardVariant.primary} width='100px' height='100px'>
//         <button>кнопка</button>
//         <div>Текст</div>
//     </Card>
// </div>