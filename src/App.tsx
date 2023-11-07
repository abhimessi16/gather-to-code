
import './App.css'
import NavigationHeader from './Components/Navigations/NavigationHeader'
import NavigationFooter from './Components/Navigations/NavigationFooter'
import CreateSession from './Components/Sessions/CreateSession'

function App() {

  return (
    <>
      <NavigationHeader />
      <CreateSession />
      <NavigationFooter />
    </>
  )
}

export default App
