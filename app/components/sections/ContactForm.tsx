export default function ContactForm() {
  return (
    <form>
      <div>
        <label htmlFor="name">Nombre</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Tu nombre"
        />
      </div>

      <div>
        <label htmlFor="email">Correo electrónico</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="tu@email.com"
        />
      </div>

      <div>
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          placeholder="Cuéntame sobre tu proyecto..."
        />
      </div>

      <button type="submit">Enviar mensaje</button>
    </form>
  );
}