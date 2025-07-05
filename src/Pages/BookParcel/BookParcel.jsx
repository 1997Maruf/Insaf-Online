import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import img4 from "../../assets/img/intro_bg.webp";

const BookParcel = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const status = "pending";
  const handleBook = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const type = form.type.value;
    const weight = form.weight.value;
    const receiver = form.receiver.value;
    const phoneNumber = form.phoneNumber.value;
    const deliveryAddress = form.deliveryAddress.value;
    const deliveryDate = form.deliveryDate.value;
    const Price = form.Price.value;
    const longitude = form.longitude.value;
    const latitude = form.latitude.value;

    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);

    try {
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_API_KEY}`,
        formData
      );

      const imageUrl = data.data.display_url;
      const bookingDate = new Date().toISOString();

      const booking = {
        status,
        bookingDate,
        name,
        email,
        phone,
        type,
        weight,
        receiver,
        phoneNumber,
        deliveryAddress,
        deliveryDate,
        Price,
        longitude,
        latitude,

        image: imageUrl,
      };

      fetch("http://localhost:5000/booking", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(booking),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              title: "Success!",
              text: "Booking Added Successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
          }
        });
    } catch (error) {
      console.error("Image upload or booking failed:", error);
    }
  };
  // https://parcel-pro-server-livid.vercel.app/booking
  return (
    <div
      className="bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${img4})` }}
    >
      <div className="container mx-auto max-w-[1195px] p-6 md:p-24">
        <h2 className="text-3xl font-extrabold mb-8">Book a Parcel</h2>
        <form onSubmit={handleBook}>
          {/* form supplier row */}
          <div className="flex flex-col md:flex-row md:space-x-4 mb-8">
            <div className="form-control md:w-1/2 mb-4 md:mb-0">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  defaultValue={user?.email}
                  name="email"
                  placeholder="Email"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4 mb-8">
            <div className="form-control md:w-1/2 mb-4 md:mb-0">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="phone"
                  required
                  placeholder="Phone Number"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Parcel Type</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="type"
                  required
                  placeholder="Parcel Type"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4 mb-8">
            <div className="form-control md:w-1/2 mb-4 md:mb-0">
              <label className="label">
                <span className="label-text">Parcel Weight</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="weight"
                  required
                  placeholder="Parcel Weight"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Receiver’s Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="receiver"
                  required
                  placeholder="Receiver's Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="mb-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="file"
                accept="image/*"
                required
                name="image"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4 mb-8">
            <div className="form-control md:w-1/2 mb-4 md:mb-0">
              <label className="label">
                <span className="label-text">Receiver’s Phone Number</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="phoneNumber"
                  required
                  placeholder="Receiver's Phone Number"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Parcel Delivery Address</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="deliveryAddress"
                  required
                  placeholder="Parcel Delivery Address"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4 mb-8">
            <div className="form-control md:w-1/2 mb-4 md:mb-0">
              <label className="label">
                <span className="label-text">Requested Delivery Date</span>
              </label>
              <label className="input-group">
                <input
                  type="date"
                  name="deliveryDate"
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Delivery Address Latitude</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="latitude"
                  required
                  placeholder="Delivery Address Latitude"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4 mb-8">
            <div className="form-control md:w-1/2 mb-4 md:mb-0">
              <label className="label">
                <span className="label-text">Delivery Address Longitude</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="longitude"
                  required
                  placeholder="Delivery Address Longitude"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  id="Grand-Total"
                  name="Price"
                  required
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Book"
            className="w-full h-10 rounded-[5px] cursor-pointer bg-[#00A486] hover:bg-[#1a6759] mt-4 text-white font-semibold"
          />
        </form>
      </div>
    </div>
  );
};

export default BookParcel;
