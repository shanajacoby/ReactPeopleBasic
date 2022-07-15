import React from 'react';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow'

class PeopleBasic extends React.Component{

    state={
        firstName: '',
        lastName:'',
        age:'',
        people:[]
    }

    onFirstNameChange= e=>{
        this.setState({firstName: e.target.value});
    }
     onLastNameChange= e=>{
        this.setState({lastName: e.target.value});
    }
     onAgeChange= e=>{
        this.setState({age: e.target.value});
    }
    onAddClick = () =>{
        const {people, firstName, lastName, age} = this.state;
        const person = {firstName, lastName, age};
        const copy= [...people, person];
        this.setState({people: copy, firstName:'', lastName:'', age:''});
    }
    onClearClick=()=>{
     
        this.setState({people:[]});
    }
    generateTable = () => {
        const { people } = this.state;
        if (people.length == 0) {
            return <h1> No people added yet. Be the first!</h1>
        }
        return(
        <div>
            <table className='table-striped table-hover table-bordered container mt-5'>
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <PersonRow people={this.state.people} />
                </tbody>
            </table>
        </div>
        )

    }


    render(){
        return(
        <div className='container mt-5'>
            <PersonForm
                onFirstNameChange={this.onFirstNameChange}
                firstName={this.state.firstname}
                onLastNameChange={this.onLastNameChange}
                lastName={this.state.lastname}
                onAgeChange={this.onAgeChange}
                age={this.state.age}

                onAddClick ={this.onAddClick}
                onClearClick ={this.onClearClick}/>
                    
                {this.generateTable()}
            </div>
           
             
        )
        
        }
    }
    export default PeopleBasic;
