const Terms = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
            <p>
              By accessing and using ShopHub, you accept and agree to be bound by the terms and 
              provision of this agreement. If you do not agree to abide by the above, please do 
              not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily use ShopHub for personal, non-commercial 
              transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display</li>
              <li>attempt to reverse engineer any software contained on the website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Product Information</h2>
            <p>
              We attempt to be as accurate as possible in our product descriptions. However, we do not 
              warrant that product descriptions or other content is accurate, complete, reliable, 
              current, or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Pricing and Payment</h2>
            <p className="mb-4">
              All prices are subject to change without notice. We reserve the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Refuse service to anyone for any reason at any time</li>
              <li>Limit quantities of any products or services</li>
              <li>Correct pricing errors on our website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Returns and Refunds</h2>
            <p>
              Please refer to our Returns Policy for detailed information about returns, exchanges, 
              and refunds.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
            <p>
              Questions about the Terms of Service should be sent to us at legal@shophub.com 
              or +1 (555) 123-4567.
            </p>
          </section>

          <p className="text-sm">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;