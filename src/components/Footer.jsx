import { FiFacebook, FiInstagram, FiTwitter, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-white flex items-center gap-2">
              <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-sm italic">L</span>
              Lumina Tiles
            </h2>
            <p className="text-sm leading-relaxed opacity-70">
              আপনার লিভিং স্পেসকে লাক্সারি এবং আধুনিক রুপ দিতে আমরা দিচ্ছি প্রিমিয়াম টাইলস কালেকশন। 
            </p>
            <div className="flex gap-4">
              {[FiFacebook, FiInstagram, FiTwitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-lg">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Our Collection</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Latest Trends</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <FiMapPin className="text-blue-500" /> Savar, Dhaka, Bangladesh
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-blue-500" /> +880 1234 567 890
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-blue-500" /> hello@luminatiles.com
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Newsletter</h3>
            <p className="text-xs mb-4 opacity-70">অফার এবং নতুন কালেকশন সম্পর্কে জানতে সাবস্ক্রাইব করুন।</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter email"
                className="w-full bg-slate-800 border-none rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
              />
              <button className="absolute right-2 top-1.5 bg-blue-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-blue-700 transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-50">
          <p>© 2026 Lumina Tiles. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;