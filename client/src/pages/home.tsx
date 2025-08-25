import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle, Shield, FileText, DollarSign, Check, ChartLine, Eye, Quote } from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Business Line of Credit",
      description: "Are you ready to propel your business to new heights? Unlock the potential of your company with an exclusive Business Line of Credit, designed to fuel growth and streamline operations.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300",
      link: "/business-line-of-credit",
      alt: "Modern business equipment and office workspace setup"
    },
    {
      title: "Account Receivable Financing",
      description: "Accounts receivable financing through asset-based lending is a viable alternative to bank financing for companies looking for maximum flexibility.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300",
      link: "/account-receivable-financing",
      alt: "Financial analytics dashboard showing accounts receivable data"
    },
    {
      title: "Media Financing",
      description: "Founded for producers by producers, we've been on the front line of film production. We have the knowledge and expertise to structure flexible financing.",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300",
      link: "/media-financing",
      alt: "Professional media production studio with cameras and lighting equipment"
    },
    {
      title: "Equipment Financing",
      description: "Get the equipment your business needs to grow and succeed. Our equipment financing solutions help you upgrade or expand your operations efficiently.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300",
      link: "/equipment-financing",
      alt: "Industrial equipment and machinery in modern manufacturing facility"
    },
    {
      title: "Retail Inventory Financing",
      description: "We know how difficult it is for small and medium-sized retailers to access adequate retail inventory financing. We provide solutions where banks won't.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300",
      link: "/retail-inventory-financing",
      alt: "Modern retail store with organized inventory and professional credit card transaction"
    },
    {
      title: "Purchase Order Financing",
      description: "Big orders can be a big opportunity—but only if you have the capital to fulfill them. PO Financing helps you seize opportunities without tying up cash flow.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300",
      link: "/po-financing",
      alt: "Business professionals reviewing purchase orders and contracts during handshake meeting"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section with Merger Announcement */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-6" data-testid="merger-announcement-badge">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M8.5 2.83a1 1 0 01.816-1.163 9.953 9.953 0 014.368 0 1 1 0 01-.632 1.898 7.953 7.953 0 00-3.488 0A1 1 0 018.5 2.83z" clipRule="evenodd" />
                  </svg>
                  <span className="text-accent font-semibold">Merger Announcement</span>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-secondary leading-tight" data-testid="hero-title">
                Financing For Big Moments Like Now
              </h1>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 space-y-4" data-testid="merger-details">
                <h3 className="text-xl font-bold text-secondary">Boreal Financial and CBF Have Joined Forces!</h3>
                <p className="text-gray-700 leading-relaxed">
                  As a result of our merger, all CBF clients can now access a network of over 80 lenders across Canada and the United States. This expanded partnership means more options and greater flexibility for your business funding needs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
                  {[
                    "Short-Term Loans & Working Capital",
                    "Lines of Credit",
                    "Equipment Financing",
                    "Invoice Factoring",
                    "Purchase Order (PO) Financing"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2" data-testid={`merger-feature-${index}`}>
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild data-testid="button-apply-now-hero">
                    <a href="https://staff.boreal.financial/" target="_blank" rel="noopener noreferrer">
                      Apply Now
                    </a>
                  </Button>
                  <Button variant="outline" asChild data-testid="button-learn-more-hero">
                    <a href="mailto:Info@boreal.financial">
                      Want to Learn More?
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Professional business handshake merger image */}
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800" 
                alt="Business professionals shaking hands in modern office setting" 
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="img-business-handshake"
              />
              
              <Card className="border-gray-200" data-testid="quick-facts-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-secondary">Quick Facts</h3>
                    <ChartLine className="w-6 h-6 text-accent" />
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div data-testid="stat-approval-rate">
                      <div className="text-2xl font-bold text-primary">98%</div>
                      <div className="text-sm text-gray-600">Approval Rate</div>
                    </div>
                    <div data-testid="stat-sales-increase">
                      <div className="text-2xl font-bold text-primary">120%</div>
                      <div className="text-sm text-gray-600">Sales Increase</div>
                    </div>
                    <div data-testid="stat-transparency">
                      <div className="text-2xl font-bold text-primary">100%</div>
                      <div className="text-sm text-gray-600">Transparency</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Business Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Financial growth charts image */}
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800" 
                alt="Financial growth charts and analytics displayed on computer screens" 
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="img-financial-growth"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary" data-testid="business-overview-title">
                Business Financing Made Simple
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed" data-testid="business-overview-description">
                Business loans help entrepreneurs build, maintain or expand their companies. Getting a business loan for your company doesn't always require walking into a bank to secure funds. At Boreal Financial, we make getting the funds stress-free, hassle-free, and fast.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary" data-testid="simple-trusted-title">Simple. Trusted. Secure</h3>
                    <p className="text-gray-600" data-testid="simple-trusted-description">Every business has different needs, and no financial solution is one size fits all.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4" data-testid="how-it-works-title">
              How It Works
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto" data-testid="how-it-works-description">
              Get funded in just 24 hours with our streamlined application process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="text-center border-gray-200" data-testid="apply-online-card">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-4">Apply Online</h3>
                <p className="text-gray-700 mb-6">
                  Fill out our secure application. Within 24 hours we'll call you to discuss payment and funding details.
                </p>
                <Button asChild data-testid="button-apply-online">
                  <a href="https://staff.boreal.financial/" target="_blank" rel="noopener noreferrer">
                    Apply Online
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center border-gray-200" data-testid="get-funding-card">
              <CardContent className="p-8">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-4">Get Funding</h3>
                <p className="text-gray-700 mb-6">
                  98% of applications are approved. Businesses see up to 120% increase in sales. We have 100% transparency.
                </p>
                <Button variant="secondary" asChild data-testid="button-get-funding">
                  <a href="https://staff.boreal.financial/" target="_blank" rel="noopener noreferrer">
                    Get Funding
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4" data-testid="services-title">
              Types Of Funding
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto" data-testid="services-description">
              Comprehensive financing solutions for every business need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-gray-200 overflow-hidden hover:shadow-xl transition-shadow" data-testid={`service-card-${index}`}>
                <img 
                  src={service.image} 
                  alt={service.alt} 
                  className="w-full h-48 object-cover"
                  data-testid={`service-image-${index}`}
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-3" data-testid={`service-title-${index}`}>{service.title}</h3>
                  <p className="text-gray-700 mb-4" data-testid={`service-description-${index}`}>
                    {service.description}
                  </p>
                  <Link href={service.link}>
                    <a className="text-primary font-semibold hover:text-primary/80 transition-colors" data-testid={`service-link-${index}`}>
                      Learn More →
                    </a>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Amount Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8" data-testid="funding-amount-title">Get up to $30 Million</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6" data-testid="funding-stat-1">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">98% of applications are approved</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6" data-testid="funding-stat-2">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChartLine className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Up to 120% increase in sales</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6" data-testid="funding-stat-3">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Transparency</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 lg:p-12 text-center border-gray-200" data-testid="testimonial-card">
            <CardContent className="p-0">
              <div className="mb-6">
                <Quote className="w-12 h-12 text-primary/30 mx-auto" />
              </div>
              <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8" data-testid="testimonial-quote">
                "When I decided to renovate my restaurant you came through for me. My account rep was very helpful and made the process really easy. It was completely different from my experience dealing with the banks in the past, and the best part is the cost of the reno paid for itself within the first season!"
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=160&h=160" 
                  alt="Professional headshot of Rocco, restaurant owner" 
                  className="w-12 h-12 rounded-full object-cover"
                  data-testid="testimonial-avatar"
                />
                <div className="text-left">
                  <div className="font-semibold text-secondary" data-testid="testimonial-name">Rocco</div>
                  <div className="text-gray-600" data-testid="testimonial-title">Restaurant Owner, Toronto ON</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="cta-title">
            Let's Make Your Business Awesome
          </h2>
          <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto" data-testid="cta-description">
            Ready to take your business to the next level? Apply now and get the funding you need to grow and succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild data-testid="button-apply-now-cta">
              <a href="https://staff.boreal.financial/" target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild data-testid="button-contact-us-cta">
              <a href="mailto:Info@boreal.financial">
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
