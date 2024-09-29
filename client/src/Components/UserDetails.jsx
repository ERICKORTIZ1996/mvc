import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {

    const [ user, setUser] = useState({});
    
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/user/${id}`)
        .then(res => {
            setUser(res.data)
            //console.log('respuesta', res.data)
    })
        .catch(err => console.log(err))
    }, [id]);
    

    return(
        <div>
            <h4>Username: {user.userName}</h4>
            <h4>Email: {user.email}</h4>
            <h4>Age: {user.age}</h4>
            <Link to={'/api/user/' + user._id + '/edit'}>Edit</Link>
        </div>
    );

}

export default UserDetails;