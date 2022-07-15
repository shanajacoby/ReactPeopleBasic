import React from 'react';

class PersonRow extends React.Component {
    generateRow = (person) => {
        const { firstName, lastName, age } = person
        let className = ''
        if (age > 65) {
            className += 'bg-danger';
        }
        return <tr className={className}>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{age}</td>
        </tr>
    }

    render() {
        const { people } = this.props;
       
            return people.map(p => this.generateRow(p))
        
    }
}
export default PersonRow;