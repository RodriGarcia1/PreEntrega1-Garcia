import './App.css'
import NavBar from './components/NavBar/NavBar/NavBar'
import ItemListContainer from './components/itemListContainer/itemListContainer'
function App() {
  

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Bienvenido a "Los 3 hermanos"'}/>
    </>
  )
}

export default App

