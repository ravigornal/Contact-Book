/* eslint-disable jsx-a11y/scope */
import React,{useState, useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import Contact from './Contact'
import {
    selectAllContact, 
    clearAllContact, 
    deleteAllContact
} from './../../actions/contactAction'

const Contacts = () => {

    const dispatch = useDispatch();
    const[selectAll,setSelectAll] = useState(false);
    const contacts = useSelector((state) => state.contact.contacts)
    const selectedContacts = useSelector(
        (state) => state.contact.selectedContacts
        );

    useEffect(() => {
        if(selectAll) {
            dispatch(selectAllContact(contacts.map((contact) => contact.id)))
        }else{
            dispatch(clearAllContact())
        }

    },[selectAll])
    return (
        <div>
            {selectedContacts.length > 0 ?  (
            <button 
                className="btn btn-danger" 
                onClick={() =>dispatch(deleteAllContact())}
            >
                Delete All
            </button>
            ): null}
            <table className="table shadow">
                <thead>
                    <tr>
                        <th scope="col">
                            <div className="custom-control custom-checkbox">
                                <input 
                                    id="selectAll" 
                                    type="checkbox" 
                                    className="custom-control-input" 
                                    onClick={()=>setSelectAll(!selectAll) } 
                                />
                                <label 
                                    htmlFor="selectAll" 
                                    className="custom-control-label"
                                ></label>
                            </div>
                        </th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">E-mail</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.length > 0 ? contacts.map(contact => {
                        return(
                            <Contact 
                                contact={contact} 
                                key={contact.id} 
                                selectAll={selectAll}
                            />
                        )
                    }) : <tr><td align="center" colSpan="5" ><b className="bold"> No Records Found !!!</b></td></tr>}
                </tbody>
                </table>
            </div>
    )
}

export default Contacts
