'use client'
import React from "react";

const TestimonialSection =()=> {
    return(<>
    {/* Testimonials */}
    <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What Our Users Say
            </h2>
          </div>
          
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {[
              {
                quote: "PlantGuard AI saved my tomato crop! It detected early blight before I even noticed symptoms and recommended treatment that worked.",
                name: "Sarah J.",
                role: "Home Gardener"
              },
              {
                quote: "The weather forecast feature is a game-changer. I've optimized my planting schedule and improved my crop yield by at least 25%.",
                name: "Michael T.",
                role: "Small Farm Owner"
              },
              {
                quote: "As a senior gardener with 40+ years of experience, even I find the AI detection incredibly accurate. Plus, the app is easy to use!",
                name: "Eleanor W.",
                role: "Master Gardener"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-6 py-8">
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>);
}