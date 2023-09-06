import React from 'react'
import './App.css';

function Player(props) {
  return (
    <>
        <div className="card" >
            <img src={props.player.img_path} className="card-img-top img" alt="..."/>
            <div className="card-body">
                <h2 className="card-title red">  {props.player.name}</h2>
                <h3 className='nationality bleu'>{props.player.nationality}</h3>
                <h4 className='red'>{props.player.jerseyNumber}</h4>
                <p className="card-text bleu">{props.player.team} .</p>
                <p className='red'>{props.player.age}</p>
                <a href="#" className="btn btn-primary ">{props.player.performance}</a>
            </div>
        </div>
    </>
  )
}

export default Player;