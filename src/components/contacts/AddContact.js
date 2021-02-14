import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import shortid from 'shortid';
import {addContact} from '../../actions/contactAction';
import {useHistory} from 'react-router-dom';
const AddContact = () => {
    let history = useHistory();
    const dispatch  = useDispatch();
    const[name, setName] = useState("");
    const[phone, setPhone] = useState("");
    const[email, setEmail] = useState("");

const createContact = e => {
    e.preventDefault();
    const new_contact = {
        id:shortid.generate(),
        name:name,
        phone:phone,
        email:email,
    }
    dispatch(addContact(new_contact));
    history.push("/")
}

    return (
        <div className="card border-0 shadow">
            <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={(e) => createContact(e) }>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required={true}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Phone Number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required={true}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="email"
                                className="form-control"
                                placeholder="Enter Your Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required={true}
                            />
                        </div>
                        <button 
                            className="btn btn-primary" 
                            type="submit">
                            Create
                        </button>
                    </form>
                </div>
        </div>
    )
}

export default AddContact
