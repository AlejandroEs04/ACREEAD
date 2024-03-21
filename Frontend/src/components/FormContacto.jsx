import styles from '../styles/contacto.module.css'

const FormContacto = () => {
    return (
        <div className={styles.formularioContacto}>
            <form className={`${styles.formContacto} ${styles.singleContainerContact}`}>
                <div className={styles.inputsContainer}>
                    <div className={styles.inputContainer}>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="nombre" />
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="apellidos">Apellido(s)</label>
                        <input type="text" id="apellidos" />
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="email">Correo</label>
                        <input type="email" id="email" />
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="phone">Numero de telefono</label>
                        <input type="number" id="phone" />
                    </div>
                </div>

                <div className={styles.inputContainer}>
                    <label htmlFor="message">Mensaje</label>
                    <textarea id="message"></textarea>
                </div>
            </form>

            <div className={`${styles.infoContacto} ${styles.singleContainerContact}`}>
                <p>Nos pondremos en contacto lo más pronto posible, puedes utilizar nuestros otros medios de contacto</p>

                <div className={styles.contactoIcons}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                    </div>

                    <p>8110367083</p>
                </div>
                <div className={styles.contactoIcons}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                    </div>

                    <p>info@acreead.com</p>
                </div>
            </div>
        </div>
    )
}

export default FormContacto