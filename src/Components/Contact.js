import { useState } from 'react';
import './css/Contact.css';

function Contact() {
    const [state, setState] = useState({ name: '', email: '', msg: '' });

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('send mesasge');
        setState({ name: '', email: '', msg: '' });
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
