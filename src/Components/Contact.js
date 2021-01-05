import './css/Contact.css';

function Contact() {
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
                <form>
                    <div id="info">
                        <div className="input-field col s6">
                            <input id="fullname" type="text" required />
                            <label htmlFor="fullname">Full Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="email" type="email" required />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div id="msg">
                        <div className="input-field col s6">
                            <textarea id="msg" className="materialize-textarea" required></textarea>
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
