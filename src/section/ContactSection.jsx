import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

const ContactSection = () => {
  const [inputName, setInputName] = useState('');
  const [errorMsgName, setErrorMsgName] = useState('');
  const [errorMsgTextarea, setErrorMsgTextarea] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const form = useRef();
  const inputNameBox = useRef(null);
  const inputMessageBox = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if(inputName.length < 3) {
      setErrorMsgName('Nama tidak boleh kurang dari 3 huruf');
    } else if (inputMessageBox.current.value === '') {
      setErrorMsgTextarea('Mohon memasukkan pesan pada kolom teks!')
    }
    else {
      setButtonDisabled(true);

      setTimeout(() => {
        setButtonDisabled(false)
      }, 3000);

      emailjs
      .sendForm('service_jbqme79', 'template_klrm1df', form.current, {
        publicKey: 'OOvkZ3N4lZeN7pfTr',
      })
        .then(
          () => {
            setInputName('')
            inputMessageBox.current.value = '';
          },
          (err) => {
            console.log(err)
          },
        )
    }  
  }

  return (
    <section id="contact" className="z-10">
      <div className="px-3 lg:px-32 2xl:px-44 py-8 font-alanSans">
        <h1 className="text-white font-medium text-xl sm:text-3xl lg:text-4xl 2xl:text-5xl">Message me</h1>

        <h2 className="text-white/75 font-light text-sm sm:text-sm 2xl:text-md">Thanks for visiting our website, if you want to say something, please input some message into the form below!</h2>

        <div>
          <form ref={form} onSubmit={sendEmail}>
            <input 
            ref={inputNameBox}
            onChange={(e) => setInputName(e.target.value)}
            value={inputName}
            name="name" 
            className="px-3 py-1.5 w-full rounded-md outline-1 outline-gray-300 text-white placeholder:text-gray-400 focus:outline-2 sm:text-sm/6 focus:outline-red-400 my-8" 
            type="text" 
            placeholder="Full name" 
            required
             />
            <p className="absolute text-red-500 -mt-8">{errorMsgName}</p>
            <input name="time" type="datetime-local" className="hidden"/>
            <textarea ref={inputMessageBox} name="message" id="message" rows="5" className="block w-full rounded-md bg-transparent px-3 py-1.5 text-base text-white outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red-400 sm:text-sm/6" placeholder="Input some messages"></textarea>
            <p className="absolute text-red-500">{errorMsgTextarea}</p>
            <button disabled={buttonDisabled} type="submit" className={`relative z-10 overflow-hidden bg-transparent w-full rounded-md text-red-400 py-1.5 font-semibold text-lg outline-none mt-8 border border-red-400 hover:text-black after:absolute after:content-[''] after:w-full after:left-0 after:top-0 after:rounded-md after:h-full after:bg-red-400 after:duration-400 cursor-pointer after:-translate-x-[300%] hover:after:translate-x-0 after:-z-10 ${buttonDisabled ? 'animate-pulse' : ''}`}>{buttonDisabled ? 'Sending...' : 'Confirm'}</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection