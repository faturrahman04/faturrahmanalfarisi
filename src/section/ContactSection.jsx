import { useRef } from "react"
import emailjs from "@emailjs/browser"

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jbqme79', 'template_klrm1df', form.current, {
        publicKey: 'OOvkZ3N4lZeN7pfTr',
      })
        .then(
          () => {
            console.log('Pesan terkirim!')
          },
          (err) => {
            console.log(err)
          },
        );
  }

  return (
    <section id="contact" className="bg-gray-900">
      <div className="px-3 lg:px-20 2xl:px-24 py-6">
        <h1 className="text-white font-medium font-poppins text-xl sm:text-2xl lg:text-5xl">Contact Me</h1>

        <div>
          <form ref={form} onSubmit={sendEmail}>
            <input className="px-3 py-1.5 w-full rounded-md outline-1 outline-gray-300 text-white placeholder:text-gray-400 focus:outline-2 sm:text-sm/6 focus:outline-orange-500 my-8" type="text" placeholder="faturrahmanalfarisi@gmail.com" />
            <textarea  name="about" id="about" rows="5" className="block w-full rounded-md bg-transparent px-3 py-1.5 text-base text-white outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-500 sm:text-sm/6"></textarea>
            <button type="submit" className="relative z-10 overflow-hidden bg-transparent w-full rounded-md text-orange-400 py-1.5 font-semibold font-poppins outline-none mt-8 border border-orange-500 hover:text-black after:absolute after:content-[''] after:w-full after:left-0 after:top-0 after:rounded-md after:h-full after:bg-orange-400 after:duration-400 cursor-pointer after:-translate-x-[300%] hover:after:translate-x-0 after:-z-10">Confirm</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection