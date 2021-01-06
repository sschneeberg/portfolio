import { useState } from 'react';
import nodemailer from 'nodemailer';
import './css/Contact.css';

function Contact() {
    const [state, setState] = useState({ name: '', email: '', msg: '' });
    const [error, setError] = useState(false);
    const [sent, setSent] = useState(false);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('send mesasge');
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                setError(true);
                setSent(false);
            } else {
                console.log(info);
                setError(false);
                setSent(true);
            }
        });
        setState({ name: '', email: '', msg: '' });
    };

    //nodemailer:
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }
    });

    const mailOptions = {
        from: state.email,
        to: process.env.USER,
        subject: 'Portfolio Site Message',
        text: `${state.msg} from ${state.name}`
    };

    return (
        <section>
            <h1>Let's Connect!</h1>
            <div>
                <p>
                    Hello! Thank you for browsing my portfolio. If you'd like to get in touch, you can reach me by phone
                    or email (listed below), or drop a message directly through this site.
                </p>
            </div>
            <div className="form">
                {error ? (
                    <p style={{ color: 'red' }}>
                        An error occured, please reload and try sending your message again or email me at
                        simone.m.schneeberg@gmail.com. Thank you!
                    </p>
                ) : null}
                {sent ? <p style={{ color: 'green' }}>Message Sent!</p> : null}
                <form onSubmit={(e) => sendMessage(e)}>
                    <div id="info">
                        <div className="input-field col s6">
                            <input
                                id="name"
                                type="text"
                                name="text"
                                required
                                value={state.name}
                                onChange={(e) => setState({ name: e.target.value, email: state.email, msg: state.msg })}
                            />
                            <label htmlFor="name">Full Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={state.email}
                                onChange={(e) => setState({ email: e.target.value, name: state.name, msg: state.msg })}
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div id="msg">
                        <div className="input-field col s6">
                            <textarea
                                id="msg"
                                name="msg"
                                className="materialize-textarea"
                                required
                                onChange={(e) =>
                                    setState({ msg: e.target.value, email: state.email, name: state.name })
                                }
                                value={state.msg}
                            />
                            <label htmlFor="msg">Message</label>
                        </div>
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;
