import React, { Component } from 'react'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [
                { id: 1, name: 'John C.', salary: 800, increase: false },
                { id: 2, name: 'Alex M.', salary: 3000, increase: true },
                { id: 3, name: 'Carl W.', salary: 5000, increase: false },
            ],
        }
    }

    onDelete = (idToDelete) => {
        this.setState((prevState) => {
            const updatedData = prevState.data.filter((element) => {
                return element.id !== idToDelete
            })
            return { data: updatedData }
        })
    }

    render() {
        const { data } = this.state

        return (
            <div className="app">
                <AppInfo />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeesList data={data} onDelete={this.onDelete} />
                <EmployeesAddForm />
            </div>
        )
    }
}

export default App
