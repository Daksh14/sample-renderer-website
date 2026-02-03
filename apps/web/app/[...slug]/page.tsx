import ParametricRoutesPage from 'website/lib/renderer';

export const dynamic = 'force-dynamic';

interface PageProps {
	params: Promise<{ slug: string[] }>;
}

interface HeroContent {
  headline: string;
  subheadline?: string;
  ctaText?: string;
  ctaUrl?: string;
}

const HeroComponent = ({ content }: { content: HeroContent }) => {
  const { headline, subheadline, ctaText, ctaUrl } = content;

  return (
    <section className="flex w-full flex-col items-center justify-center gap-12 border-b border-fill-quaternary bg-gradient-to-b from-bg-base to-bg-secondary py-24">
      <header className="container-university flex flex-col items-center justify-center gap-2 text-center">
        {subheadline && (
          <span className="text-sm font-medium text-text-tertiary lg:text-base">{subheadline}</span>
        )}
        <h1 className="w-full text-balance text-3xl font-medium text-text-primary md:max-w-3/4 md:text-4xl md:leading-tight">
          {headline}
        </h1>
      </header>

      {ctaText && ctaUrl && (
        <a
          href={ctaUrl}
          className="rounded-lg bg-fill-primary px-6 py-3 text-sm font-medium text-text-inverse transition-colors hover:bg-fill-primary-hover"
        >
          {ctaText}
        </a>
      )}
    </section>
  );
};

const registry = {
  'hero-block': HeroComponent,
};

export default async function TemplatePage({ params }: PageProps) {
	const { slug } = await params;

	return (
		<ParametricRoutesPage 
			registry={registry} 
			apiKey="sk_NW1mZ9cD9bExJpTPkodLw3rk0sISAwuLHxgod55wG0lPeX" 
			params={Promise.resolve({ slug })} 
		/>
	);
}