

const SendEmail = () => {
    return (
        <div className="sendemail">
            <div className="container" >
            <div className="row">
                <div className="col-12 col-lg-5">
                    <h3>See My Projects At Once & Leave Here Your Email Address</h3>
                </div>
                <div className="col-12 col-lg-7">
                    <div className="custom-email">
                        <input type="email" className="custom-email-input" placeholder="Enter your email address" />
                        <button className="custom-email-botton" type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )

}
export default SendEmail;