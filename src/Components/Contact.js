function Contact() {
    return (
        <div>
            <h1>Let's Connect!</h1>
            <div>
                <p>
                    Hello! Thank you for browsing my portfolio. If you'd like to
                    get in touch, you can reach me by phone or email (listed
                    below), or drop a message directly through this site.
                </p>
                <a
                    href="https://www.linkedin.com/in/simone-schneeberg/"
                    target="_blank"
                    rel="noreferrer">
                    LinkedIn
                </a>
                <a
                    href="https://github.com/sschneeberg"
                    target="_blank"
                    rel="noreferrer">
                    Github
                </a>
            </div>
            <div className="form">
                <form>
                    <label for="fullname"> Name:</label>
                    <input
                        type="text"
                        name="fullname"
                        placeholder="First Last"
                        required></input>
                    <label for="email"></label>
                    <input
                        type="email"
                        name="email"
                        placeholder="example@email.com"
                        required></input>
                    <label for="msg"></label>
                    <textarea name="msg" required></textarea>
                    <input type="submit" value="SUBMIT"></input>
                </form>
            </div>
        </div>
    );
}

export default Contact;
