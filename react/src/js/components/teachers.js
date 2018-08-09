
import React, { Component } from 'react';
import Teacher from './teacher'
class Teachers extends Component {
    render() {
        return (
            <div>
                <ul className="Teachers">
                {
                    this.props.data.teachers.map((tdate)=>{
                        return <Teacher {...tdate}/>
                    })
                }
                    
                </ul>
            </div>
        )
    }
}

export default Teachers;