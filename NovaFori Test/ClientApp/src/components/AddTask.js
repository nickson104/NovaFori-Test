import React, { Component, useState } from 'react';
import { Task as Task } from './Home.js'

export class AddTask extends Component {
    

    constructor(props) {
        super(props);
        this.state = { tasks: [], loading: true, description: "" };
        this.saveTask = this.saveTask.bind(this);
    }

    componentDidMount() {
    }

    setDescription(value) {
        this.setState({ description: value });
    }

    async saveTask() {
        const { description } = this.state;
        const url = "task/CreateTask";
        const requestOptions = {
            method: 'POST',
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify( description )
        }
        const response = await fetch(url, requestOptions)
        if (response.ok) {
            window.location = '/';
        }
        else {
            alert("Oops! Something went wrong.")
        }
    }

    render() {
        return (
            <div>
                <label for="taskDescription">Task:</label>
                <input
                    id="taskDescription"
                    name="taskDescription"
                    type="text"
                    style={{ margin: '10px' }}
                    onChange={(e) => this.setDescription(e.target.value)}>
                </input>
                <input
                    type="button"
                    value="Add Task"
                    style={{ margin: '10px' }}
                    onClick={this.saveTask} />
            </div>
        );
    }
}
