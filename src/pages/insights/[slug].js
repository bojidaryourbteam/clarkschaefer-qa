import FlexiblePageTemplate from '../../templates/Flexible';
import FlexibleData from '@lib/cms/flexibleData';
import { getPagePaths } from '@lib/cms/paths';

export async function getStaticPaths() {
  const data = (await getPagePaths('pageInsight')) ?? [];
  const slugs = data.map((item) => `/insights/${item.params.slug[0]}`);
  return {
    paths: slugs,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const preview = context.preview || false;
  const previewEnv = context?.previewData?.environment ?? null;
  const slug = context?.params?.slug;

  const data = await FlexibleData.fetch({
    slug,
    preview,
    previewEnv,
    collection: 'pageInsight',
  });

  return {
    props: {
      data,
      preview,
    },
  };
}

const Page = (props) => {
  return <FlexiblePageTemplate {...props} />;
};

export default Page;
