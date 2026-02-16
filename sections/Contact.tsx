
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-2 bg-dark p-12 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Our Sales Team</h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Discuss your specific packaging requirements with our experts and receive a custom quote within 24 hours.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-primary mr-4 mt-1">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold">Headquarters</p>
                      <p className="text-sm text-gray-400">Industrial Zone 4, Plot 112, Modern Hub, 30214</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-primary mr-4 mt-1">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold">Email Us</p>
                      <p className="text-sm text-gray-400">exports@fusionflex.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-8 mt-8 border-t border-gray-700">
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-4">Social Presence</p>
                <div className="flex space-x-4">
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                    <span className="text-xs font-bold">IN</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                    <span className="text-xs font-bold">FB</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 p-12">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Company Name</label>
                    <input 
                      type="text" 
                      placeholder="Global Agri Ltd."
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Work Email</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Requirement Details</label>
                  <textarea 
                    rows={4}
                    placeholder="Briefly describe your bag specifications (size, quantity, printing, etc.)"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-orange-600 transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
                >
                  Submit Inquiry
                </button>
                <p className="text-center text-xs text-gray-400">
                  By submitting, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
