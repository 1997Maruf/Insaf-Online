import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import {
  FaUser,
  FaEnvelope,
  FaCalendar,
  FaEdit,
  FaTrash,
  FaSearch,
  FaFilter,
  FaUserPlus,
  FaEye,
} from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { toast } from "react-toastify";

const AllUsers = () => {
  const axiosPublic = useAxiosPublic();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedUsers, setSelectedUsers] = useState([]);

  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      // console.log(res.data);
      return res.data;
    },
  });

  // Filter users based on search and filters
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === "all" || user.role === selectedRole;
    const matchesStatus =
      selectedStatus === "all" || user.status === selectedStatus;

    return matchesSearch && matchesRole && matchesStatus;
  });

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedUsers(filteredUsers.map((user) => user._id || user.id));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleSelectUser = (userId) => {
    setSelectedUsers((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  const getInitials = (name) => {
    return (
      name
        ?.split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase() || "U"
    );
  };

  const getRoleColor = (role) => {
    switch (role?.toLowerCase()) {
      case "admin":
        return "bg-red-100 text-red-800";
      case "moderator":
        return "bg-yellow-100 text-yellow-800";
      case "user":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleDeleteUser = (_id) => {
    if (window.confirm("Are you sure? You won't be able to revert this!")) {
      fetch(` https://serverw1.vercel.app/users/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Your item has been deleted.", {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
            });
            refetch();
          }
        });
    }
  };

  const getStatusColor = (status) => {
    return status?.toLowerCase() === "active"
      ? "bg-green-100 text-green-800"
      : "bg-red-100 text-red-800";
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">All Users</h1>
          <p className="text-gray-600">
            Manage and view all registered users ({users.length} total)
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2">
            <FaUserPlus className="w-4 h-4" />
            Add New User
          </button>
          {selectedUsers.length > 0 && (
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2">
              <FaTrash className="w-4 h-4" />
              Delete Selected ({selectedUsers.length})
            </button>
          )}
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search users by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>
          <div className="flex gap-3">
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            >
              <option value="all">All Roles</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="moderator">Moderator</option>
            </select>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left">
                  <input
                    type="checkbox"
                    checked={
                      selectedUsers.length === filteredUsers.length &&
                      filteredUsers.length > 0
                    }
                    onChange={handleSelectAll}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>

                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center text-gray-500">
                      <FaUser className="w-12 h-12 mb-4 text-gray-300" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        No users found
                      </h3>
                      <p className="text-gray-500">
                        Try adjusting your search or filter criteria.
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user, index) => (
                  <tr
                    key={user._id || user.id || index}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedUsers.includes(user._id || user.id)}
                        onChange={() => handleSelectUser(user._id || user.id)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                          {user.image ? (
                            <img
                              src={user.image}
                              alt={user.name}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                          ) : (
                            getInitials(user.name)
                          )}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {user.name || "Unknown User"}
                          </div>
                          <div className="text-sm text-gray-500 flex items-center">
                            <FaEnvelope className="w-3 h-3 mr-1" />
                            {user.email || "No email"}
                          </div>
                          <div className="text-sm text-gray-500 flex items-center">
                            <MdPhone className="w-3 h-3 mr-1" />
                            {user.phone || "No number"}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRoleColor(
                          user.role
                        )}`}
                      >
                        {user.role || "User"}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors group">
                          <FaEye className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        </button>
                        <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors group">
                          <FaEdit className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        </button>
                        <button
                          onClick={() => handleDeleteUser(user._id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors group"
                        >
                          <FaTrash className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {filteredUsers.length > 0 && (
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to{" "}
                <span className="font-medium">{filteredUsers.length}</span> of{" "}
                <span className="font-medium">{users.length}</span> results
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                  Previous
                </button>
                <button className="px-3 py-1 text-sm bg-blue-600 text-white border border-blue-600 rounded-md hover:bg-blue-700 transition-colors">
                  1
                </button>
                <button className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
