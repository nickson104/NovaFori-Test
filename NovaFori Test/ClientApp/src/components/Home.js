import React, { Component } from 'react';

export class Task extends Component {
    static description = Task.description;

    constructor(props) {
        super(props);
        this.state = { tasks: [], loading: true };
        this.toggleTaskStatus = this.toggleTaskStatus.bind(this);
    }

    componentDidMount() {
        this.populateTaskData();
    }


    async toggleTaskStatus(id) {
        this.setState({ loading: true });

        const url = "task/ToggleTaskStatus";
        const requestOptions = {
            method: 'POST',
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify(id)
        }
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        this.setState({ tasks: data, loading: false });
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            :
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flex: '50%', padding: '5%' }}>
                    <table className='table table-striped' aria-labelledby="tabelLabel">
                        <thead>
                            <tr>
                                <th colSpan='2'>Pending</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.tasks.filter(task => task.type == 0).map(task =>
                                <tr key={task.id}>
                                    <td>{task.description}</td>
                                    <td><input type="button" id="completeTask" value="Complete Task" onClick={this.toggleTaskStatus.bind(this, task.id)}></input></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div style={{ display: 'flex', flex: '50%', padding: '5%' }}>
                    <table className='table table-striped' aria-labelledby="tabelLabel">
                        <thead>
                            <tr colSpan='2'>
                                <th>Completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.tasks.filter(task => task.type == 1).map(task =>
                                <tr key={task.id}>
                                    <td>{task.description}</td>
                                    <td><input type="button" id="incompleteTask" value="Set Task Back To Pending" onClick={this.toggleTaskStatus.bind(this, task.id)}></input></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

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
