import { useState } from "react";
import axios from "axios";

const BkashPaymentButton = () => {
  const [loading, setLoading] = useState(false);

  const handleBkashPayment = async () => {
    try {
      setLoading(true);

      // 🔹 Step 1: Create Payment
      const { data } = await axios.post(
        " https://serverw1.vercel.app/bkash/create-payment",
        {
          amount: 100, // Example: 100 Taka
        }
      );

      if (data.bkashURL) {
        // Redirect user to bKash Gateway
        window.location.href = data.bkashURL;
      } else {
        alert("Payment URL not found");
      }
    } catch (error) {
      console.error("Payment Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleBkashPayment}
      disabled={loading}
      className="bg-pink-600 hover:bg-pink-700 text-white font-bold px-6 py-3 rounded-lg shadow-lg"
    >
      {loading ? "Processing..." : "Pay with bKash"}
    </button>
  );
};

export default BkashPaymentButton;
