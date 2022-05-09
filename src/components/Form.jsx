import "./form.css"
export default function Form({ handleChange, aspirantData, submitValues }) {
  return (
    <section className="formAspirant">
      <h2>Formulario Ingreso de Aspirante</h2>
      <form>
        <label htmlFor="firstName">Nombres</label>
        <input
          id="firstName"
          name="firstName"
          onChange={handleChange}
          placeholder="Nombres"
          type="text"
          value={aspirantData.firstName}
        />

        <label htmlFor="lastName">Apellidos</label>
        <input
          id="lastName"
          name="lastName"
          onChange={handleChange}
          placeholder="Apellidos"
          type="text"
          value={aspirantData.lastName}
        />

        <label htmlFor="idNumber">Cedula</label>
        <input
          id="idNumber"
          name="idNumber"
          onChange={handleChange}
          placeholder="Cedula"
          type="text"
          value={aspirantData.idNumber}
        />

        <label htmlFor="dateBirth">Fecha de Nacimiento</label>
        <input
          id="dateBirth"
          name="dateBirth"
          onChange={handleChange}
          type="date"
          value={aspirantData.dateBirth}
        />

        <label htmlFor="email">Correo Electrónico</label>
        <input
          id="email"
          name="email"
          onChange={handleChange}
          placeholder="Correo Electrónico"
          type="mail"
          value={aspirantData.email}
        />

        <label htmlFor="githubUser">Usuario Github</label>
        <input
          id="githubUser"
          name="githubUser"
          onChange={handleChange}
          placeholder="Usuario Github"
          type="text"
          value={aspirantData.githubUser}
        ></input>
        <button onClick={submitValues} type="submit" className="submitButton">
          Guardar
        </button>
      </form>
    </section>
  )
}
