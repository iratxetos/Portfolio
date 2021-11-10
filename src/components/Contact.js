import { useForm, ValidationError } from '@formspree/react';

function Contact(props) {
    const [state, handleSubmit] = useForm("mzbylwwb");
    if (state.succeeded) {
        return <p>Thanks for reaching 🤗, I'll reply you as soon as I can.</p>;
    }
    return (
        <>
            <h3 className='page__contact' data-aos="zoom-in" data-aos-delay="1000">Contact me</h3>
            <h6 className='page__contact--subtitle' data-aos="zoom-in" data-aos-delay="1000">You can do it in English 💂‍♂️ - Italian 🤏 - Spanish 💃 - Basque 🏋️‍♀️</h6>
            <form className="page__form" onSubmit={handleSubmit} data-aos="fade-right" data-aos-delay="1100">
                <fieldset className="page__form--contactInfo" data-aos="fade-left" data-aos-delay="1200">
                    <label className="page__form--label" htmlFor="fullName">
                        Full Name
                    </label>
                    <input
                        className="page__form--input"
                        id="full name"
                        type="text"
                        name="fullName"
                    />
                    <ValidationError
                        prefix="Full Name"
                        field="fullName"
                        errors={state.errors}
                    />
                    <label className="page__form--label" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        className="page__form--input"
                        id="email"
                        type="email"
                        name="email"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </fieldset>
                <textarea
                    className="page__form--textArea"
                    id="message"
                    name="message"
                    placeholder="You can type here..."
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button className="page__form--submit" type="submit" disabled={state.submitting}>
                    Submit
                    <span></span><span></span><span></span><span></span>

                </button>
            </form>
        </>
    )
}

export default Contact;