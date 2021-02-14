
 import React from 'react'
 import Avatar from 'react-avatar';
import {Link} from 'react-router-dom';
import {deleteContact} from './../../actions/contactAction';
import {useDispatch} from 'react-redux';
 
 const Contact = ({contact , selectAll}) => {
     const dispatch = useDispatch();
     const {name, phone, email, id} = contact; //destructor
     return (
        <tr>
            <td >
                <div className="custom-control custom-checkbox">
                    <input 
                        checked={selectAll} 
                        type="checkbox" 
                        className="custom-control-input"
                    />
                    <label 
                        className="custom-control-label"
                    ></label>
                </div>
            </td>
            <td><Avatar 
                    className="mr-2" 
                    name={name} 
                    size={40} 
                    round={true}
                />
                {name}
            </td>
            <td>{phone}</td>
            <td>{email}</td>
            <td className="actions">
                <Link to={`/contacts/edit/${id}`}>
                    <span className="material-icons mr-2 text-warning" >edit </span>
                </Link>
                    <span className="material-icons mr-2 text-danger cursor-pointer" role='button' onClick={()=>dispatch(deleteContact(id))}>delete</span>
            </td>
        </tr>
     )
 }
 
 export default Contact;
 