import FlexiblePageTemplate from '../templates/Flexible';

// ---------------------------------------------------------

import { getPagePaths } from '@lib/cms/paths';
import FlexibleData from '@lib/cms/flexibleData';

// ---------------------------------------------------------

export async function getStaticPaths() {
  const slugs = (await getPagePaths()) ?? [];
  return {
    paths: slugs,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const preview = context.preview || false;
  const previewEnv = context?.previewData?.environment ?? null;
  const slug = context?.params?.slug.join('/');
  const data = await FlexibleData.fetch({ slug, preview, previewEnv });
  return {
    props: {
      data,
      preview,
    },
  };
}

// ---------------------------------------------------------

const Page = (props) => {
  return <FlexiblePageTemplate {...props} />;
};

export default Page;
