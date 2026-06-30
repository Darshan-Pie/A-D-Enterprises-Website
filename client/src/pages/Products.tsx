import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Products() {
  const products = [
    {
      id: 1,
      title: "Power Control Centre (PCC)",
      description: "The Power Control Centre (PCC) serves as a crucial system for managing, safeguarding, and distributing power within various settings.",
      fullDescription: "The PCC panel encompasses a range of essential components such as air circuit breakers, moulded case circuit breakers, miniature circuit breakers, copper or aluminum busbars, and metering sections. These metering sections consist of load monitors, multi-function meters, protection relays, and other relevant devices. Our company offers PCC panels designed to handle substantial current loads of up to 6300 AMPS, ensuring efficient and reliable power management for diverse applications.",
      image: "/pcc-panel.jpg",
      features: [
        "Air Circuit Breakers",
        "Moulded Case Circuit Breakers",
        "Miniature Circuit Breakers",
        "Copper or Aluminum Busbars",
        "Load Monitors",
        "Multi-Function Meters",
        "Protection Relays",
        "Up to 6300 AMPS capacity"
      ]
    },
    {
      id: 2,
      title: "Motor Control Centre (MCC)",
      description: "The Motor Control Centre (MCC) serves as a crucial system for overseeing and safeguarding motors.",
      fullDescription: "We offer MCC panels with either fixed or drawout configurations. Within the MCC panel, you will find Direct-On-Line (DOL) and Star-Delta starters equipped with breakers, contactors, thermal or microprocessor-based overload relays, motor protection circuit breakers (MPCB), single phasing preventers (SPP), timers, and more. Moreover, we provide intelligent MCC panels that incorporate variable frequency drives (VFD) and soft starters. These advanced starters enable efficient control of motor speed while ensuring top-tier safety measures for motor protection.",
      image: "/mcc-panel.jpg",
      features: [
        "Fixed or Drawout Configurations",
        "DOL Starters",
        "Star-Delta Starters",
        "Breakers and Contactors",
        "Overload Relays",
        "Motor Protection Circuit Breakers",
        "Single Phasing Preventers",
        "VFD and Soft Starters"
      ]
    },
    {
      id: 3,
      title: "APFC Panel",
      description: "An Automatic Power Factor Correction (APFC) panel is an electrical system component that enhances the power factor by regulating and managing reactive power.",
      fullDescription: "It consists of several essential elements, including breakers for circuit protection, an APFC controller for automated control, heavy-duty contactors to handle high current, a thyristor switching module for precise switching, copper or aluminium detuned reactors to control harmonic distortion, and heavy-duty capacitors (either MPP or APP type) to provide reactive power compensation.",
      image: "/pcc-panel.jpg",
      features: [
        "APFC Controller",
        "Heavy-Duty Contactors",
        "Thyristor Switching Module",
        "Detuned Reactors",
        "Heavy-Duty Capacitors",
        "Circuit Protection Breakers",
        "Harmonic Distortion Control",
        "Automated Power Factor Correction"
      ]
    },
    {
      id: 4,
      title: "AMF Panel",
      description: "Auto Main Failure (AMF) panels play a critical role in ensuring uninterrupted power supply by swiftly responding to power failures.",
      fullDescription: "These panels are strategically placed between generators and the main power source. When a main supply failure occurs, the AMF panel swiftly disconnects the connection between the main power supply and the load. Simultaneously, it triggers the activation of a generator, which then takes over the responsibility of supplying power to the load. This seamless transition ensures that the load continues to receive power without any disruption or inconvenience. This automated process guarantees a smooth transition and minimizes downtime, ensuring that the flow of electricity remains uninterrupted for critical applications.",
      image: "/mcc-panel.jpg",
      features: [
        "Automatic Failure Detection",
        "Generator Activation",
        "Seamless Power Transition",
        "Minimal Downtime",
        "Critical Application Support",
        "Uninterrupted Power Supply",
        "Automatic Load Switching",
        "Emergency Power Management"
      ]
    },
    {
      id: 5,
      title: "Synchronizing Panel",
      description: "The Synchronization panel incorporates a specialized synchronizing relay that simplifies and automates the synchronization process between multiple power sources.",
      fullDescription: "In addition to this primary functionality, these innovative relays also provide load sharing capabilities, ensuring an equitable distribution of the electrical load among the generators. Moreover, the relays facilitate efficient load management, enabling precise control over the activation and deactivation of generators based on the specific load requirements at any given time. With the integration of these advanced relays, our panel offers a comprehensive solution that delivers seamless synchronization, optimal load sharing, and effective power generation management for a wide range of applications.",
      image: "/hero-panel.jpg",
      features: [
        "Synchronizing Relay",
        "Multiple Power Source Support",
        "Load Sharing Capabilities",
        "Equitable Load Distribution",
        "Efficient Load Management",
        "Generator Control",
        "Automated Synchronization",
        "Power Generation Management"
      ]
    },
    {
      id: 6,
      title: "LT Bus Duct (Up to 6300 AMP)",
      description: "The LT Bus Duct is constructed using high-quality CRCA sheet steel and incorporates suitable angles and channels for enhanced structural integrity.",
      fullDescription: "It is designed to accommodate triple poles with or without a neutral connection. The enclosure provides protection against dust and water ingress. The bus duct can be configured with either a conventional or interleaved phase design, allowing for efficient power distribution. To facilitate easy identification of phases, the bus bars are covered with PVC heat shrinkable sleeves in a color code scheme. Flexible joints are installed at the ends of the equipment, allowing for flexibility and ease of installation. For outdoor installations, a canopy is provided to protect the bus duct from environmental elements. The supporter system utilizes an epoxy-based finger design, ensuring reliable and secure mounting of the bus bars. This bus duct is specifically designed for power transmission between transformers and switchboards, as well as between different switchboards.",
      image: "/pcc-panel.jpg",
      features: [
        "High-Quality CRCA Sheet Steel",
        "Triple Pole Configuration",
        "Dust and Water Protection",
        "Conventional or Interleaved Design",
        "PVC Heat Shrinkable Sleeves",
        "Flexible Joints",
        "Outdoor Canopy Option",
        "Epoxy-Based Finger Design",
        "Up to 6300 AMP capacity"
      ]
    },
    {
      id: 7,
      title: "Outdoor Feeder Pillar",
      description: "A feeder pillar is a highly efficient electrical enclosure that serves as a reliable source for low voltage electrical distribution purposes.",
      fullDescription: "It has been meticulously designed to withstand the harsh conditions of outdoor environments, exhibiting both compactness and durability. With its robust construction, it offers optimal protection against dust, solids, water, and rain, ensuring the safe functioning of electrical services. The feeder pillar's compact design allows for easy installation and maintenance, making it an ideal choice for various applications requiring low voltage electrical distribution. Its ability to resist environmental factors, such as dust and water, enables uninterrupted power supply and protects the electrical components housed within. Overall, the feeder pillar is a reliable and essential component in outdoor and rugged settings, providing efficient electrical services while safeguarding against potential hazards.",
      image: "/mcc-panel.jpg",
      features: [
        "Outdoor Environment Resistant",
        "Compact Design",
        "Robust Construction",
        "Dust Protection",
        "Water and Rain Protection",
        "Easy Installation",
        "Easy Maintenance",
        "Reliable Performance",
        "Environmental Protection"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-[#FAFAFA] border-b border-gray-200 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-6 text-gray-500 hover:text-gray-900 transition text-sm">
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-orange-500 mb-3">What We Make</p>
            <h1 className="text-5xl font-bold mb-4 text-gray-900">Our Product Range</h1>
            <p className="text-xl text-gray-600">Comprehensive LV Switchboards and LT Bus Duct Solutions</p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {products.map((product, index) => (
                <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className={`grid md:grid-cols-2 gap-8 items-center p-8`}>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h2>
                      <p className="text-gray-700 text-lg mb-6">{product.fullDescription}</p>
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features:</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {product.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <img src={product.image} alt={product.title} className="w-full h-96 object-cover rounded-lg" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 border-t border-gray-200 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Interested in Our Products?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Contact our team to discuss your specific requirements and get a customized solution for your needs.</p>
            <Link href="/contact">
              <Button size="lg" className="bg-white border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition">
                Request a Quote
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
