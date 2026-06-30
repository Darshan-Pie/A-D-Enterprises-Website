import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Zap, Wrench, Award, CheckCircle, Settings, Power, Activity, Radio } from "lucide-react";
import { APP_LOGO, APP_TITLE } from "@/const";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  const products = [
    {
      title: "Power Control Centre (PCC)",
      description: "Manages, safeguards, and distributes power with air circuit breakers, MCCBs, MCBs, and metering sections. Handles up to 6300 AMPS.",
      image: "/pcc-panel.jpg",
      Icon: Zap
    },
    {
      title: "Motor Control Centre (MCC)",
      description: "Oversees and safeguards motors with DOL and Star-Delta starters. Available in fixed or drawout configurations with VFD and soft starters.",
      image: "/mcc-panel.jpg",
      Icon: Settings
    },
    {
      title: "APFC Panel",
      description: "Automatic Power Factor Correction system with breakers, APFC controller, contactors, reactors, and heavy-duty capacitors for reactive power compensation.",
      image: "/pcc-panel.jpg",
      Icon: Power
    },
    {
      title: "AMF Panel",
      description: "Auto Main Failure panels ensure uninterrupted power supply by seamlessly switching between main supply and generator during failures.",
      image: "/mcc-panel.jpg",
      Icon: Activity
    },
    {
      title: "Synchronizing Panel",
      description: "Automates synchronization between multiple power sources with load sharing capabilities and efficient load management for generators.",
      image: "/pcc-panel.jpg",
      Icon: Radio
    },
    {
      title: "LT Bus Duct (Up to 6300 AMP)",
      description: "High-quality CRCA sheet steel construction for efficient power transmission between transformers and switchboards with flexible joints.",
      image: "/mcc-panel.jpg",
      Icon: Zap
    }
  ];

  const certifications = [
    { title: "ISO 9001:2015", description: "Certified Company" },
    { title: "CPRI Tested", description: "70 KA S/C Withstand Test - IEC 61439" },
    { title: "ERDA Tested", description: "100 KA S/C Withstand Test - IS 8623" },
    { title: "IP 65 Protection", description: "Dust and Water Ingress Protection" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen bg-[#FAFAFA] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]">
            <img src="/hero-panel.jpg" alt="Manufacturing" className="w-full h-full object-cover" />
          </div>
          {/* Subtle decorative gradient orbs */}
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
          <div className="relative z-10 text-center px-4 max-w-4xl">
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-orange-500 mb-4">
              ISO 9001:2015 Certified Manufacturer
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Premium LV Switchboards &amp; LT Bus Duct <span className="text-orange-500">Manufacturer</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 mb-10">
              Tested for 70 KA &amp; 100 KA Short-Circuit Withstand
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/products">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200 transition-all duration-200">
                  Explore Products
                </Button>
              </a>
              <a href="/contact">
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-900 hover:bg-gray-100 transition-all duration-200">
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">About A.D.ENTERPRISES</h2>
                <p className="text-gray-700 text-lg mb-4">
                  A renowned industry leader in manufacturing low voltage switchboards and bus ducts since 2006. We specialize in designing and producing LV switchboards and bus ducts that precisely cater to specific customer requirements while adhering to the highest standards of engineering practices.
                </p>
                <p className="text-gray-700 text-lg mb-6">
                  Our team of expert technical professionals is dedicated to delivering exceptional design solutions tailored to each customer's unique application and project timeline.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="text-3xl font-bold text-blue-600">18+</div>
                    <div className="text-gray-600">Years of Experience</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="text-3xl font-bold text-blue-600">ISO</div>
                    <div className="text-gray-600">9001:2015 Certified</div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src="/manufacturing-facility.jpg" alt="Manufacturing Facility" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Products Section — Infinite Marquee */}
        <section id="products" className="py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Product Range</h2>
            <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive range of LV switchboards designed to handle various industrial and commercial applications
            </p>
          </div>
          {/* Marquee track */}
          <div
            className="group relative w-full"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div className="flex gap-6 marquee-track">
              {/* Render twice for seamless looping */}
              {[...products, ...products].map((product, index) => {
                const { Icon } = product;
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 w-72 group-hover:[animation-play-state:paused]"
                  >
                    <Card className="h-full hover:shadow-xl transition-shadow duration-300 cursor-pointer border border-gray-100">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-3">
                          <Icon className="text-blue-600" size={24} />
                        </div>
                        <CardTitle className="text-lg">{product.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                        <a href="/products" className="text-blue-600 hover:text-blue-700 font-semibold mt-4 inline-block text-sm">Learn More</a>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Infrastructure Section */}
        <section id="infrastructure" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">State-of-the-Art Infrastructure</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src="/manufacturing-facility.jpg" alt="Manufacturing Equipment" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Advanced Manufacturing Capabilities</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Wrench className="text-orange-500 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-900">CNC Turret Machines</h4>
                      <p className="text-gray-600">Precision manufacturing with advanced automation</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Wrench className="text-orange-500 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-900">Laser Machines</h4>
                      <p className="text-gray-600">High-precision cutting and engraving</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Wrench className="text-orange-500 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-900">Hydraulic Equipment</h4>
                      <p className="text-gray-600">Press breaks and shearing machines for panel fabrication</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Wrench className="text-orange-500 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-900">MIG Welding Machines</h4>
                      <p className="text-gray-600">Professional welding for structural integrity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testing & Certifications */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Testing & Certifications</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Rigorous Quality Assurance</h3>
                <p className="text-gray-700 text-lg mb-6">
                  Our LV switchboards undergo rigorous testing at renowned institutions including ERDA (Gujarat) and CPRI (Bhopal) to ensure reliability and adherence to international standards.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-900">100 KA Short-Circuit Test</h4>
                      <p className="text-gray-600">ERDA - IS 8623 Compliance</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-900">70 KA Short-Circuit Test</h4>
                      <p className="text-gray-600">CPRI - IEC 61439 Compliance</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-900">IP 65 Protection Rating</h4>
                      <p className="text-gray-600">Dust and water ingress protection</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-900">Temperature Rise Test</h4>
                      <p className="text-gray-600">IEC 61439 Compliance</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <Award className="mx-auto text-orange-500 mb-2" size={32} />
                      <CardTitle className="text-lg">{cert.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">{cert.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Pages CTA */}
        <section className="py-16 bg-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Explore Our Products</h3>
                <p className="text-gray-700 mb-6">Detailed information about all our LV switchboards and bus duct solutions</p>
                <a href="/products" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">View All Products</a>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Manufacturing Excellence</h3>
                <p className="text-gray-700 mb-6">Learn about our state-of-the-art infrastructure and testing facilities</p>
                <a href="/infrastructure" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">View Infrastructure</a>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Certifications</h3>
                <p className="text-gray-700 mb-6">Comprehensive testing results and international compliance certifications</p>
                <a href="/certifications" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">View Certifications</a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-[#FAFAFA] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-center text-gray-500 text-lg mb-12 max-w-xl mx-auto">
              Ready to discuss your requirements? Our team is here to help.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-2">
                    <Phone className="text-blue-600" size={22} />
                  </div>
                  <CardTitle className="text-gray-900">Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">+91 93770 38505</p>
                  <p className="text-gray-700">+91 78780 32927</p>
                </CardContent>
              </Card>
              <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-2">
                    <Mail className="text-blue-600" size={22} />
                  </div>
                  <CardTitle className="text-gray-900">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">akashet@yahoo.com</p>
                </CardContent>
              </Card>
              <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-2">
                    <MapPin className="text-blue-600" size={22} />
                  </div>
                  <CardTitle className="text-gray-900">Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">32, 33, 38, 39 Shyam Industrial Hub, Kujad Gatrad Road, Bakrol Bujrang, Daskroi, Ahmedabad - 382433, Gujarat, India</p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all duration-200">Go to Contact Page</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
