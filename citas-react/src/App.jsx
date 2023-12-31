import ListadoPacientes from './components/ListadoPacientes'
import Header from './components/Header'
import Formulario from './components/Formulario'
function App() {
  return (
    <div className='container mx-auto mt-20'>
      <Header/>
      <div className=' mt-12 p-4 md:flex'>
        <Formulario />
        <ListadoPacientes />
      </div>

    </div>
  )
}

export default App
