import { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Contact.css';

function Contact() {
    const [state, setState] = useState({ name: '', email: '', msg: '' });
    const [status, setStatus] = useState('');

    const submitForm = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setStatus({ status: 'success' });
                setState({ name: '', email: '', msg: '' });
            } else {
                setStatus({ status: 'error' });
            }
        };
        xhr.send(data);
    };

    return (
        <section>
            <h1>Let's Connect!</h1>
            <div className="contactMsg">
                <p>
                    Hello! Thank you for browsing my portfolio. If you'd like to get in touch, you can reach me by the
                    phone or email listed below, or drop a message directly through this site.
                </p>
                <div className="contactLinks">
                    <a className="contactLink">
                        <i className="fas fa-phone-alt"></i>
                        <p>917.828.5437</p>
                    </a>
                    <Link className="contactLink" to="/resume" target="_blank" rel="noreferrer">
                        <i className="far fa-file-alt fa-lg"></i>
                        <p>Resume</p>
                    </Link>
                    <a className="contactLink" href="mailto:simone.m.schneeberg@gmail.com">
                        <i className="fas fa-envelope"></i>
                        <p>simone.m.schneeberg@gmail.com</p>
                    </a>
                </div>
            </div>
            <div className="form">
                {status === 'success' ? <p style={{ color: 'green' }}>Message Sent!</p> : null}
                {status === 'error' ? (
                    <p style={{ color: 'red' }}>
                        An Error Occured, please try sending your message again or email me at
                        simone.m.schneeberg@gmail.com
                    </p>
                ) : null}
                <form
                    action="https://formspree.io/f/xleoablg"
                    method="POST"
                    onSubmit={(e) => {
                        submitForm(e);
                    }}>
                    <div id="info">
                        <div className="input-field col s6">
                            <input
                                id="name"
                                type="text"
                                name="name"
                                required
                                value={state.name}
                                onChange={(e) => setState({ name: e.target.value, email: state.email, msg: state.msg })}
                            />
                            <label htmlFor="name">Full Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input
                                id="email"
                                name="_replyto"
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
