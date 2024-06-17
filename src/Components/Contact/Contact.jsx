
import './Contact.css'

export default function Contact(){
    return(
        <div className="contact_container" id='Contact'>
            <div className="contactForm">
                <h1 id='form1'>Contact Form</h1>
                <form action="" id='form1'>
                    <label htmlFor="uname">Name : </label>
                    <input type="text" id='uname' placeholder='Enter your name' /> <br />
                    <label htmlFor="email">Email : </label>
                    <input type="email" id='email' placeholder='Enter your email'/> <br />
                    <label htmlFor="message">Message</label><br />
                    <textarea name="message" id="message" rows={2} cols={15}></textarea> <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}