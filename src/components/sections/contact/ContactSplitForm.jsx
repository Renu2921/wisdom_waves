import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactSplitForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000); // Reset success message after 5 seconds
  };

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Portrait View */}
          <div className="relative">
            {/* Dark stylized container */}
            <div className="bg-[#111827] rounded-3xl overflow-hidden pt-12 px-8 flex justify-center relative shadow-2xl h-[500px] border border-gray-800">
                <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Dr. Eleanor Vance" 
                    loading="lazy"
                    className="w-full max-w-sm object-cover object-top h-full rounded-t-3xl opacity-90 grayscale-[20%]"
                />
                
                {/* Floating Meta Box */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
                    <span className="inline-block bg-accent px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-[#111827] uppercase mb-2">
                        Chief Curator
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-white">Dr. Eleanor Vance</h3>
                </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-transparent flex flex-col justify-center">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">Send a Message</h2>
            <p className="text-gray-500 text-xs font-light mb-10">
                Our specialists typically respond within 4 academic hours.
            </p>

            {isSubmitted ? (
               <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center text-green-700">
                   <h3 className="text-lg font-bold mb-2">Inquiry Successfully Submitted</h3>
                   <p className="text-sm font-light">Thank you! Your academic advisor will be in touch shortly.</p>
               </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
                    <input 
                      {...register("fullName", { required: "Full name is required" })}
                      aria-invalid={errors.fullName ? "true" : "false"}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow bg-white text-sm"
                      placeholder="Jonathan Doe"
                    />
                    {errors.fullName && <span className="text-red-500 text-[10px] uppercase font-bold mt-1 block">{errors.fullName.message}</span>}
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                    <input 
                      type="email"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email formatting" }
                      })}
                      aria-invalid={errors.email ? "true" : "false"}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow bg-white text-sm"
                      placeholder="john@university.edu"
                    />
                    {errors.email && <span className="text-red-500 text-[10px] uppercase font-bold mt-1 block">{errors.email.message}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Phone Number</label>
                    <input 
                      type="tel"
                      {...register("phone", { required: "Phone number is required" })}
                      aria-invalid={errors.phone ? "true" : "false"}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow bg-white text-sm"
                      placeholder="+1 (555) 000-0000"
                    />
                    {errors.phone && <span className="text-red-500 text-[10px] uppercase font-bold mt-1 block">{errors.phone.message}</span>}
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Subject</label>
                    <div className="relative">
                        <select 
                        {...register("subject")}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow bg-white text-sm appearance-none"
                        >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Admissions">Admissions</option>
                        <option value="Partnerships">Partnerships</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Message</label>
                  <textarea 
                    {...register("message", { required: "Message cannot be empty" })}
                    aria-invalid={errors.message ? "true" : "false"}
                    rows="4"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow bg-white text-sm resize-none"
                    placeholder="How can we assist your research today?"
                  ></textarea>
                  {errors.message && <span className="text-red-500 text-[10px] uppercase font-bold mt-1 block">{errors.message.message}</span>}
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-gray-800 text-white font-bold py-4 rounded-xl transition-colors shadow-md text-xs uppercase tracking-widest flex items-center justify-center space-x-2"
                >
                  <span>Submit Inquiry</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSplitForm;
