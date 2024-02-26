import Button from "./Button"

export type TaskPropsType = {
    id: number
    title: string
    isDone: boolean
}

export type PropsType = {
    title: string
    tasks: Array<TaskPropsType>
    date?: string
}
export const Todolist = ({title, tasks, date}: PropsType) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title='+'/>
            </div>
            {tasks.length === 0 ? (
                'Тасок нет'
            ) : (<ul>
                {tasks.map(task => {
                    return (
                        <li key={task.id}>
                            <input type="checkbox" checked={task.isDone}/>
                            <span>{task.title}</span>
                        </li>
                    )
                })}
            </ul>)}

            <div>
                <Button title='All'/>
                <Button title='Active'/>
                <Button title='Completed'/>
            </div>
            <div>{date}</div>
        </div>
    )
}