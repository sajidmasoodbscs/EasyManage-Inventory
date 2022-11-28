import  React from "react";

const Footer =()=>{
    return(
        <div className="footer">
            <h3>© {process.env.REACT_APP_COPY_RIGHT_YEAR} {process.env.REACT_APP_COPY_RIGHT_NAME}. All Rights Reserved</h3>
        </div>
    );
}

export default Footer;