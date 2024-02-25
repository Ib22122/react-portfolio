

function Connect() {
    return (
        <div id="connect" className="connect gradient-bg">
            <div className="container">
                <div className="row">
                    <div className="imgcol col-12 col-lg-6 py-3">
                        <div className="image-container">
                            <img src="img4.png" alt="the img" className="img-fluid" />
                        </div>
                    </div>
                    <div className="formcol col-12 col-lg-6">

                        <form id="form">

                            <div className="row" >
                                <div className="col-12">
                                    <h3>Get In Touch</h3>
                                </div>
                                <div className="col-6">
                                    <input className="inputclass" type="text" name="fname" placeholder="First Name" id="First-name" />
                                </div>
                                <div className="col-6">
                                    <input className="inputclass" type="text" name="lname" placeholder="Last Name" id="last-name" />
                                </div>
                                <div className="col-6">
                                    <input className="inputclass" type="email" name="email" id="email" placeholder="Email address" />
                                </div>
                                <div className="col-6">
                                    <input className="inputclass" type="password" name="password" placeholder="Password" id="password" />
                                </div>
                                <div className="col-12">
                                    <textarea className=" inputclass textareaclass " placeholder="Message"></textarea>
                                </div>
                                <div className="col-12">
                                    <button type="button" className="submit my-3">send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Connect;


