import {React, Component} from 'react';
import FirstChild from './FirstChild';

class ParentComponent extends Component{
    render(){
        return(
            <h1>Iam the parent component
                <FirstChild />
            </h1>
        );
    }
}
export default ParentComponent;