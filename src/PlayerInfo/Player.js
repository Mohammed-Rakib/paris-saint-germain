import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Player.css';
import fakedata from'../FakeData/Users'

import { useEffect, useState } from 'react';
import Players from '../Players/Players';
import Cart from '../Cart/Cart';


const Player = () => {
    const [ players, setPlayers ] = useState([]);
    const playersInfo = Object.values(players);

  
    useEffect( () => {
      const Player = fakedata;
      setPlayers(Player);
    },[]);

    const [cart , setCart ] = useState([]);
    const handleAddPlayer = (player) => {
      const newCart = [...cart, player]
      setCart(newCart);
      console.log(newCart);
    }

    return (
        <div className="row">
            <div className="col-lg-8 col-md-8 col-12 ">
            {
              playersInfo.map( player => <Players player={player} key={player.id}
              handleAddPlayer={handleAddPlayer}></Players>)
            }
            </div>

            <div className="col-lg-4 col-md-4 col-12">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Player;