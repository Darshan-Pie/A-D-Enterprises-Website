import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Toaster } from "@/components/ui/sonner";
import { Link } from "wouter";
import { ArrowLeft, Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error || "Failed to submit form. Please try again.");
      } else {
        toast.success("Thank you! Your inquiry has been submitted successfully. You will receive a confirmation email shortly.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: ""
        });
      }
    } catch (error) {
      toast.error("Failed to submit form. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-[#FAFAFA] border-b border-gray-200 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-6 text-gray-500 hover:text-gray-900 transition text-sm">
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-orange-500 mb-3">Reach Out</p>
            <h1 className="text-5xl font-bold mb-4 text-gray-900">Contact Us</h1>
            <p className="text-xl text-gray-600">Get in touch with our team for inquiries and support</p>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <Phone className="text-orange-500 mb-2" size={32} />
                  <CardTitle>Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-semibold mb-2">+91 93770 38505</p>
                  <p className="text-gray-700">+91 78780 32927</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Mail className="text-orange-500 mb-2" size={32} />
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-semibold">akashet@yahoo.com</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <MapPin className="text-orange-500 mb-2" size={32} />
                  <CardTitle>Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">32, 33, 38, 39 Shyam Industrial Hub, Kujad Gatrad Road, Bakrol Bujrang, Daskroi, Ahmedabad - 382433, Gujarat, India</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Clock className="text-orange-500 mb-2" size={32} />
                  <CardTitle>Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">Wednesday - Monday: 9:00 AM - 6:00 PM</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    >
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="quote">Request a Quote</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 resize-none"
                      placeholder="Please describe your inquiry in detail..."
                    ></textarea>
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-gray-900 hover:bg-gray-700 text-white transition">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Company Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Us?</h2>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>18+ Years Experience</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">Leading manufacturer of LV switchboards and LT bus ducts since 2006 with proven track record of excellence.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>ISO 9001:2015 Certified</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">Our commitment to quality management ensures consistent delivery of superior products and services.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Expert Team</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">Dedicated team of technical professionals ready to provide guidance and support for your project requirements.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>State-of-the-Art Facility</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">Advanced manufacturing capabilities with cutting-edge technology ensuring precision and reliability.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Location</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Ahmedabad, Gujarat</h3>
                  <p className="text-gray-700 text-lg mb-6">
                    Our manufacturing facility is strategically located in the industrial hub of Ahmedabad, providing easy access to transportation and logistics networks.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                      <p className="text-gray-700">32, 33, 38, 39 Shyam Industrial Hub<br />Kujad Gatrad Road<br />Bakrol Bujrang, Daskroi<br />Ahmedabad - 382433<br />Gujarat, India</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Contact</h4>
                      <p className="text-gray-700">Phone: +91 93770 38505, +91 78780 32927<br />Email: akashet@yahoo.com</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                  <p className="text-gray-600">Map integration available</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
