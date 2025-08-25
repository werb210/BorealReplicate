import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4" data-testid="footer-brand">Boreal Financial</h3>
            <p className="text-gray-400 leading-relaxed mb-4" data-testid="footer-description">
              Providing flexible business financing solutions to help Canadian businesses grow and succeed. Get the funds you need, fast and hassle-free.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-linkedin">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="footer-services-heading">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/business-line-of-credit"><a className="hover:text-white transition-colors" data-testid="footer-link-business-line-of-credit">Business Line of Credit</a></Link></li>
              <li><Link href="/account-receivable-financing"><a className="hover:text-white transition-colors" data-testid="footer-link-account-receivable">Account Receivable Financing</a></Link></li>
              <li><Link href="/media-financing"><a className="hover:text-white transition-colors" data-testid="footer-link-media-financing">Media Financing</a></Link></li>
              <li><Link href="/equipment-financing"><a className="hover:text-white transition-colors" data-testid="footer-link-equipment-financing">Equipment Financing</a></Link></li>
              <li><Link href="/retail-inventory-financing"><a className="hover:text-white transition-colors" data-testid="footer-link-retail-inventory">Retail Inventory Financing</a></Link></li>
              <li><Link href="/po-financing"><a className="hover:text-white transition-colors" data-testid="footer-link-po-financing">Purchase Order Financing</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="footer-contact-heading">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p data-testid="footer-email">
                <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:Info@boreal.financial" className="hover:text-white transition-colors">Info@boreal.financial</a>
              </p>
              <p data-testid="footer-client-portal">
                <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                </svg>
                <a href="https://staff.boreal.financial/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Client Portal</a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p data-testid="footer-copyright">&copy; 2024 Boreal Financial. All rights reserved. | 
          <a href="#" className="hover:text-white transition-colors ml-1" data-testid="footer-link-privacy">Privacy Policy</a> | 
          <a href="#" className="hover:text-white transition-colors ml-1" data-testid="footer-link-terms">Terms of Service</a></p>
        </div>
      </div>
    </footer>
  );
}
