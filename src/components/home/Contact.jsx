"use client";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full text-[11px] font-bold tracking-widest text-[#3B82F6] bg-[#3B82F6]/10 mb-4 uppercase">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-secondary opacity-60 text-[15px] max-w-xl mx-auto leading-relaxed font-light">
            Have questions? We're here to help you 24/7
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Side: Contact Information */}
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
              <p className="text-secondary opacity-50 text-[15px] font-light max-w-sm">
                Reach out to our team and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {/* Call Us */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:text-white transition-all duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Call Us</p>
                  <p className="text-secondary opacity-60 text-sm md:text-base">+44 7709 322226</p>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:text-white transition-all duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Email Us</p>
                  <p className="text-secondary opacity-60 text-sm md:text-base">support@hostmeerkat.co.uk</p>
                </div>
              </div>

              {/* Office */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:text-white transition-all duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Office</p>
                  <p className="text-secondary opacity-60 text-sm md:text-base">London, United Kingdom</p>
                </div>
              </div>
            </div>

            {/* Live Chat Badge */}
            <div className="mt-4 p-6 rounded-2xl bg-[#3B82F6]/5 border border-[#3B82F6]/20 flex items-center gap-5">
              <div className="w-10 h-10 rounded-full bg-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" fillOpacity="0.2" className="stroke-current">
                   <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="none" strokeWidth="2"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Live Chat Available</p>
                <p className="text-secondary opacity-50 text-xs mt-1">Our support team is online and ready to help you right now.</p>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-[#1a1f3a]/20 border border-white/5 p-8 sm:p-10 rounded-[32px] backdrop-blur-sm shadow-2xl">
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-white text-sm font-semibold ml-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Enter your full name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#3B82F6]/50 transition-all font-light"
                  />
                </div>
                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-white text-sm font-semibold ml-1">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Enter your email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#3B82F6]/50 transition-all font-light"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-white text-sm font-semibold ml-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="How can we help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#3B82F6]/50 transition-all font-light"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-white text-sm font-semibold ml-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  placeholder="Write your message here..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#3B82F6]/50 transition-all font-light"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="mt-2 w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20 transition-all hover:scale-[1.02] hover:opacity-90 active:scale-95"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/><polyline points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
