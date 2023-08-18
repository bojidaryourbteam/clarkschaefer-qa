import FlexiblePageTemplate from '../../templates/Flexible';
import FlexibleData from '@lib/cms/flexibleData';
import { getPagePaths } from '@lib/cms/paths';

export async function getStaticPaths() {
  const data = (await getPagePaths('pageExpert')) ?? [];
  const slugs = data.map((item) => `/experts/${item.params.slug[0]}`);
  console.log(slugs)
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
    collection: 'pageExpert',
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
