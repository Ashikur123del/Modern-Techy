"use client";
import { motion } from "framer-motion";
import { FiShield, FiTruck, FiStar, FiClock } from "react-icons/fi";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FiShield className="text-3xl" />,
      title: "Premium Quality",
      desc: "আমরা সরাসরি ইতালি এবং স্পেন থেকে সেরা টাইলস ইমপোর্ট করি।",
      color: "bg-blue-500",
    },
    {
      icon: <FiStar className="text-3xl" />,
      title: "Exclusive Design",
      desc: "আমাদের কাছে পাবেন সব লেটেস্ট এবং ইউনিক ডিজাইন যা বাজারে বিরল।",
      color: "bg-purple-500",
    },
    {
      icon: <FiTruck className="text-3xl" />,
      title: "Fast Delivery",
      desc: "সারা বাংলাদেশে দ্রুত এবং নিরাপদ ডেলিভারি নিশ্চিত করি আমরা।",
      color: "bg-orange-500",
    },
    {
      icon: <FiClock className="text-3xl" />,
      title: "24/7 Support",
      desc: "আপনার ঘর সাজানোর যেকোনো পরামর্শের জন্য আমাদের এক্সপার্টরা তৈরি।",
      color: "bg-teal-500",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-4"
          >
            Why Choose <span className="text-blue-600">Lumina Tiles</span>?
          </motion.h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            আমরা শুধু টাইলস বিক্রি করি না, আপনার স্বপ্নের ঘরকে বাস্তবে রূপ দেওয়ার জন্য সেরা সলিউশন প্রদান করি।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all"
            >
              <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;