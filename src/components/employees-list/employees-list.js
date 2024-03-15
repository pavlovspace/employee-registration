import EmployeesListItem from '../employees-list-item/employees-list-item'

import './employees-list.css'

const EmployeesList = ({ data, onDelete }) => {
    const elements = data.map((value, index) => {
        return <EmployeesListItem key={index} {...value} onDelete={()=> onDelete(value.id)}/>
    })

    return <ul className="app-list list-group">{elements}</ul>
}

export default EmployeesList
