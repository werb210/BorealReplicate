import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, TrendingUp, Clock, Users } from "lucide-react";

export default function Factoring() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-secondary leading-tight" data-testid="page-title">
                Factoring Finance Can Improve Your Cash Flow
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed" data-testid="page-description">
                Invoice factoring is the purchase of a company's outstanding invoices, where the invoice financing company advances 75-90% of the face value of the total invoice amount once the product or service is delivered to the customer.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed" data-testid="value-proposition">
                Transform your unpaid invoices into immediate working capital and eliminate the stress of waiting 30-90 days for customer payments.
              </p>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800" 
                alt="Business professional reviewing invoices and factoring documents in modern office" 
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
              Why Choose Invoice Factoring?
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto" data-testid="benefits-description">
              Turn your invoices into immediate cash flow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-gray-200" data-testid="benefit-immediate-cash">
              <CardContent className="p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">Immediate Cash</h3>
                <p className="text-gray-700 text-sm">Get 75-90% of your invoice value within 24 hours of approval</p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200" data-testid="benefit-no-debt">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">Not a Loan</h3>
                <p className="text-gray-700 text-sm">Factoring is a sale of assets, not debt on your balance sheet</p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200" data-testid="benefit-flexible">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">Flexible Volume</h3>
                <p className="text-gray-700 text-sm">Factor individual invoices or your entire accounts receivable portfolio</p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200" data-testid="benefit-collections">
              <CardContent className="p-6">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">Professional Collections</h3>
                <p className="text-gray-700 text-sm">We handle collections professionally, maintaining customer relationships</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How Factoring Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4" data-testid="how-it-works-title">
              How Invoice Factoring Works
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto" data-testid="how-it-works-description">
              A simple 4-step process to convert your invoices into cash
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-gray-200" data-testid="step-1">
              <CardContent className="p-6">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-3">Submit Invoices</h3>
                <p className="text-gray-700 text-sm">Submit your approved invoices to us for immediate funding</p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200" data-testid="step-2">
              <CardContent className="p-6">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-3">Receive Advance</h3>
                <p className="text-gray-700 text-sm">Get 75-90% of invoice value deposited into your account within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200" data-testid="step-3">
              <CardContent className="p-6">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-3">Customer Pays</h3>
                <p className="text-gray-700 text-sm">Your customer pays us directly according to normal payment terms</p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200" data-testid="step-4">
              <CardContent className="p-6">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-3">Receive Balance</h3>
                <p className="text-gray-700 text-sm">We remit the remaining balance less our factoring fee</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Factoring vs Traditional Financing */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4" data-testid="comparison-title">
              Factoring vs. Traditional Financing
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-green-200 bg-green-50" data-testid="factoring-advantages">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-4 text-center">Invoice Factoring</h3>
                <div className="space-y-3">
                  {[
                    "No personal guarantees required",
                    "Based on your customers' creditworthiness",
                    "No monthly payments or interest",
                    "Improves cash flow immediately",
                    "No debt added to balance sheet",
                    "Professional credit and collections service",
                    "Flexible - factor when you need cash",
                    "Quick setup (days, not weeks)"
                  ].map((advantage, index) => (
                    <div key={index} className="flex items-center space-x-3" data-testid={`factoring-advantage-${index}`}>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">{advantage}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200" data-testid="traditional-financing">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-4 text-center">Traditional Bank Loans</h3>
                <div className="space-y-3">
                  {[
                    "Personal guarantees often required",
                    "Based on your business creditworthiness",
                    "Monthly payments with interest",
                    "May take weeks to access funds",
                    "Adds debt to your balance sheet",
                    "You handle all collections",
                    "Fixed loan amount and terms",
                    "Lengthy application process"
                  ].map((limitation, index) => (
                    <div key={index} className="flex items-center space-x-3" data-testid={`traditional-limitation-${index}`}>
                      <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{limitation}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries & Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="border-gray-200 h-full" data-testid="industries-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-6">Industries We Serve</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {[
                      "Manufacturing",
                      "Distribution",
                      "Staffing & Recruiting",
                      "Transportation & Logistics",
                      "Professional Services",
                      "Government Contractors",
                      "Healthcare Services",
                      "Technology Companies",
                      "Import/Export",
                      "Wholesale Trade",
                      "Construction",
                      "And Many More"
                    ].map((industry, index) => (
                      <div key={index} className="flex items-center space-x-2" data-testid={`industry-${index}`}>
                        <CheckCircle className="w-4 h-4 text-accent" />
                        <span className="text-gray-700">{industry}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-gray-200 h-full" data-testid="requirements-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-6">Basic Requirements</h3>
                  <div className="space-y-4">
                    {[
                      "B2B invoices with creditworthy customers",
                      "Invoice amounts typically $1,000 minimum",
                      "Payment terms of 90 days or less",
                      "No liens on accounts receivable",
                      "Established business with operating history",
                      "Clean accounts receivable aging"
                    ].map((requirement, index) => (
                      <div key={index} className="flex items-start space-x-3" data-testid={`requirement-${index}`}>
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{requirement}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg" data-testid="advance-rates">
                    <h4 className="font-semibold text-secondary mb-2">Typical Advance Rates:</h4>
                    <p className="text-sm text-gray-700">• 75-90% of invoice face value</p>
                    <p className="text-sm text-gray-700">• Higher rates for creditworthy customers</p>
                    <p className="text-sm text-gray-700">• Competitive factoring fees</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="cta-title">
            Stop Waiting for Payments
          </h2>
          <p className="text-lg mb-8 text-indigo-100 max-w-2xl mx-auto" data-testid="cta-description">
            Turn your outstanding invoices into immediate working capital. Get the cash flow your business needs to grow and succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild data-testid="button-apply-now">
              <a href="https://clientportal.boreal.financial" target="_blank" rel="noopener noreferrer">
                Start Factoring Today
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild data-testid="button-get-quote">
              <a href="mailto:Info@boreal.financial" className="border-white text-white hover:bg-white hover:text-indigo-600">
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
