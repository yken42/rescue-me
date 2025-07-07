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
        className="relative bg-gradient-to-b from-[#030647] to-[#030a91] py-12 sm:py-16 lg:py-20 xl:py-24 px-4"
        dir="rtl"
    >
        {/* Background decoration */}
        <div className="absolute top-20 right-10 bg-[#4DDFFD] blur-3xl w-32 h-32 lg:w-40 lg:h-40 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-10 bg-[#9672FF] blur-3xl w-40 h-40 lg:w-52 lg:h-52 rounded-full opacity-20"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12 lg:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">צור קשר</h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
                    יש לך שאלה או זקוק לעזרה מיידית? מומחי הסייבר שלנו כאן בשבילך
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
                {/* Contact Info */}
                <div className="space-y-6 lg:space-y-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20">
                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-6 lg:mb-8">
                            פרטי התקשרות
                        </h3>

                        <div className="space-y-6 lg:space-y-8">
                            <div className="flex items-center space-x-4 space-x-reverse">
                                <div className="bg-[#4DDFFD] p-3 lg:p-4 rounded-xl flex-shrink-0">
                                    <IoMailOutline className="text-xl lg:text-2xl text-[#030647]" />
                                </div>
                                <div className="pr-2">
                                    <p className="text-white font-medium text-base lg:text-lg">אימייל</p>
                                    <p className="text-gray-300 text-sm lg:text-base">support@rescme.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 space-x-reverse">
                                <div className="bg-[#9672FF] p-3 lg:p-4 rounded-xl flex-shrink-0">
                                    <IoPhonePortraitOutline className="text-xl lg:text-2xl text-white" />
                                </div>
                                <div className="pr-2">
                                    <p className="text-white font-medium text-base lg:text-lg">טלפון</p>
                                    <p className="text-gray-300 text-sm lg:text-base">050-4348848</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 space-x-reverse">
                                <div className="bg-[#F3B9ED] p-3 lg:p-4 rounded-xl flex-shrink-0">
                                    <BiMessageRoundedDetail className="text-xl lg:text-2xl text-[#030647]" />
                                </div>
                                <div className="pr-2">
                                    <p className="text-white font-medium text-base lg:text-lg">זמני פעילות</p>
                                    <p className="text-gray-300 text-sm lg:text-base">א׳-ה׳: 8:00-20:00</p>
                                    <p className="text-gray-300 text-sm lg:text-base">ו׳: 8:00-14:00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-[#4DDFFD]/20 to-[#9672FF]/20 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20">
                        <h4 className="text-lg lg:text-xl font-bold text-white mb-2 lg:mb-3">
                            זקוק לעזרה מיידית?
                        </h4>
                        <p className="text-gray-300 mb-4 lg:mb-6 text-sm lg:text-base">
                            במקרה של חירום סייבר, אנחנו זמינים 24/7
                        </p>
                        <button className="bg-red-500 hover:bg-red-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-medium transition-colors w-full sm:w-auto text-sm lg:text-base">
                            קריאת חירום
                        </button>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 xl:p-10 border border-white/20">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-6 lg:mb-8 text-center lg:text-right">
                        שלח הודעה
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                            <div>
                                <label className="block text-white font-medium mb-2 text-sm lg:text-base">
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
                                        className="w-full bg-white/20 border border-white/30 rounded-xl px-10 py-3 lg:py-4 text-white placeholder-gray-300 focus:outline-none focus:border-[#4DDFFD] focus:bg-white/30 transition-all text-sm lg:text-base"
                                        placeholder="שם מלא"
                                        dir="rtl"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-white font-medium mb-2 text-sm lg:text-base">
                                    טלפון
                                </label>
                                <div className="relative">
                                    <IoPhonePortraitOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-white/20 border border-white/30 rounded-xl px-10 py-3 lg:py-4 text-white placeholder-gray-300 focus:outline-none focus:border-[#4DDFFD] focus:bg-white/30 transition-all text-sm lg:text-base"
                                        placeholder="מספר טלפון"
                                        dir="rtl"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-white font-medium mb-2 text-sm lg:text-base">
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
                                    className="w-full bg-white/20 border border-white/30 rounded-xl px-10 py-3 lg:py-4 text-white placeholder-gray-300 focus:outline-none focus:border-[#4DDFFD] focus:bg-white/30 transition-all text-sm lg:text-base"
                                    placeholder="כתובת אימייל"
                                    dir="rtl"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-3 lg:py-4 px-6 lg:px-8 rounded-xl font-bold text-base lg:text-lg transition-all ${
                                isSubmitting
                                    ? "bg-gray-500 cursor-not-allowed"
                                    : "bg-gradient-to-r from-[#4DDFFD] to-[#9672FF] hover:from-[#4DDFFD]/80 hover:to-[#9672FF]/80 text-[#030647] hover:scale-105 transform"
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
