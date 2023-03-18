import React, { useState, useEffect} from 'react';
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'

const OneCustomer = (props) => {
    const {id} = useParams()
    const [customer,setCustomer] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneCustomer/${id}`)
            .then((res) => {
                console.log(res.data);
                setCustomer(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id])

    const deleteCustomer = () => {
        axios.delete(`http://localhost:8000/api/deleteCustomer/${id}`)
        .then((res) => {
            console.log(res);
            navigate ("/")
        })
    }
}