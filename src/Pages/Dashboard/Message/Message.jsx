import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import {
  MessageSquare,
  Mail,
  Phone,
  Search,
  Filter,
  MoreVertical,
  Reply,
  Archive,
  Trash2,
  Star,
  Eye,
  Calendar,
} from "lucide-react";
import { toast } from "react-toastify";

const Message = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: messages = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["messages"],
    queryFn: async () => {
      const res = await axiosPublic.get("/messages");
      // console.log(res.data);
      return res.data;
    },
  });

  const handleDeleteMessage = (_id) => {
    if (window.confirm("Are you sure? You won't be able to revert this!")) {
      fetch(` https://serverw1.vercel.app/messages/${_id}`, {
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
  // Format date function
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "Today";
    if (diffDays === 2) return "Yesterday";
    if (diffDays <= 7) return `${diffDays} days ago`;
    return date.toLocaleDateString();
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading messages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-teal-100 p-2 rounded-lg">
                <MessageSquare className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
                <p className="text-sm text-gray-500">
                  {messages.length} total messages
                </p>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  className="pl-10 bg-white pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {messages.length === 0 ? (
          // Empty State
          <div className="text-center py-16">
            <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No messages yet
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              When users send messages through your contact form, they will
              appear here.
            </p>
          </div>
        ) : (
          // Messages Grid
          <div className="grid gap-6">
            {messages.map((message, index) => (
              <div
                key={message._id || index}
                className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
              >
                <div className="p-6">
                  {/* Message Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      {/* Avatar */}
                      <div className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-semibold text-lg">
                        {message.name
                          ? message.name.charAt(0).toUpperCase()
                          : "U"}
                      </div>

                      {/* User Info */}
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-1">
                          <h3 className="font-semibold text-gray-900 text-lg">
                            {message.formData.name || "Anonymous User"}
                          </h3>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                            New
                          </span>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                          {message.formData.email && (
                            <div className="flex items-center space-x-1">
                              <Mail className="w-4 h-4" />
                              <span>{message.formData.email}</span>
                            </div>
                          )}
                          {message.formData?.phone && (
                            <div className="flex items-center space-x-1">
                              <Phone className="w-4 h-4" />
                              <span>{message.formData.phone}</span>
                            </div>
                          )}
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>
                              {formatDate(message.createdAt || new Date())}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Actions Menu */}
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                        <Star className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Message Subject */}
                  {message.formData?.subject && (
                    <div className="mb-3">
                      <h4 className="font-medium text-gray-900">
                        Subject: {message.formData.subject}
                      </h4>
                    </div>
                  )}

                  {/* Message Content */}
                  <div className="mb-6">
                    <p className="text-gray-700 leading-relaxed">
                      {message.formData?.message ||
                        message.message ||
                        "No message content available."}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-3">
                      <button className="flex items-center space-x-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                        <Reply className="w-4 h-4" />
                        <span>Reply</span>
                      </button>
                      <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        <Archive className="w-4 h-4" />
                        <span>Archive</span>
                      </button>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteMessage(message._id)}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
