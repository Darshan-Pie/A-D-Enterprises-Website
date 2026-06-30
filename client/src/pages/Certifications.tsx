import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Award, CheckCircle } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Certifications() {
  const certifications = [
    {
      title: "ISO 9001:2015",
      category: "Quality Management System",
      description: "A.D.ENTERPRISES is an ISO 9001:2015 certified company, demonstrating our commitment to quality management and continuous improvement in all aspects of our operations.",
      details: [
        "Comprehensive quality management system",
        "Continuous process improvement",
        "Customer satisfaction focus",
        "Risk-based thinking approach"
      ]
    },
    {
      title: "CPRI Testing - IEC 61439",
      category: "70 KA Short-Circuit Withstand Test",
      description: "Our LV switchboards have been tested and certified by CPRI (Central Power Research Institute) in Bhopal for 70 KA short-circuit withstand capability, ensuring compliance with international standards.",
      details: [
        "70 KA short-circuit withstand test",
        "IEC 61439 compliance",
        "IP 65 degree protection",
        "Temperature rise evaluation"
      ]
    },
    {
      title: "ERDA Testing - IS 8623",
      category: "100 KA Short-Circuit Withstand Test",
      description: "Our panels have successfully passed rigorous testing at ERDA (Electrical Research and Development Association) in Gujarat for 100 KA short-circuit withstand capability, exceeding international standards.",
      details: [
        "100 KA short-circuit withstand test",
        "IS 8623 compliance",
        "Rigorous assessment standards",
        "Superior performance verification"
      ]
    }
  ];

  const testResults = [
    {
      test: "Short-Circuit Withstand Test (ERDA)",
      standard: "IS 8623",
      rating: "100 KA",
      status: "PASSED",
      description: "Switchboards successfully withstood 100 KA short-circuit test, demonstrating exceptional durability and reliability"
    },
    {
      test: "Short-Circuit Withstand Test (CPRI)",
      standard: "IEC 61439",
      rating: "70 KA",
      status: "PASSED",
      description: "Panels underwent 70 KA short-circuit withstand test in compliance with international standards"
    },
    {
      test: "IP 65 Protection Rating",
      standard: "IEC 61439",
      rating: "IP 65",
      status: "CERTIFIED",
      description: "Certified protection against dust and water ingress, ensuring safe operation in various environments"
    },
    {
      test: "Temperature Rise Test",
      standard: "IEC 61439",
      rating: "COMPLIANT",
      status: "PASSED",
      description: "Comprehensive evaluation of panel performance under different operating conditions and temperature variations"
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
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-orange-500 mb-3">Quality &amp; Compliance</p>
            <h1 className="text-5xl font-bold mb-4 text-gray-900">Certifications &amp; Testing</h1>
            <p className="text-xl text-gray-600">Quality Assurance and International Compliance</p>
          </div>
        </section>

        {/* Certifications Header Image */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/manufacturing-facility.jpg" alt="Testing and Certifications" className="w-full h-auto object-cover" />
            </div>
          </div>
        </section>

        {/* Main Certifications */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Certifications</h2>
            <div className="space-y-8">
              {certifications.map((cert, index) => (
                <Card key={index} className="border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Award className="text-orange-500 flex-shrink-0 mt-1" size={32} />
                      <div>
                        <CardTitle className="text-3xl mb-2">{cert.title}</CardTitle>
                        <p className="text-orange-600 font-semibold text-lg">{cert.category}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-lg mb-6">{cert.description}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {cert.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Test Results */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Test Results & Performance</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testResults.map((result, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{result.test}</CardTitle>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${result.status === "PASSED" || result.status === "CERTIFIED" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}`}>
                        {result.status}
                      </span>
                    </div>
                    <p className="text-gray-600">Standard: {result.standard}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <p className="text-2xl font-bold text-orange-600 mb-2">{result.rating}</p>
                      <p className="text-gray-700">{result.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Quality Assurance Process</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="text-4xl font-bold text-orange-500 mb-2">1</div>
                  <CardTitle>Design & Engineering</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Expert design team creates custom solutions meeting all technical specifications and international standards</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="text-4xl font-bold text-orange-500 mb-2">2</div>
                  <CardTitle>Manufacturing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">State-of-the-art equipment and skilled technicians ensure precision manufacturing and quality control at every stage</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="text-4xl font-bold text-orange-500 mb-2">3</div>
                  <CardTitle>Testing & Certification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Rigorous testing at accredited laboratories ensures compliance with international standards and customer requirements</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 border-t border-gray-200 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Certified Quality You Can Trust</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Our comprehensive certifications and rigorous testing ensure that every product meets the highest standards of quality and reliability.</p>
            <Link href="/contact">
              <Button size="lg" className="bg-white border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition">
                Request Certification Details
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
