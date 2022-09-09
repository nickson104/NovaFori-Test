import React, { Component, useState } from 'react';
import { Task as Task } from './Home.js'

export class AddTask extends Component {
    

    constructor(props) {
        super(props);
        this.state = { tasks: [], loading: true };
        const [description, setDescription] = useState("");

        const handleSaveTask = () => {
            this.SaveTask(description)
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <form ref={taskForm}>
                    <label for="taskDescription">Task:</label>
                    <input id="taskDescription" name="taskDescription" type="text" onChange={(e) => setDescription(e.target.value)}></input>
                    <input type="button" value="Add Task" onClick={handleSaveTask} />
                </form>
            </div>
        );
    }

    async SaveTask(value) {
        const requestOptions = {
            method: 'Post',
            body: { value }
        }
        const response = await fetch('task', requestOptions);
        alert(response);
    }
}
