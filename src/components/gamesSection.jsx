import '../style/gamesSection.css'
import GameCard from './gameCards'
import gameData from '../gameData'


const GamesSection = () =>{
    return (
        <section>
            <div className="container">
                <div className="games-section">
                    <h1>Popular Games</h1>
                    <div className="games-container">
                        {gameData.map((game, index) => (
                            <GameCard key={index} game={game}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GamesSection