import React from "react";
import avatar from "../../../../images/MN.jpg";
import backgournd from "../../../../images/bg_1.jpg";
import aboutus from "../../../../images/abu.jpg";
import  "./style.scss";
import { BiFontSize } from "react-icons/bi";
interface Props {}

const AboutInfo = (props: Props) => {
  return (
    <section className="ftco-section contact-section bg-light" style={{ fontSize: "20px", fontWeight: 500}}>
      <div className="container">
          <h1 style={{paddingBottom:"20px"}}>About Us</h1>
          <div className="w-100" style={{ fontSize: "20px", textAlign: "justify", paddingBottom:"40px"}}>
              <p>Weebies emerged in January 2006, when long-time executive bankers Bill Carroll and Billy Carroll decided to start the process of organizing a bank with the image, 
              values and service level that would become incomparable to any other bank in the market. Weebies opened its first office in January 2007 in Pigeon Forge, Tennessee.
             Today, Weebies has 35 branches and one loan production office serving clients in Tennessee, Alabama and the Florida Panhandle.</p>
              <p>Recruiting the best people, delivering exceptional client service, strategic branching and a conservative and disciplined approach to lending have all given rise to SmartBank’s success. At SmartBank, we are committed to creating a better bank, and we will continue to work hard and capitalize on opportunities that build value for our shareholders, clients and associates.</p>
          </div>
      </div>

      <div className="ourmission">
          <div className="container">
            <h1 style={{color: "white", paddingTop:"80px"}}>Our Mission</h1>
            <div className="row d-flex mb-5 mt-5">
                <div className="col-md-6 d-flex">
                   <div className="info p-4">
                       <h2 style={{color: "#08298A", fontWeight:600, margin: "0 20px",paddingBottom: "20px"}}>Shareholders</h2>
                        <p style={{margin: "0 20px"}}>
                        We build exceptional value for our shareholders by managing growth and maximizing profitability, return on investment, stock value, dividends, and liquidity.
                        </p>
                   </div>
                </div>
                <div className="col-md-6 d-flex">
                    <div className="info p-4 ml-4">
                        <h2 style={{color: "#08298A", fontWeight:600, margin: "0 20px",paddingBottom: "20px"}}>Associates</h2>
                        <p style={{fontWeight: 500, margin: "0 20px"}}>
                        We build exceptional value for our associates by fostering a more fulfilling environment that respects individual needs, establishes high expectations and recognizes achievement.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row d-flex mb-5 mt-5">
                <div className="col-md-6 d-flex">
                   <div className="info p-4">
                       <h2 style={{color: "#08298A", fontWeight:600, margin: "0 20px",paddingBottom: "20px"}}>Clients</h2>
                        <p style={{ margin: "0 20px"}}>
                        We build exceptional value for our clients by demonstrating incomparable care for their needs and increasing their financial wealth.
                        </p>
                   </div>
                </div>
                <div className="col-md-6 d-flex">
                    <div className="info p-4 ml-4">
                        <h2 style={{color: "#08298A", fontWeight:600, margin: "0 20px",paddingBottom: "20px"}}>Communities</h2>
                        <p style={{margin: "0 20px"}}>
                        We build exceptional value in our communities by providing lasting solutions to their problems and protecting their greatest assets.
                        </p>
                    </div>
                </div>
            </div>
            <br />
            </div>
       </div>
       <div className="container mb-5">
            <h1 style={{color: "#08298A", paddingTop:"80px"}}>Our Vision</h1>
            <p>
            Our vision is to build exceptional value for our brand and for our shareholders, associates, clients and communities by delivering more than they think possible.
            </p>
       </div>
       <div className="vision pt-5 pb-5" style={{backgroundColor: "#f4f4f4"}}>
            <div className="container">
                <div className="row block-9">
                    <div className="col-md-7 order-md-last d-flex">
                        <div className="">
                            <img src="https://www.smartbank.com/wp-content/uploads/left-quote-1-300x300.png" style={{width:"60px", height:"60px", marginBottom:"20px"}} alt="" />
                            <p >Building a great culture is not something that happens overnight. It’s something that takes hard work and becomes ingrained in your character over time. It’s what you do day in and day out without even thinking about it.</p>
                            <p style={{fontStyle:"italic"}}>–Billy Carroll, SmartBank President & CEO</p>
                        </div>
                            
                    </div>
                    <div className="col-md-5 d-flex">
                        <img src="https://www.smartbank.com/wp-content/uploads/billy-candid-smartbank-way.jpg" style={{width:"100%", height:"100%"}} alt="" />
                    </div>
                </div>
            </div>
       </div>
      {/* <div className="col-md-3 d-flex">
            <div className="info bg-white p-4">
              <p>
                <span>Website:</span> <a href="#">Weebies.com</a>
              </p>
            </div>
          </div>
      </div> */}
      {/* <img src="https://www.Weebies.com/wp-content/uploads/422ee27561252aaa22fb61bd5e64e88d.jpg"
      style={{width:"100%", height:"100%", objectPosition: "0 180px"}}
      alt="" /> */}
    </section>
  );
};

export default AboutInfo;
