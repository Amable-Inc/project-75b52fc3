'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Truck, Award, Leaf, Star, ArrowRight, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 border-b border-orange-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-2xl">🥭</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
              MangoHub
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#products" className="text-gray-600 hover:text-orange-600 transition">Products</a>
            <a href="#about" className="text-gray-600 hover:text-orange-600 transition">About</a>
            <a href="#contact" className="text-gray-600 hover:text-orange-600 transition">Contact</a>
            <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Shop Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                  🌟 Fresh from the Farm
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Sweet & Juicy
                <span className="block bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                  Premium Mangoes
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience the taste of paradise with our handpicked, sun-ripened mangoes. 
                Delivered fresh to your doorstep, straight from sustainable farms.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-lg px-8">
                  Order Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50 text-lg px-8">
                  Learn More
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-orange-600">10K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600">100%</div>
                  <div className="text-sm text-gray-600">Organic</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600">5⭐</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-orange-300 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-yellow-300 rounded-full blur-3xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-orange-400 to-yellow-500 rounded-3xl p-8 shadow-2xl">
                <div className="text-9xl text-center">🥭</div>
                <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg">
                  <Star className="h-6 w-6 text-yellow-500 fill-current" />
                </div>
                <div className="absolute bottom-4 left-4 bg-white rounded-full px-4 py-2 shadow-lg">
                  <span className="text-sm font-semibold text-orange-600">Fresh Today!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600">The finest mangoes with unmatched quality and service</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="border-2 border-orange-100 hover:border-orange-300 transition hover:shadow-lg">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Truck className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold">Free Delivery</h3>
                <p className="text-gray-600">Fast and free delivery on all orders over $50</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-orange-100 hover:border-orange-300 transition hover:shadow-lg">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Leaf className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold">100% Organic</h3>
                <p className="text-gray-600">Grown naturally without harmful chemicals</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-orange-100 hover:border-orange-300 transition hover:shadow-lg">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold">Premium Quality</h3>
                <p className="text-gray-600">Handpicked and carefully selected mangoes</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-orange-100 hover:border-orange-300 transition hover:shadow-lg">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Star className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold">Best Reviews</h3>
                <p className="text-gray-600">Trusted by thousands of happy customers</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Premium Selection</h2>
            <p className="text-xl text-gray-600">Discover our variety of delicious mangoes</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Alphonso", price: "$24.99", desc: "The king of mangoes with rich, creamy texture", emoji: "🥭" },
              { name: "Kesar", price: "$19.99", desc: "Sweet and aromatic with golden color", emoji: "🥭" },
              { name: "Ataulfo", price: "$22.99", desc: "Honey-sweet and fiber-free delight", emoji: "🥭" },
            ].map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition group cursor-pointer">
                <div className="h-64 bg-gradient-to-br from-orange-300 to-yellow-400 flex items-center justify-center text-8xl group-hover:scale-110 transition">
                  {product.emoji}
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold">{product.name}</h3>
                      <p className="text-gray-600">{product.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                    <span className="text-gray-600 ml-2">(4.9)</span>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-3xl font-bold text-orange-600">{product.price}</span>
                    <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Join thousands of satisfied mango lovers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", text: "The best mangoes I've ever tasted! Fresh, sweet, and delivered perfectly ripe.", rating: 5 },
              { name: "Michael Chen", text: "Amazing quality and service. I order from MangoHub every week now!", rating: 5 },
              { name: "Emma Davis", text: "Finally found a reliable source for authentic Alphonso mangoes. Highly recommend!", rating: 5 },
            ].map((testimonial, index) => (
              <Card key={index} className="border-2 border-orange-100">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3 pt-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">Verified Customer</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Taste Paradise?
            </h2>
            <p className="text-xl text-orange-50">
              Order now and get 20% off your first purchase. Free delivery on orders over $50!
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8">
                <MapPin className="mr-2 h-5 w-5" />
                Find Store
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🥭</span>
                </div>
                <span className="text-2xl font-bold text-white">MangoHub</span>
              </div>
              <p className="text-gray-400">
                Bringing the finest mangoes from farm to your table.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Shop</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-orange-400 transition">All Products</a></li>
                <li><a href="#" className="hover:text-orange-400 transition">Best Sellers</a></li>
                <li><a href="#" className="hover:text-orange-400 transition">New Arrivals</a></li>
                <li><a href="#" className="hover:text-orange-400 transition">Gift Boxes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-orange-400 transition">About Us</a></li>
                <li><a href="#" className="hover:text-orange-400 transition">Our Farms</a></li>
                <li><a href="#" className="hover:text-orange-400 transition">Contact</a></li>
                <li><a href="#" className="hover:text-orange-400 transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-orange-400 transition">FAQ</a></li>
                <li><a href="#" className="hover:text-orange-400 transition">Shipping</a></li>
                <li><a href="#" className="hover:text-orange-400 transition">Returns</a></li>
                <li><a href="#" className="hover:text-orange-400 transition">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MangoHub. All rights reserved. Made with ❤️ for mango lovers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
