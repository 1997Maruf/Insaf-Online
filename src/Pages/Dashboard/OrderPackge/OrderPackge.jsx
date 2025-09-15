import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Eye, Edit, Trash2 } from "lucide-react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { toast } from "react-toastify";
import { FaCheckCircle, FaClock, FaTimesCircle } from "react-icons/fa";

const OrderPackage = () => {
  const axiosPublic = useAxiosPublic();
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const { data: orders = [], refetch } = useQuery({
    queryKey: ["Orders"],
    queryFn: async () => {
      const res = await axiosPublic.get("/orders");
      return res.data;
    },
  });

  // Mock data fallback
  const mockOrders = [
    {
      _id: "68a8ad85334bedaf3cb2f17e",
      name: "Maruf Meze",
      email: "mdmarufmeze@gamil.com",
      phone: "01312622268",
      packageId: "68a89aaceae4973124e44335",
      packageName: "Package-2",
      price: 600,
      speed: "10 Mbps",
      status: "Active",
      orderDate: "2024-01-15",
    },
    {
      _id: "68a8ad85334bedaf3cb2f18f",
      name: "Rahul Ahmed",
      email: "rahul@gmail.com",
      phone: "01712345678",
      packageId: "68a89aaceae4973124e44336",
      packageName: "Package-1",
      price: 400,
      speed: "5 Mbps",
      status: "Pending",
      orderDate: "2024-01-14",
    },
    {
      _id: "68a8ad85334bedaf3cb2f19g",
      name: "Fatima Khan",
      email: "fatima@gmail.com",
      phone: "01812345679",
      packageId: "68a89aaceae4973124e44337",
      packageName: "Package-3",
      price: 800,
      speed: "20 Mbps",
      status: "Cancelled",
      orderDate: "2024-01-13",
    },
  ];

  const displayOrders = orders.length > 0 ? orders : mockOrders;

  // 👉 Safe Filtering Logic
  const filteredOrders = displayOrders.filter((order) => {
    const name = order?.name?.toLowerCase() || "";
    const email = order?.email?.toLowerCase() || "";
    const status = order?.status?.toLowerCase() || "";

    const matchesSearch =
      name.includes(searchText.toLowerCase()) ||
      email.includes(searchText.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || status === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  // Status color
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-800 border-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case "active":
        return <FaCheckCircle className="text-green-500 inline-block mr-2" />;
      case "pending":
        return <FaClock className="text-yellow-500 inline-block mr-2" />;
      case "cancelled":
        return <FaTimesCircle className="text-red-500 inline-block mr-2" />;
      default:
        return null;
    }
  };

  // Delete Order
  const handleDeleteOrder = (_id) => {
    if (window.confirm("Are you sure? You won't be able to revert this!")) {
      fetch(` https://serverw1.vercel.app/order/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Your item has been deleted.");
            refetch();
          }
        });
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Order Packages
        </h2>
        <p className="text-gray-600">
          Manage and view all package orders ({filteredOrders.length} total)
        </p>
      </div>

      {/* Search + Filter */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search orders by name or email..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full bg-white pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-3">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            + Add New Order
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <div className="grid grid-cols-12 gap-4 items-center text-sm font-medium text-gray-700 uppercase">
            <div className="col-span-3">Customer</div>
            <div className="col-span-2">Package</div>
            <div className="col-span-2">Price & Speed</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-2">Actions</div>
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-200">
          {filteredOrders.map((pkg) => (
            <div key={pkg._id} className="px-6 py-4 hover:bg-gray-50">
              <div className="grid grid-cols-12 gap-4 items-center">
                {/* Customer */}
                <div className="col-span-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-medium text-sm">
                        {pkg.name?.charAt(0) || "U"}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {pkg.name}
                      </div>
                      <div className="text-sm text-gray-500">{pkg.email}</div>
                    </div>
                  </div>
                </div>

                {/* Package */}
                <div className="col-span-2">{pkg.packageName}</div>

                {/* Price & Speed */}
                <div className="col-span-2">
                  ৳{pkg.price} <br />
                  <span className="text-xs text-gray-500">{pkg.speed}</span>
                </div>

                {/* Status */}
                <div className="col-span-2">
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-sm font-medium border ${getStatusColor(
                      pkg.status
                    )}`}
                  >
                    {getStatusIcon(pkg.status)}
                    <span className="ml-1">{pkg.status || "Unknown"}</span>
                  </span>
                </div>

                {/* Actions */}
                <div className="col-span-2 flex gap-2">
                  <button className="p-1 text-gray-400 hover:text-blue-600">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-green-600">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteOrder(pkg._id)}
                    className="p-1 text-gray-400 hover:text-red-600"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {filteredOrders.length === 0 && (
            <div className="px-6 py-8 text-center text-gray-500">
              No orders found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderPackage;
