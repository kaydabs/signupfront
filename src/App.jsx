import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

class App extends Component { 
    constructor(){
        super()
        this.state = {
            fullName:'',
            email:''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }
    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    onSubmit(event){
        event.preventDefault()

        const registered ={
            fullName: this.state.fullName,
            email: this.state.email
        }

        axios.post('http://localhost:4000/app/signup', registered)
            .then(response => console.log(response.data))

        this.setState({
            fullName:'',
            email:''
        })
    }
    render(){
        return (
            <div>
                <div className="container">
                    <div className="form-div">
                        <form onSubmit={this.onSubmit}>
                            <input type = 'text'
                            placeholder="Full Name"
                            onChange={this.changeFullName}
                            value={this.state.fullName}
                            className='form-control form-group'
                            />
                             <input type='text'
                             placeholder="E-mail"
                             onChange={this.changeEmail}
                             value={this.state.email}
                             className='form-control form-group'
                             />

                             <input type='submit' className="btn btn-danger btn-block" value='Submit' />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default App