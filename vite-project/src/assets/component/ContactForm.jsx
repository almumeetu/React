
const ContactForm = () => {
    return (
        <div>
            <form action="#">
                <input type="email" placeholder="Enter Your mail" />
                <button className="submitBtn" onClick={() => alert("Hello User! Your Mail Was Submited")}>Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;