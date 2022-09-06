import React, { Component } from 'react';

export class Task extends Component {
    static description = Task.description;

    constructor(props) {
        super(props);
        this.state = { tasks: [], loading: true };
    }

    componentDidMount() {
        this.populateTaskData();
    }

    static renderTasks(tasks) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task =>
                        <tr key={task.id}>
                            <td>{task.description}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Task.renderTasks(this.state.tasks);

        return (
            <div>
                <h1 id="tabelLabel" >To Do List</h1>
                {contents}
            </div>
        );
    }

    async populateTaskData() {
        const response = await fetch('task');
        const data = await response.json();
        this.setState({ tasks: data, loading: false });
    }
}
