import { useState } from "react";
import { supabase } from "../supabaseClient"; 

const ContactForm = ({ darkMode }) => {
const [formData, setFormData] = useState({ name: "", email: "", message: "" });  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Attempting to send:", formData);
    setLoading(true);
    setStatus("");

    try {
      const { data, error } = await supabase
  .from("messages") // All lowercase
  .insert([formData])
  .select();

      console.log("Supabase Response:", { data, error });

      if (error) {
        setStatus("Error: " + error.message);
        console.error("Database Error Detail:", error);
      } else {
        setStatus("Message sent successfully! 🚀");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      setStatus("Critical Error: " + err.message);
    }
    
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6 mt-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="NAME"
          className={`bg-transparent border-b p-3 outline-none transition-all font-syne text-sm ${
            darkMode ? "border-white/20 focus:border-white" : "border-black/20 focus:border-black"
          }`}
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
        <input
          type="email"
          placeholder="EMAIL"
          className={`bg-transparent border-b p-3 outline-none transition-all font-syne text-sm ${
            darkMode ? "border-white/20 focus:border-white" : "border-black/20 focus:border-black"
          }`}
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
        />
      </div>
      <textarea
        placeholder="YOUR MESSAGE"
        className={`w-full bg-transparent border-b p-3 outline-none transition-all font-syne text-sm h-32 resize-none ${
          darkMode ? "border-white/20 focus:border-white" : "border-black/20 focus:border-black"
        }`}
        // 4. Changed formData.Message to formData.message
        vvalue={formData.message} // Lowercase and singular
  onChange={(e) => setFormData({...formData, message: e.target.value})}
  required
      />
      <button 
        type="submit" 
        disabled={loading}
        className={`w-full py-4 font-syne font-bold uppercase tracking-widest border transition-all ${
          darkMode 
            ? "border-white hover:bg-white hover:text-black" 
            : "border-black hover:bg-black hover:text-white"
        } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {loading ? "SENDING..." : "SEND MESSAGE"}
      </button>
      {status && <p className={`text-[10px] uppercase tracking-widest mt-4 font-bold ${status.includes('Error') ? 'text-red-500' : ''}`}>{status}</p>}
    </form>
  );
};

export default ContactForm;