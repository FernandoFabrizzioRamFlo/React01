import Paciente from './Paciente'
const ListadoPacientes = () => {
    return (
        <div className=" md:w-1/2 lg:3/5 h-screen">
            <h2 className=" font-black text-3xl text-center">
                Listado de pacientes
            </h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Administra tus {' '}
                <span className=" text-indigo-600 font-bold">
                    Pacientes y Citas
                </span>
            </p>
            <div className=' md:h-5/6 overflow-y-scroll'>
            <Paciente/>
            <Paciente/>
            <Paciente/>
            <Paciente/>
            </div>
           
            
        </div>
    )
}
export default ListadoPacientes;
