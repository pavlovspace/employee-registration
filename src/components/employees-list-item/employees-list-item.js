import React, { Component } from 'react'
import './employees-list-item.css'

class EmployeesListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            increase: this.props.increase,
        }
        this.inputRef = React.createRef()
    }

    componentDidMount() {
        if (this.inputRef.current && this.props.increase) {
            this.inputRef.current.classList.add('increase')
        }
    }

    increaseEmployees = () => {
        const newIncrease = !this.state.increase
        this.setState({ increase: newIncrease })

        if (newIncrease) {
            this.inputRef.current.classList.add('increase')
        } else {
            this.inputRef.current.classList.remove('increase')
        }

        this.props.updateDataIncrease(this.props.id)
    }

    addLikeEmployees = () => {
        this.inputRef.current.classList.toggle('like')
    }

    render() {
        return (
            <li ref={this.inputRef} className="list-group-item d-flex justify-content-between">
                <span onClick={this.addLikeEmployees} className="list-group-item-label">
                    {this.props.name}
                </span>

                <input type="text" className="list-group-item-input" defaultValue={`${this.props.salary} $`} />
                <div className="d-flex justify-content-center align-items-center">
                    <button onClick={this.increaseEmployees} type="button" className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button onClick={this.props.onDelete} type="button" className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem
