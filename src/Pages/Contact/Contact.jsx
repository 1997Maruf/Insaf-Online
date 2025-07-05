import img1 from "../../assets/img/breadcump.svg"
import { MdOutlineLocationOn } from "react-icons/md";
import { SlEarphonesAlt } from "react-icons/sl";
import { CgMail } from "react-icons/cg";
import Swal from "sweetalert2";

const Contact = () => {
  const handleMassage =  e => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const phone = form.phone.value;
  const subject = form.subject.value;
  const message = form.message.value;
 
    const massageDate = new Date();

    const massages = {
      massageDate,
      name,
      email,
      phone,
      subject,
      message
    };
    console.log(massages)

    fetch("https://parcel-pro-server-livid.vercel.app/massages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(massages),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Massage Sand  Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  
}
  return (
   <div>
  <div
    className="flex justify-center h-[150px] items-center bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${img1})` }}
  >
    <h1 className="text-[32px] text-center text-[#171717] font-semibold leading-[40px]">
      Get in Touch with Us
    </h1>
  </div>

  <div className="container mx-auto max-w-[1196px] px-4 md:px-0">
    <div className="flex flex-col lg:flex-row gap-20 my-[40px]">
      <div className="">
        <div className="flex flex-col md:flex-row gap-[30px] w-full max-w-[498px]">
          <div className="w-full md:w-[223px] h-[207px] px-[16px] pb-[16px] pt-[24px] border-[1px] border-[#e5e5e5] rounded-[10px]">
            <div className="flex justify-center">
              <MdOutlineLocationOn className="w-[30px] h-[30px] text-[#FF9111]" />
            </div>
            <h2 className="text-[24px] text-[#171717] text-center font-semibold leading-[32px] mt-[20px]">
              Address
            </h2>
            <p className="text-[16px] text-[#737373] leading-[24px] text-center mt-[16px]">
              17/2, Dhanmondi 3/A, Dhaka-1209
            </p>
          </div>
          <div className="w-full md:w-[223px] h-[207px] px-[16px] pb-[16px] pt-[24px] border-[1px] border-[#e5e5e5] rounded-[10px]">
            <div className="flex justify-center">
              <SlEarphonesAlt className="w-[30px] h-[30px] text-[#36CE94]" />
            </div>
            <h2 className="text-[24px] text-[#171717] text-center font-semibold leading-[32px] mt-[20px]">
              Call Us
            </h2>
            <p className="text-[16px] text-[#737373] leading-[24px] text-center mt-[16px]">
              09678-045045
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-[30px] w-full max-w-[498px] mt-8">
          <div className="w-full md:w-[223px] h-[207px] px-[16px] pb-[16px] pt-[24px] border-[1px] border-[#e5e5e5] rounded-[10px]">
            <div className="flex justify-center">
              <CgMail className="w-[30px] h-[30px] text-[#FF9111]" />
            </div>
            <h2 className="text-[24px] text-[#171717] text-center font-semibold leading-[32px] mt-[20px]">
              Mail
            </h2>
            <p className="text-[16px] text-[#737373] leading-[24px] text-center mt-[16px]">
              info@steadfast.com.bd
            </p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[563px] mt-10 lg:mt-0">
        <form action="" onSubmit={handleMassage} className="flex flex-col">
          <input
            className="w-full h-12 pl-3 bg-[#FAFAFA] border-[1px] rounded-[5px] border-[#737373]"
            type="text"
            name="name"
            required
            placeholder="Full Name"
          />
          <input
            className="w-full h-12 pl-3 bg-[#FAFAFA] mt-4 border-[1px] rounded-[5px] border-[#737373]"
            type="number"
            name="phone"
            required
            placeholder="Phone Number"
          />
          <input
            className="w-full h-12 pl-3 bg-[#FAFAFA] mt-4 border-[1px] rounded-[5px] border-[#737373]"
            type="email"
            name="email"
            required
            placeholder="Your Email"
          />
          <input
            className="w-full h-12 pl-3 bg-[#FAFAFA] mt-4 border-[1px] rounded-[5px] border-[#737373]"
            type="text"
            name="subject"
            required
            placeholder="Subject"
          />
          <textarea
            className="w-full h-20 pl-3 bg-[#FAFAFA] mt-4 border-[1px] rounded-[5px] border-[#737373]"
            placeholder="Message"
            required
            name="message"
          ></textarea>
          <input
            type="submit"
            value="Submit"
            className="w-full h-10 rounded-[5px] bg-[#00A486] hover:bg-[#1a6759] mt-4 text-white font-semibold cursor-pointer"
          />
        </form>
      </div>
    </div>
  </div>
</div>
    
  );
};

export default Contact;
