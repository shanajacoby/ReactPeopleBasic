import React from 'react';

class PersonForm extends React.Component{
    render(){
        const{firstName, lastName, age, onFirstNameChange, onLastNameChange, onAgeChange, onAddClick, onClearClick}= this.props;
        return(
            <div className='row jumbotron'>
                <div className='col-md-2'>
                    <input type="text" placeholder="First Name" value={firstName} onChange={onFirstNameChange} class='form-control' />
                </div>
                <div className='col-md-2'>
                    <input type="text" placeholder="Last Name" value={lastName} onChange={onLastNameChange} className='form-control' />
                </div>
                <div className='col-md-2'>
                    <input type="text" value={age} onChange={onAgeChange} className='form-control' placeholder="Age"/>
                </div>
                <div className='col-md-2'>
                    <button onClick={onAddClick} className='btn btn-primary btn-block'>Add</button>
                </div>
                <div className='col-md-2'>
                    <button onClick={onClearClick} className='btn btn-warning btn-block'>Clear All</button>
                </div>
            </div>
        )
    }
}
export default PersonForm;