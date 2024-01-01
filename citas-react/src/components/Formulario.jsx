import {useState, useEffect} from "react";


export default function Formulario() {
const [nombre, setNombre] = useState('Hook');
    
  return (
    <div className=" md:w-1/2 lg:w-2/5 ">
      <h2 className="font-black text-3xl text-center">
          Seguimiento Pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {' '}
        <span className=" text-indigo-600 font-bold text-lg">
          Administralos
        </span>
      </p>

      <form className="bg-white shadow-lg rounded-lg py-10 px-5">
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">
            Nombre Mascota
          </label>
          <input className="border-2 w-full mt-2  p-2 plaholder-gray-400 rounded-md"
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">
            Nombre Propietario
          </label>
          <input className="border-2 w-full mt-2  p-2 plaholder-gray-400 rounded-md"
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="email">
            Email
          </label>
          <input className="border-2 w-full mt-2  p-2 plaholder-gray-400 rounded-md"
            id="email"
            type="email"
            placeholder="Email Contacto Propietario"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">
            Alta
          </label>
          <input className="border-2 w-full mt-2  p-2 plaholder-gray-400 rounded-md"
            id="alta"
            type="date"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">
            Síntomas
          </label>
          <textarea className="border-2 w-full mt-2  p-2 plaholder-gray-400 rounded-md"
          id="sintomas"
          placeholder="Describe los síntomas"
          />
        </div>

        <input
          type="submit"
          className=" bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-color "
          value="Agregar paciente"
        />

      </form>
    </div>
  )
}
