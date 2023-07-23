import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from '../../components/Button';
import Axios from 'axios';
import { IncrementCounterAction } from '../../actions/IncrementCounterAction';
export default function Home() {
    //var userID = JSON.parse(atob(localStorage.getItem('token').split('.')))

    //console.log(localStorage.getItem('type'))
    //console.log(JSON.parse(atob(localStorage.getItem('token').split('.'))))
    const dispatch = useDispatch();
    const number = useSelector(state => state.CounterReducer.counter);
    const [name, setName] = useState('');
    const val = useSelector(state => state.ValueReducer.value)
    var num = "";
    const increaseCounter = () => {
        Axios.post("http://localhost:5001/api/registeruser", {
            email: "Dasith",
            password: "534rdsd",
        }).then((response) => {
            Axios.get("http://localhost:5001/api/data").then((response) => {
                console.log(response.data[0].id);
                dispatch(IncrementCounterAction(parseInt(response.data[0].id)));
            });
        });
        //const data = Axios

    };
    /*useEffect(() => {
        console.log("hello")
        /*Axios.get("http://localhost:5001/api/data").then((response) => {
            //num = response.name;
            //console.log((response.data[0].name));
            setName(response.data[0].name);
        });
    })*/
    return (
        <div style={{ width: "94vw", height: "100vh", overflowY: "auto" }}>
            Home : {number} <Button fun={increaseCounter} /><br></br>
            This is Customer home window {name}
        </div>

    )
}
