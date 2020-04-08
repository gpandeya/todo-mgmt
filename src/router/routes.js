import Home from '../components/Home'
import ToDosIndex from '../components/todo/Index'
import AddNewToDo from '../components/todo/AddNewToDo'
import ToDoDetails from '../components/todo/ToDoDetails'
import ToDos from '../components/todo/ToDos'
import EditToDo from '../components/todo/EditToDo'


export const routes =[
    {path:'', component: Home},
    {path:'/todos', component: ToDosIndex, children:[
        {path:'/', component: ToDos},
        {path:'/todos/add', component: AddNewToDo},
        {path:'/todos/:id/details', component: ToDoDetails},
        {path:'/todos/:id/edit', component: EditToDo, name: 'todoEdit'}
    ]},
    {path:'*', redirect:'/'}
] 