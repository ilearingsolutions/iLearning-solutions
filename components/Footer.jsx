import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0B1221] text-gray-300 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <div className="flex items-center mb-4">
            <div className="bg-blue-500 text-white p-2 rounded-lg mr-2">
              <span className="text-lg font-bold">📘</span>
            </div>
            <h3 className="text-xl font-semibold text-white">iLearning Solutions</h3>
          </div>
          <p className="text-sm leading-relaxed">
            Empowering professionals and organisations with future-ready skills through
            high-quality training and globally recognised certifications.
          </p>

          <div className="flex gap-4 mt-5">
            <a href="#" className="hover:text-blue-400"><Facebook size={20} /></a>
            <a href="#" className="hover:text-blue-400"><Twitter size={20} /></a>
            <a href="#" className="hover:text-blue-400"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-blue-400"><Instagram size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400">Home</a></li>
            <li><a href="#" className="hover:text-blue-400">About</a></li>
            <li><a href="#" className="hover:text-blue-400">Courses</a></li>
            <li><a href="#" className="hover:text-blue-400">Consulting</a></li>
            <li><a href="#" className="hover:text-blue-400">Resources</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            <li><a href="#" className="hover:text-blue-400">Login</a></li>
          </ul>
        </div>

        {/* Course Categories */}
        <div>
          <h4 className="text-white font-semibold mb-4">Course Categories</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400">Project Management</a></li>
            <li><a href="#" className="hover:text-blue-400">Continuous Improvement</a></li>
            <li><a href="#" className="hover:text-blue-400">Strategy & Leadership</a></li>
            <li><a href="#" className="hover:text-blue-400">AI & Innovation</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Mail size={18} className="text-blue-400 mt-0.5" />
              <a href="mailto:support@ilearningsolutions.com" className="hover:text-blue-400">
                support@ilearningsolutions.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={18} className="text-blue-400 mt-0.5" />
              <span>+61 123 456 789</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-blue-400 mt-0.5" />
              <span>
                123 Learning Street<br />Sydney, NSW 2000<br />Australia
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© 2025 iLearning Solutions. All rights reserved.</p>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-blue-400">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400">Terms of Service</a>
          <a href="#" className="hover:text-blue-400">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;