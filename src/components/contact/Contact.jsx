import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Tooltip, Button } from "@mui/material";
import { IoMailOutline, IoCopyOutline } from "react-icons/io5";
import { VscSend } from "react-icons/vsc";

import "./contact.css";

export function Contact({ setSuccessMessage, setErrorMessage }) {
  const form = useRef();
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const getEmail = (mail) => {
    navigator?.clipboard.writeText(mail);
    setShowCopiedMessage(true);
    setTimeout(() => {
      setShowCopiedMessage(false);
    }, 1000);
  };

  const onSubmit = async (e) => {
    e.preventDefault();


    try {
      const response = await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      );

      if (response.status === 200) {
        setSuccessMessage(true);
        setTimeout(() => {
          setSuccessMessage(false);
        }, 3000);
      }

    } catch (error) {
      setErrorMessage(true);
        setTimeout(() => {
          setErrorMessage(false);
        }, 3000);
    }
  };

  useEffect(() => {
    if (openForm) {
      const form = document.getElementById("form");
      form.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [openForm]);

  return (
    <section id="contact" className="contact">
      <div>
        <h2>
          <IoMailOutline size={40} /> Contact
        </h2>
        <div className="contact__form">
          <article className="contact__form--input">
            <input
              id="email"
              readOnly
              type="text"
              value={"fernandoituarte.dev@gmail.com"}
            />
          </article>
          <Tooltip
            title="Contact me"
            placement="top"
            arrow
            enterDelay={100}
            leaveDelay={200}
          >
            <Button
              variant="contained"
              onClick={() => setOpenForm(!openForm)}
              className="contact__form--email"
            >
              <VscSend size={28} />
            </Button>
          </Tooltip>

          <Tooltip
            title={showCopiedMessage ? "Copied!" : "Copy"}
            placement="top"
            arrow
            enterDelay={100}
            leaveDelay={200}
          >
            <Button
              variant="contained"
              type="button"
              onClick={() => getEmail("fernandoituarte.dev@gmail.com")}
              className="contact__form--copyemail"
            >
              <IoCopyOutline size={26} />
            </Button>
          </Tooltip>
        </div>
      </div>
      {openForm && (
        <form
          id="form"
          ref={form}
          action=""
          className="form"
          onSubmit={onSubmit}
        >
          <div className="form_input">
            <label htmlFor="">Name: </label>
            <input
              type="text"
              name="user_name"
              required 
            />
          </div>
          <div className="form_input">
            <label htmlFor="">Email: </label>
            <input
              type="email"
              name="user_email"
              required 
            />
          </div>
          <div className="form_input">
            <label htmlFor="">Message: </label>
            <textarea
              type="text"
              name="message"
              required 
            />
          </div>

          <Button variant="contained" type="submit" className="form_button">
            envoyer
          </Button>
        </form>
      )}
    </section>
  );
}
