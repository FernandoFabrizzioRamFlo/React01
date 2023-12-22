import ListadoPacientes from './components/ListadoPacientes'
import Header from './components/Header'
import Formulario from './components/Formulario'
function App() {
  return (
    <div className='container mx-auto'>
      <Header/>
      <Formulario/>
      <ListadoPacientes/>
    </div>
  )
}

export default App
