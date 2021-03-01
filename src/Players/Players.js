import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlus } from '@fortawesome/free-solid-svg-icons';
import './players.css'

const Players = (props) => {

    return (

            <div className="row player-cart">
                <div className="col-md-5 image">
                <img src={props.player.image} alt=""/>
                </div>
                <div className="col-md-7">
                    <h3> <small style={{margin:"0 20px"}}>{props.player.id}</small>{props.player.name}</h3>
                    <h5 className="mx-4 my-3">{props.player.post}</h5>
                    <h4 className="mx-4">Salary : {props.player.salary}</h4>
                    <button className="btn btn-outline-primary mx-4 my-3"
                    onClick={ () =>props.handleAddPlayer(props.player)}><FontAwesomeIcon icon={faPlus} />  Select Player</button>
                </div>
            </div>

    );
};

export default Players;