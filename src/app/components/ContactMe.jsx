"use client";
import React, { useState } from "react";
import {
  IoMailOutline,
  IoPhonePortraitOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { BiMessageRoundedDetail } from "react-icons/bi";

export const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert("ההודעה נשלחה בהצלחה! נחזור אליך בהקדם האפשרי");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

return (
    <section
        className="relative bg-gradient-to-b from-[#030647] to-[#030a91] py-16 px-4"
        dir="rtl"
    >
        {/* Background decoration */}
        <div className="absolute top-20 right-10 bg-[#4DDFFD] blur-3xl w-32 h-32 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-10 bg-[#9672FF] blur-3xl w-40 h-40 rounded-full opacity-20"></div>

        <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">צור קשר</h2>
                <p className="text-xl text-gray-300">
                    יש לך שאלה או זקוק לעזרה מיידית? מומחי הסייבר שלנו כאן בשבילך
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <h3 className="text-2xl font-bold text-white mb-6">
                            פרטי התקשרות
                        </h3>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-4 space-x-reverse">
                                <div className="bg-[#4DDFFD] p-3 rounded-xl">
                                    <IoMailOutline className="text-xl text-[#030647]" />
                                </div>
                                <div className="pr-2">
                                    <p className="text-white font-medium">אימייל</p>
                                    <p className="text-gray-300">support@rescme.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 space-x-reverse">
                                <div className="bg-[#9672FF] p-3 rounded-xl">
                                    <IoPhonePortraitOutline className="text-xl text-white" />
                                </div>
                                <div className="pr-2">
                                    <p className="text-white font-medium">טלפון</p>
                                    <p className="text-gray-300">050-4348848</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 space-x-reverse">
                                <div className="bg-[#F3B9ED] p-3 rounded-xl">
                                    <BiMessageRoundedDetail className="text-xl text-[#030647]" />
                                </div>
                                <div className="pr-2">
                                    <p className="text-white font-medium">זמני פעילות</p>
                                    <p className="text-gray-300">א׳-ה׳: 8:00-20:00</p>
                                    <p className="text-gray-300">ו׳: 8:00-14:00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-[#4DDFFD]/20 to-[#9672FF]/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <h4 className="text-lg font-bold text-white mb-2">
                            זקוק לעזרה מיידית?
                        </h4>
                        <p className="text-gray-300 mb-4">
                            במקרה של חירום סייבר, אנחנו זמינים 24/7
                        </p>
                        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-medium transition-colors">
                            קריאת חירום
                        </button>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-white font-medium mb-2">
                                    שם מלא
                                </label>
                                <div className="relative">
                                    <IoPersonOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/20 border border-white/30 rounded-xl px-10 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#4DDFFD] focus:bg-white/30 transition-all"
                                        placeholder="הכנס שם מלא"
                                        dir="rtl"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-white font-medium mb-2">
                                    טלפון
                                </label>
                                <div className="relative">
                                    <IoPhonePortraitOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-white/20 border border-white/30 rounded-xl px-10 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#4DDFFD] focus:bg-white/30 transition-all"
                                        placeholder="מספר טלפון"
                                        dir="rtl"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-white font-medium mb-2">
                                אימייל
                            </label>
                            <div className="relative" dir="">
                                <IoMailOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/20 border border-white/30 rounded-xl px-10 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#4DDFFD] focus:bg-white/30 transition-all"
                                    placeholder="כתובת אימייל"
                                    dir="rtl"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all ${
                                isSubmitting
                                    ? "bg-gray-500 cursor-not-allowed"
                                    : "bg-gradient-to-r from-[#4DDFFD] to-[#9672FF] hover:from-[#4DDFFD]/80 hover:to-[#9672FF]/80 text-[#030647]"
                            }`}>
                            {isSubmitting ? "שולח..." : "שלח הודעה"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
);
};
