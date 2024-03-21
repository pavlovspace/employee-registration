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
                { id: 1, name: 'John C.', salary: 800, increase: false, rise: true },
                { id: 2, name: 'Alex M.', salary: 3000, increase: true, rise: false },
                { id: 3, name: 'Carl W.', salary: 5000, increase: false, rise: false },
            ],
        }
    }

    deleteItem = (idToDelete) => {
        this.setState((prevState) => {
            const updatedData = prevState.data.filter((element) => {
                return element.id !== idToDelete
            })
            return { data: updatedData }
        })
    }

    addItem = (newEmployee) => {
        console.log(newEmployee)
        this.setState((prevState) => ({
            data: [...prevState.data, newEmployee],
        }))
    }

    updateDataIncrease = (id) => {
        this.setState((prevState) => ({
            data: prevState.data.map((employee) => {
                if (employee.id === id) {
                    return { ...employee, increase: !employee.increase }
                }
                return employee
            }),
        }))
        
    }

    render() {
        return (
            <div className="app">
                <AppInfo data={this.state.data} />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeesList data={this.state.data} onDelete={this.deleteItem} updateDataIncrease={this.updateDataIncrease} />

                <EmployeesAddForm data={this.state.data} onSubmit={this.addItem} />
            </div>
        )
    }
}

export default App
