

import React from 'react'
import './App.css';
import Player from './Player';

function App() {



  let players = [{
    id:1,
    name : "Lionel Messi",
    team : "Inter Miami",
    nationality:" Argentine",
    jerseyNumber:"10",
    age : 34,
    performance : 99,
    img_path : "https://www.footpack.fr/wp-content/uploads/2023/08/crampons-messi-signature-infinito.jpg"
},

{
    id:2,
    name : "CR7",
    team : "Al Nassr",
    nationality:"Portuguaise",
    jerseyNumber:"7",
    age : 36,
    performance : 95,
    img_path : "https://upload.wikimedia.org/wikipedia/commons/2/23/Cristiano_Ronaldo_WC2022_-_01.jpg"
}
,


{
    id:3,
    name : "Didier Drogba",
    team : "Butteur Rtraité",
    nationality:" Ivoirienne",
    jerseyNumber:"11",
    age : 34,
    performance : 94,
    img_path : "https://www.iol.pt/multimedia/oratvi/multimedia/imagem/id/13413571/"

},

{
    id:4,
    name : "Neymar",
    team : "AL hittiad",
    nationality:" Bresilienne",
    jerseyNumber:"10",
    age : 32,
    performance : 90,
    img_path : "https://www.sport.fr/wp-content/uploads/2023/08/Icon_ABACA_864104_003-1.jpg"
}
];
  return (
    <div className="main">
     

    {players.map(p => {
      return  <Player player={p} key={p.id}/>
    })}
       
     
      
    </div>
  )
}

export default App