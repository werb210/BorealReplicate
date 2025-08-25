import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Settings, TrendingUp, Shield, Clock } from "lucide-react";

export default function EquipmentFinancing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-secondary leading-tight" data-testid="page-title">
                Equipment Financing
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed" data-testid="page-description">
                Get the equipment your business needs to grow and succeed. Our equipment financing solutions help you upgrade or expand your operations without tying up your working capital.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed" data-testid="financing-benefit">
                Whether you need manufacturing equipment, construction machinery, medical devices, or technology infrastructure, we provide flexible financing options tailored to your industry and business needs.
              </p>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800" 
                alt="Industrial equipment and machinery in modern manufacturing facility" 
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4" data-testid="benefits-title">
              Why Choose Equipment Financing?
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto" data-testid="benefits-description">
              Preserve your working capital while getting the equipment you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-gray-200" data-testid="benefit-capital">
              <CardContent className="p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">Preserve Working Capital</h3>
                <p className="text-gray-700 text-sm">Keep your cash flow intact for daily operations while financing equipment</p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200" data-testid="benefit-tax">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">Tax Benefits</h3>
                <p className="text-gray-700 text-sm">Potential tax advantages through depreciation and interest deductions</p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200" data-testid="benefit-terms">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">Flexible Terms</h3>
                <p className="text-gray-700 text-sm">Customizable repayment terms that match your cash flow patterns</p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200" data-testid="benefit-approval">
              <CardContent className="p-6">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">Fast Approval</h3>
                <p className="text-gray-700 text-sm">Quick decisions so you can get your equipment when you need it</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Types of Equipment */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4" data-testid="equipment-types-title">
              Equipment We Finance
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto" data-testid="equipment-types-description">
              We provide financing for a wide range of business equipment across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-gray-200" data-testid="manufacturing-equipment">
              <CardContent className="p-6">
                <Settings className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-secondary mb-3">Manufacturing Equipment</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• CNC machines and lathes</li>
                  <li>• Production line equipment</li>
                  <li>• Industrial printers</li>
                  <li>• Packaging machinery</li>
                  <li>• Quality control equipment</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200" data-testid="construction-equipment">
              <CardContent className="p-6">
                <svg className="w-8 h-8 text-primary mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM6 9.5a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-7z" clipRule="evenodd" />
                </svg>
                <h3 className="text-lg font-semibold text-secondary mb-3">Construction Equipment</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Excavators and bulldozers</li>
                  <li>• Cranes and lifts</li>
                  <li>• Concrete mixers</li>
                  <li>• Dump trucks and trailers</li>
                  <li>• Power tools and generators</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200" data-testid="medical-equipment">
              <CardContent className="p-6">
                <svg className="w-8 h-8 text-primary mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                </svg>
                <h3 className="text-lg font-semibold text-secondary mb-3">Medical Equipment</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• MRI and CT scanners</li>
                  <li>• X-ray machines</li>
                  <li>• Laboratory equipment</li>
                  <li>• Surgical instruments</li>
                  <li>• Dental equipment</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200" data-testid="technology-equipment">
              <CardContent className="p-6">
                <svg className="w-8 h-8 text-primary mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                </svg>
                <h3 className="text-lg font-semibold text-secondary mb-3">Technology Equipment</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Computer servers</li>
                  <li>• Network infrastructure</li>
                  <li>• Software licenses</li>
                  <li>• Point-of-sale systems</li>
                  <li>• Security systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200" data-testid="transportation-equipment">
              <CardContent className="p-6">
                <svg className="w-8 h-8 text-primary mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707L16 7.586A1 1 0 0015.414 7H14z" />
                </svg>
                <h3 className="text-lg font-semibold text-secondary mb-3">Transportation</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Commercial vehicles</li>
                  <li>• Delivery trucks</li>
                  <li>• Fleet vehicles</li>
                  <li>• Specialty vehicles</li>
                  <li>• Trailers and containers</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200" data-testid="restaurant-equipment">
              <CardContent className="p-6">
                <svg className="w-8 h-8 text-primary mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                <h3 className="text-lg font-semibold text-secondary mb-3">Restaurant Equipment</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Commercial ovens and grills</li>
                  <li>• Refrigeration systems</li>
                  <li>• Dishwashers</li>
                  <li>• Food prep equipment</li>
                  <li>• POS systems</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4" data-testid="how-it-works-title">
              How Equipment Financing Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center border-gray-200" data-testid="step-1">
              <CardContent className="p-6">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-3">Choose Your Equipment</h3>
                <p className="text-gray-700 text-sm">Select the equipment you need from any vendor or manufacturer</p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200" data-testid="step-2">
              <CardContent className="p-6">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-3">Apply for Financing</h3>
                <p className="text-gray-700 text-sm">Submit your application with equipment details and business information</p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200" data-testid="step-3">
              <CardContent className="p-6">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-3">Get Approved</h3>
                <p className="text-gray-700 text-sm">Receive fast approval decision, often within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200" data-testid="step-4">
              <CardContent className="p-6">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-3">Get Your Equipment</h3>
                <p className="text-gray-700 text-sm">We pay the vendor directly, and you start using your equipment</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features & Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="border-gray-200 h-full" data-testid="financing-features">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-6">Financing Features</h3>
                  <div className="space-y-4">
                    {[
                      "Finance up to 100% of equipment cost",
                      "Terms from 12 months to 7 years",
                      "Fixed or variable interest rates",
                      "Option to include soft costs (installation, training)",
                      "Seasonal payment structures available",
                      "Early payoff options without penalties"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3" data-testid={`financing-feature-${index}`}>
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-gray-200 h-full" data-testid="eligibility-requirements">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-6">Typical Requirements</h3>
                  <div className="space-y-4">
                    {[
                      "Established business (2+ years preferred)",
                      "Strong credit profile",
                      "Equipment quotes and specifications",
                      "Financial statements",
                      "Business plan or use of funds",
                      "Personal guarantee may be required"
                    ].map((requirement, index) => (
                      <div key={index} className="flex items-start space-x-3" data-testid={`eligibility-requirement-${index}`}>
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="cta-title">
            Get the Equipment Your Business Needs
          </h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto" data-testid="cta-description">
            Don't let equipment costs hold back your growth. Apply for equipment financing and get the tools you need to succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild data-testid="button-apply-now">
              <a href="https://staff.boreal.financial/" target="_blank" rel="noopener noreferrer">
                Apply for Equipment Financing
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild data-testid="button-get-quote">
              <a href="mailto:Info@boreal.financial" className="border-white text-white hover:bg-white hover:text-primary">
                Get a Quote
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
