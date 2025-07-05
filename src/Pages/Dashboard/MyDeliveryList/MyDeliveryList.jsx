import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

const MyDeliveryList = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [locetion, setLocetion] = useState();
  console.log("location", locetion);
  function open(parcel) {
  setIsOpen(true);
  setLocetion({
    longitude: parcel.longitude,
    latitude: parcel.latitude
  });
}
  function close() {
    setIsOpen(false);
  }

  const { user } = useContext(AuthContext);
  const { email } = user;
  const [deliveryMan, setDeliveryMan] = useState({});
  const { _id } = deliveryMan || {};
  console.log("mydeliverymanID", deliveryMan?._id);

  // https://parcel-pro-server-livid.vercel.app
  const url = ` https://parcel-pro-server-livid.vercel.app/users/${email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDeliveryMan(data));
  }, [url, user?.email]);

  const [parcels, setParcels] = useState([]);
  console.log("parcel", parcels);

  useEffect(() => {
    if (_id) {
      fetch(`https://parcel-pro-server-livid.vercel.app/bookingById/${_id}`)
        .then((res) => res.json())
        .then((data) => setParcels(data));
    }
  }, [_id]);

  // Cancel
  const st = "D";
  const handleSubmi = (_id) => {
    console.log("Hello");
    const updateStatus = { st };
    fetch(`https://parcel-pro-server-livid.vercel.app/booking/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateStatus),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Craft Update Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

const handledelivary = (_id) => {
  const updateSta = { status: 'delivary' };

  fetch(`https://parcel-pro-server-livid.vercel.app/booking-delivary/${_id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(updateSta)
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.modifiedCount > 0) {
        Swal.fire({
          title: 'Success!',
          text: 'Status Updated Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        });

       
        const remaining = parcels.filter(parcel => parcel._id !== _id);
        setParcels(remaining);
      }
    });
};

  return (
    <div className="overflow-x-auto">
      <h2>delivery list</h2>
      <table className="table">
        {/* <thead>
      <tr>
        <th></th>
        <th>User’s Name</th>
        <th>Receivers Name</th>
        <th>User’s Phone</th>
        <th>Delivery Date</th>
        <th>Delivery Date</th>
        <th>Approximate Date</th>
        <th>Recievers phone</th>
        <th>Receivers Address </th>
        <th>View Location</th>
      </tr>
    </thead> */}
        <tbody>
          {parcels?.map((parcel, index) => (
            <tr key={parcel._id} className="bg-base-200">
              <th>{index + 1}</th>
              <td>{parcel?.name}</td>
              <td>{parcel?.receiver}</td>
              <td>{parcel?.deliveryDate}</td>
              <td>{parcel?.approximateDate}</td>
              <td>{parcel?.phoneNumber}</td>
              <td>{parcel?.deliveryAddress}</td>
              <td>
                <Button
                  onClick={() => open(parcel)}
                  className="rounded-md  btn-outline btn-secondary py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
                >
                  See Location
                </Button>
              </td>
              <td>
                <button onClick={() => handleSubmi(parcel._id)} disabled={parcel.status === 'delivary'} 
     
      className={`px-4 py-2 rounded font-semibold transition-all duration-300
        ${parcel.status === 'delivary' 
          ? 'bg-gray-400 cursor-not-allowed text-white' 
          : 'bg-green-600 hover:bg-green-700 text-white'}
      `}>{parcel.status === 'delivary' ? 'Disable' : 'Delete'}</button> </td>
      <td>
 <button
      onClick={() => handledelivary(parcel._id)}
      disabled={parcel.status === 'delivary'}
      className={`px-4 py-2 rounded font-semibold transition-all duration-300
        ${parcel.status === 'delivary' 
          ? 'bg-gray-400 cursor-not-allowed text-white' 
          : 'bg-green-600 hover:bg-green-700 text-white'}
      `}
    >
      {parcel.status === 'Delivered' ? 'Delivered' : ' Delivered'}
    </button>         
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Dialog
        open={isOpen}
        as="div"
        className="relative  z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 bg-black z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white"
              >
                Payment successful
              </DialogTitle>
              <MapContainer
                center={[51.505, -0.09]}
                zoom={13}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                  {/* <Popp>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popp> */}
                </Marker>
              </MapContainer>

              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  Got it, thanks!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default MyDeliveryList;
