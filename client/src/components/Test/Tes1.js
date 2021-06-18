import React, { Component } from "react";
import "./Test1.css"
import AOS from 'aos';
import 'aos/dist/aos.css'
export default class Test extends Component {
    componentDidMount() {
        // or simply just AOS.init();
        AOS.init({
          // initialise with other settings
          duration : 2000
        });
      }
  render() {

    return (
        <>

        <section id="main" className="d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" data-aos-delay="200">
                        <h1>
                            There is no force equal to a
                            <i style={{ color: "#961e47" }}>woman</i> determined to rise
                        </h1>
                        <h2>
                            Who said being a homemaker can stop you from earning? Start your
                            career on Pragati by signing in today!
                        </h2>
                        <div className="d-lg-flex">
                            <a href="login.html" className="btn-get-started scrollto">Login</a>
                            <a href="signup.html" style={{color: "#961e47", fontWeight: "bolder"}}
                                className="venobox btn-signup">
                                Signup</a>
                        </div>
                    </div>
                    {/* <div className="swing col-lg-6 order-1 order-lg-2 main-img">
                        <img src="images/home.jpg" className="img-fluid" alt="" />
                    </div> */}
                </div>
            </div>
        </section>
        

        <section>
            <div className="container">
                <div className="col-12">
                    <h3 className="pragati-title">About</h3>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 text-center">
                        <img src="" className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 col-md-6">
                        <h4 className="mt-3 text-center">Why Pragati?</h4>

                        <div className="col-md-12 text-justify mt-5 content">
                            <p>
                                While there are several means and opportunities for the urban
                                women to earn, the rural kind is often left to struggle.
                                Pragati is a one-of-a-kind platform to enable women to apply
                                their self-learnt skills to use and become the backbone of the
                                family. We empower rural women by creating earning
                                opportunities which contribute to economic growth.
                                Additionally, we aim to help in bringing back India’s
                                deteriorating traditional artifact culture. Women will be able
                                to independently build their business without the need of
                                family support or investment, thus paving the path for a
                                confident and respectable future ahead.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 pb-4">
                    <div className="col-12 col-md-6 order-2 order-lg-1">
                        <h4 className="mt-3 text-center">What does Pragati do?</h4>

                        <div className="col-md-12 text-justify mt-5 content">
                            <p>
                                Pragati enables rural housewives to make money by selling
                                their own authentic self-made products from home and providing
                                reliable services on the go. The process being completely
                                virtual can help women can gain recognition and become
                                self-sufficient from the comfort of their home without
                                sacrificing responsibilities towards their children and
                                family. “Ask Desk” section encourages women to ask and solve
                                their genuine queries, connect to experts in the field of
                                their interest and get advice on worldly matters hence helping
                                them be future-ready.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 order-1 order-lg-2">
                        <img src="" className="img-fluid" alt="" height="30px" />
                    </div>
                </div>
            </div>
        </section>

        </>
    );
  }
}