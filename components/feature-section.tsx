export default function FeatureSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Faster Processing.
              <br />
              Accurate Underwriting
            </h2>
          </div>
          <div>
            <p className="text-lg text-muted-foreground">
              Lending institutions rely on accurate industry classification for risk and compliance, but manual methods
              are slow, inconsistent, and hard to scale. HyperVerge's AI-driven engine transforms fragmented business
              data into reliable SIC/NAICS codes for faster, smarter decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
