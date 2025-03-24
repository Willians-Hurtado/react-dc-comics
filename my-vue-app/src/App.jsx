
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Comics from './components/data/comics'

function App() {

  const links = ['CHARACTERS', 'COMICS', 'MOVIES', 'TV', 'GAMES', 'COLLECTIBLES', 'VIDEOS', 'FANS', 'NEWS', 'SHOP']


  return (
    <>
      <Header links={links} />


      <Main comics={Comics} />
      <Footer />
    </>

  )
}

export default App
