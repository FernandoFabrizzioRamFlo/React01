export default function Formulario() {
  return (
    <div className=" md:w-1/2 lg:w-2/5 ">
      <h2 className="font-black text-xl text-center">
          Seguimiento Pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {' '}
        <span className=" text-indigo-600 font-bold text-lg">
          Administralos
        </span>
      </p>
      <form className="bg-white shadow-lg rounded-lg py-10 px-5">
        <div>
          <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">
            Nombre Mascota
          </label>
          <input className="border-2 w-full mt-2  p-2 plaholder-gray-400 rounded-md"
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
          />
        </div>
      </form>
    </div>
  )
}
