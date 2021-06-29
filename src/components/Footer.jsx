import React from 'react';
import '../style/footer.css';
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div class="site-footer">
<div>
<hr className="shrink"/>  
</div>
      <div>
          <div class="col-md-8 col-sm-6 col-xs-12">
            <div class="hackathon_text"> 
                <Link to="/about_us"><p className="footer_text" >All About Us</p></Link>
                <p className="footer_text">2021 &copy;</p>
               <p className="footer_text" >Created during the <a href="https://www.fiverr.com/" target="_blank" rel="noreferrer"> Fiverr.</a> Hackathon</p> 
            </div>
          </div>     
      </div>
</div>
  );
};

export default Footer;