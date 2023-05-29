import React, { useRef} from 'react'
import emailjs from '@emailjs/browser';
import style from "./Form.module.css"
import { BsSend } from "react-icons/bs"

export default function Form() {
    const form = useRef();
    
    const SERVICE_ID = process.env.SERVICE_ID;
    const TEMPLATE_ID = process.env.TEMPLATE_ID;
    const PUBLIC_KEY = process.env.PUBLIC_KEY;

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} className={style.container} onSubmit={sendEmail}>
            <input
                className={style.tinyInput}
                type="text"
                name="name"
                id="name"
                placeholder='Nombre'
                required
            />
            <input
                className={style.tinyInput}
                type="text"
                name="phone"
                id="phone"
                placeholder='Telefono'
                required
            />
            <input
                className={style.tinyInput}
                type="text"
                name="email"
                id="email"
                placeholder='Email'
                required
            />
            <input
                className={style.tinyInput}
                type="text"
                name="subject"
                id="subject"
                placeholder='Asunto'
                required
            />
            <textarea
                className={style.bigInput}
                name="message"
                id="message"
                required
                placeholder='Escriba su mensaje'
            ></textarea>
            <button className={style.submit} type="submit">
                <span className={style.submitText}>Enviar mensaje</span>
                <BsSend className={style.icon} />
            </button>
        </form>
    )
}
