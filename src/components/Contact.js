import "../css/Contact.css"
function Contact(){
    const Outer={
        width:"42rem",
        height:"25rem",
        border: "1px solid #333",
        // backgroundColor:"#333",
    };
    return(
        <div className='Container'>
            <center>
                <div style={Outer}>
                    <form>
                        <div className='Input_name_'>
                            <input type="text" placeholder='Enter Your Name' className='Input_Name' required/>
                        </div>
                        <br></br><br></br>
                        <div className='Input_mail_phno_div'>
                            <div className='Input_email_div'>
                                <input type="text" placeholder='Enter Your E-mail' className='Input_Email' required/>
                            </div>
                            <div className='Input_phno_div'>
                                <input type="text" placeholder='Enter Your Phno' className='Input_Phno' required/>
                            </div>
                        </div>
                        <br></br><br></br>
                        <div className='Textarea_div'>
                            <textarea placeholder='Enter Your Message' className='TextArea' required/>
                        </div>
                        <br></br><br></br>
                        <div>
                            <button type='submit' className='Submitbtn'>Submit</button>
                        </div>
                    </form>
                </div>
            </center>
        </div>
    );
}
export default Contact;
