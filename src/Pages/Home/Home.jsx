import Accordion from "./Accordion";
import Banner from "./Banner";
import Brand from "./Brand";
import GrowBusiness from "./GrowBusiness";
import LicensedMembership from "./LicensedMembership";
import Service from "./Service";

import WhyChoose from "./WhyChoose";


const Home = () => {
    return (
        <div className="">
           <Banner></Banner>
           <Brand></Brand>
           <Service></Service>
           <WhyChoose></WhyChoose>
           <Accordion></Accordion>
           <GrowBusiness></GrowBusiness>
           <LicensedMembership></LicensedMembership>
           
           
        </div>
    );
};

export default Home;