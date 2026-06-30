import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Zap } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Infrastructure() {
  const equipment = [
    {
      title: "CNC Turret Machines",
      description: "Precision manufacturing with advanced automation for complex panel fabrication"
    },
    {
      title: "Laser Machines",
      description: "High-precision cutting and engraving for accurate component manufacturing"
    },
    {
      title: "Press Breaks",
      description: "Hydraulic press breaks for precise bending and forming of metal sheets"
    },
    {
      title: "Hydraulic Shearing Machines",
      description: "Heavy-duty shearing equipment for cutting and trimming metal components"
    },
    {
      title: "MIG Welding Machines",
      description: "Professional welding equipment ensuring structural integrity and durability"
    },
    {
      title: "Hydraulic Bus Bar Bending Machine",
      description: "Specialized equipment for precise bending of copper and aluminum busbars"
    },
    {
      title: "3-Ton EOT Crane",
      description: "Efficient material handling and dispatch of finished panels"
    }
  ];

  const testingDetails = [
    {
      title: "100 KA Short-Circuit Withstand Test",
      standard: "IS 8623 (ERDA)",
      description: "Switchboards successfully passed rigorous testing at ERDA (Electrical Research and Development Association) in Gujarat"
    },
    {
      title: "70 KA Short-Circuit Withstand Test",
      standard: "IEC 61439 (CPRI)",
      description: "Panels underwent demanding assessment at CPRI (Central Power Research Institute) in Bhopal"
    },
    {
      title: "IP 65 Protection Rating",
      standard: "IEC 61439",
      description: "Certified protection against dust and water ingress, ensuring safe operation in various environments"
    },
    {
      title: "Temperature Rise Test",
      standard: "IEC 61439",
      description: "Comprehensive evaluation of panel performance under different operating conditions"
    }
  ];

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
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-orange-500 mb-3">Our Facility</p>
            <h1 className="text-5xl font-bold mb-4 text-gray-900">State-of-the-Art Infrastructure</h1>
            <p className="text-xl text-gray-600">Advanced Manufacturing Capabilities and Testing Facilities</p>
          </div>
        </section>

        {/* Manufacturing Facility Image */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/manufacturing-facility.jpg" alt="Manufacturing Facility" className="w-full h-auto object-cover" />
            </div>
          </div>
        </section>

        {/* Equipment Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Manufacturing Equipment</h2>
            <p className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
              Our LV switchboards are meticulously manufactured utilizing state-of-the-art machinery. These advanced tools and equipment allow us to produce high-quality switchboards with precision and reliability, ensuring optimal performance and safety for our customers.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {equipment.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <Zap className="text-orange-500 flex-shrink-0 mt-1" size={24} />
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testing Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Rigorous Testing & Quality Assurance</h2>
            <p className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
              Our LV switchboards undergo rigorous testing at renowned institutions to ensure their reliability and adherence to international standards. These comprehensive tests demonstrate the robustness and quality of our products, providing customers with the assurance of superior performance and safety.
            </p>
            <div className="space-y-6">
              {testingDetails.map((test, index) => (
                <Card key={index} className="border-l-4 border-l-orange-500">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl mb-2">{test.title}</CardTitle>
                        <p className="text-orange-600 font-semibold">{test.standard}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-lg">{test.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Facility Details */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Manufacturing Facility</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Location & Capacity</h3>
                <p className="text-gray-700 text-lg mb-4">
                  Our state-of-the-art manufacturing facility is strategically located in Bakrol Bujrang, Daskroi area of Ahmedabad, Gujarat, India. The facility is equipped with cutting-edge technology and infrastructure to support our production needs.
                </p>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                    <p className="text-gray-700">32, 33, 38, 39 Shyam Industrial Hub, Kujad Gatrad Road, Bakrol Bujrang, Daskroi, Ahmedabad - 382433, Gujarat, India</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Expertise</h4>
                    <p className="text-gray-700">Team of expert technical professionals with decades of combined experience in electrical panel manufacturing and design</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src="/manufacturing-facility.jpg" alt="Manufacturing Facility" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 border-t border-gray-200 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Experience Our Quality</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Visit our facility or request detailed information about our manufacturing capabilities and quality assurance processes.</p>
            <Link href="/contact">
              <Button size="lg" className="bg-white border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition">
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
