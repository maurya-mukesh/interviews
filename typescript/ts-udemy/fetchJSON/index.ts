import axios from 'axios';
const url = "https://jsonplaceholder.typicode.com/todos";

interface Todo{
  id:number;
  title:string;
  completed:boolean;
}

axios.get(`${url}/1`).then(res=>{
  const todo = res.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  // console.log({id,title,completed})
  logTodo(id,title,completed);

});

function logTodo(id:number, title:string, completed:boolean){
  console.log(`
    todo id: ${id},
    todo title : ${title},
    completed? : ${completed}
    `)
}
