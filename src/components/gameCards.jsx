import league from '../assets/league-cover.jpg'
import callOfDuty from '../assets/call-of-duty.jpg'

const GameCard = ({game}) =>{

    console.log(game.image)
    return (
        <div className='game-card' style={{
            '--hover-color': game.hoverColor
        }}>
            <img src={league} alt="game" />
            <div>{game.name}</div>
        </div>
    )
}

export default GameCard