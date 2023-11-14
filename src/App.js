import './App.css'
import Header from './components/header'
import Hero from './components/heroSection'
import GamesSection from './components/gamesSection'

function App() {
    //Home of the application
    return (
        <div className="App">
            <Header />
            <Hero />
            <GamesSection/>
        </div>
    )
}

export default App
