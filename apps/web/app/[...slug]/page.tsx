import ParametricRoutesPage from 'cms-renderer/lib/renderer';
import { HeaderBlock, HeroBlock, DashboardPreviewBlock, GetAeoReportBlock } from './blocks';

export const dynamic = 'force-dynamic';

interface PageProps {
	params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const registry = {
	'header_schema': HeaderBlock,
	'hero_schema': HeroBlock,
	'full_image': DashboardPreviewBlock,
	'aeo_report_hero': GetAeoReportBlock,
};

export default async function TemplatePage({ params, searchParams }: PageProps) {
	const { slug } = await params;

	return (
		<ParametricRoutesPage
			registry={registry}
      cmsUrl="https://cms.dev.tryprofound.com"
      websiteId="79539651-e362-4f54-ba15-608dd267f883"
			apiKey="sk_NW1mZ9cD9bExJpTPkodLw3rk0sISAwuLHxgod55wG0lPeX"
			params={Promise.resolve({ slug })}
      searchParams={searchParams}
		/>
	);
}
