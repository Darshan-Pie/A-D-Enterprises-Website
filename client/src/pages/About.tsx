import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Calendar, MapPin, Users } from "lucide-react";

const stats = [
  { icon: Calendar, label: "Founded", value: "2006" },
  { icon: Users, label: "Expert Professionals", value: "50+" },
  { icon: MapPin, label: "Location", value: "Ahmedabad, GJ" },
  { icon: Award, label: "Certification", value: "ISO 9001:2015" },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA]">
      <Navbar />

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative bg-[#FAFAFA] border-b border-gray-100 py-20">
          <div className="absolute top-0 -right-40 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-40 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm font-semibold tracking-[0.25em] uppercase text-orange-500 mb-4">
                Our Story
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                About A.D. Enterprises
              </h1>
              <p className="text-xl text-gray-400 font-light leading-relaxed">
                Pioneering low voltage switchboard manufacturing since 2006.
              </p>
            </div>
          </div>
        </section>

        {/* Facility Image */}
        <section className="w-full">
          <img
            src="https://placehold.co/1200x600/E5E7EB/111827?text=A.D.+Enterprises+Facility"
            alt="A.D. Enterprises Manufacturing Facility"
            className="w-full h-auto object-cover"
          />
        </section>

        {/* Stats Strip */}
        <section className="bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
              {stats.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center py-10 px-6 gap-3"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Icon className="text-blue-600" size={20} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{value}</div>
                  <div className="text-sm text-gray-500 font-light tracking-wide">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-24 bg-[#FAFAFA]">
          <div className="max-w-3xl mx-auto px-4">

            {/* History */}
            <div className="mb-16">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-orange-500 mb-4">
                History
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                A Legacy of Engineering Excellence
              </h2>
              <p className="text-gray-600 text-lg font-light leading-relaxed">
                A.D. Enterprises is a renowned industry leader in the manufacturing of a comprehensive range of Low
                Voltage Switch Boards and Bus Ducts. With a successful track record since 2006, we specialize in
                designing and producing LV switchboards and bus ducts that precisely cater to the specific requirements
                of customers, while adhering to the highest standards of engineering practices.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100 mb-16" />

            {/* Expertise */}
            <div className="mb-16">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-orange-500 mb-4">
                Expertise
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our People Make the Difference
              </h2>
              <p className="text-gray-600 text-lg font-light leading-relaxed">
                At A.D. Enterprises, we boast a team of expert technical professionals who are dedicated to delivering
                exceptional design solutions tailored to each customer's unique application and project timeline.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100 mb-16" />

            {/* Infrastructure */}
            <div className="mb-16">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-orange-500 mb-4">
                Infrastructure
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                State-of-the-Art Manufacturing Facility
              </h2>
              <p className="text-gray-600 text-lg font-light leading-relaxed">
                We take immense pride in our state-of-the-art infrastructure and well-established manufacturing facility
                located in Bakrol Bujrang, Daskroi area of Ahmedabad. Equipped with cutting-edge technology, our
                facility ensures the production of top-notch Low Voltage Switch Boards and LT Bus Ducts.
              </p>
            </div>

            {/* CTA */}
            <div className="border-t border-gray-100 pt-16 text-center">
              <p className="text-gray-500 font-light mb-6">
                Ready to work with us? Explore our products or get in touch.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="/products"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all duration-200"
                >
                  View Products
                </a>
                <a
                  href="/contact"
                  className="inline-block border border-gray-300 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
