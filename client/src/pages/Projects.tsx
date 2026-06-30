import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Building2, Zap, Award } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Large Manufacturing Facility - Power Distribution",
      category: "Industrial",
      client: "Premium Manufacturing Ltd.",
      location: "Gujarat",
      year: 2023,
      description: "Complete power distribution system with 6300 AMP capacity LT Bus Duct for a large manufacturing facility.",
      details: "Designed and installed comprehensive LV switchboards with PCC panels, motor control centres, and high-capacity bus ducts for seamless power distribution across multiple production lines.",
      image: "/pcc-panel.jpg",
      specifications: [
        "6300 AMP LT Bus Duct",
        "Multiple PCC Panels",
        "Motor Control Centres",
        "Power Factor Correction",
        "Real-time Monitoring"
      ]
    },
    {
      id: 2,
      title: "Hospital Complex - Uninterrupted Power Supply",
      category: "Healthcare",
      client: "City Hospital Group",
      location: "Ahmedabad",
      year: 2023,
      description: "Critical power management system with AMF panels for uninterrupted power supply in a multi-wing hospital complex.",
      details: "Implemented automatic main failure panels with synchronizing relays to ensure continuous power supply to critical medical equipment and emergency systems.",
      image: "/mcc-panel.jpg",
      specifications: [
        "AMF Panels",
        "Synchronizing Relays",
        "Dual Generator Support",
        "Real-time Switching",
        "Emergency Backup System"
      ]
    },
    {
      id: 3,
      title: "Commercial Complex - APFC System",
      category: "Commercial",
      client: "Modern Business Park",
      location: "Pune",
      year: 2022,
      description: "Power factor correction system for a large commercial complex to optimize energy consumption and reduce penalties.",
      details: "Designed and installed APFC panels with advanced controllers to automatically regulate reactive power and maintain optimal power factor for the entire commercial complex.",
      image: "/hero-panel.jpg",
      specifications: [
        "APFC Panel",
        "Automatic Power Factor Correction",
        "Harmonic Filtering",
        "Energy Optimization",
        "Cost Reduction"
      ]
    },
    {
      id: 4,
      title: "Data Center - Redundant Power Systems",
      category: "IT Infrastructure",
      client: "Tech Solutions India",
      location: "Bangalore",
      year: 2022,
      description: "Redundant power distribution system with multiple PCC panels and synchronizing panels for critical data center operations.",
      details: "Engineered a highly reliable power management system with redundancy at multiple levels to ensure 99.99% uptime for critical data center operations.",
      image: "/manufacturing-facility.jpg",
      specifications: [
        "Multiple PCC Panels",
        "Synchronizing System",
        "Redundant Pathways",
        "Real-time Monitoring",
        "Automatic Failover"
      ]
    },
    {
      id: 5,
      title: "Textile Mill - Motor Control System",
      category: "Industrial",
      client: "National Textile Industries",
      location: "Tamil Nadu",
      year: 2021,
      description: "Advanced motor control centre with VFD support for efficient operation of multiple production lines.",
      details: "Installed comprehensive MCC system with variable frequency drives and soft starters for precise motor speed control and energy efficiency across all production machinery.",
      image: "/pcc-panel.jpg",
      specifications: [
        "Motor Control Centre",
        "VFD Support",
        "Soft Starters",
        "Energy Efficiency",
        "Production Optimization"
      ]
    },
    {
      id: 6,
      title: "Shopping Mall - Distributed Power Network",
      category: "Commercial",
      client: "Metro Shopping Mall",
      location: "Delhi",
      year: 2021,
      description: "Distributed power network with feeder pillars for efficient power supply to multiple retail zones.",
      details: "Designed outdoor feeder pillars and LT bus ducts to distribute power efficiently across different zones of the shopping mall with minimal power loss.",
      image: "/mcc-panel.jpg",
      specifications: [
        "Outdoor Feeder Pillars",
        "LT Bus Ducts",
        "Zone Distribution",
        "Weather Protection",
        "Easy Maintenance"
      ]
    },
    {
      id: 7,
      title: "Water Treatment Plant - Control Systems",
      category: "Utilities",
      client: "Municipal Water Board",
      location: "Rajasthan",
      year: 2020,
      description: "Specialized control systems for water treatment and pumping operations with APFC and motor control.",
      details: "Implemented integrated control systems combining APFC panels and motor control centres for efficient water treatment and distribution operations.",
      image: "/hero-panel.jpg",
      specifications: [
        "APFC Panel",
        "Motor Control Centre",
        "Pump Control System",
        "Automated Operation",
        "Reliability Focused"
      ]
    },
    {
      id: 8,
      title: "Office Complex - Smart Power Management",
      category: "Commercial",
      client: "Corporate Office Tower",
      location: "Mumbai",
      year: 2020,
      description: "Smart power management system with real-time monitoring and optimization for a modern office complex.",
      details: "Deployed advanced PCC panels with real-time monitoring capabilities for efficient power management across multiple floors and departments.",
      image: "/manufacturing-facility.jpg",
      specifications: [
        "Smart PCC Panels",
        "Real-time Monitoring",
        "Energy Analytics",
        "Automated Controls",
        "Cost Optimization"
      ]
    }
  ];

  const categories = ["All", "Industrial", "Healthcare", "Commercial", "IT Infrastructure", "Utilities"];

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
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-orange-500 mb-3">Portfolio</p>
            <h1 className="text-5xl font-bold mb-4 text-gray-900">Our Projects</h1>
            <p className="text-xl text-gray-600">Showcasing our successful implementations across diverse industries</p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Portfolio</h2>
              <p className="text-gray-700 text-lg mb-8 max-w-3xl">
                A.D.ENTERPRISES has successfully delivered comprehensive power management solutions to clients across various industries. Our portfolio demonstrates our expertise in designing, manufacturing, and implementing high-quality electrical panels and distribution systems.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="h-48 overflow-hidden bg-gray-200">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                        <p className="text-sm text-orange-600 font-semibold">{project.category}</p>
                      </div>
                      <span className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">{project.year}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-2">
                          <span className="font-semibold">Client:</span> {project.client}
                        </p>
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold">Location:</span> {project.location}
                        </p>
                      </div>
                      <p className="text-gray-700">{project.description}</p>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Specifications:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.specifications.slice(0, 3).map((spec, idx) => (
                            <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Track Record</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="text-5xl font-bold text-orange-500 mb-2">50+</div>
                  <CardTitle>Projects Completed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Successfully delivered across India</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="text-5xl font-bold text-orange-500 mb-2">15+</div>
                  <CardTitle>Industries Served</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">From manufacturing to healthcare</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="text-5xl font-bold text-orange-500 mb-2">99.9%</div>
                  <CardTitle>Client Satisfaction</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Consistent quality and reliability</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="text-5xl font-bold text-orange-500 mb-2">18+</div>
                  <CardTitle>Years Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Industry expertise since 2006</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 border-t border-gray-200 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Start Your Project?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Let us help you design and implement the perfect power management solution for your facility.</p>
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
