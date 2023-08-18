import PropTypes from 'prop-types';
import { NextSeo } from 'next-seo';

import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = ({ children, meta, nofollow, navigation }) => {
  // TODO: update default Meta
  const defaultDescription = 'Insert default description';
  const defaultTitle = 'Insert default image';
  const nextMeta = {
    description: meta?.description || defaultDescription,
    imageAlt: meta?.image?.alt || 'Meta Image Alt',
    imageUrl: meta?.image?.url || '',
    title: meta?.title
      ? `${meta.title} | ${process.env.company_name}`
      : defaultTitle,
  };

  return (
    <>
      <NextSeo
        canonical={nextMeta.canonical}
        nofollow={nofollow}
        openGraph={{
          images: [
            {
              alt: nextMeta.imageAlt,
              height: 630,
              url: nextMeta.imageUrl,
              width: 1200,
            },
          ],
          site_name: 'Ample',
          type: 'website',
          url: nextMeta.canonical,
        }}
        title={nextMeta.title}
        description={nextMeta.description}
        // twitter={{
        //   cardType: 'summary_large_image',
        //   site: '@helloample',
        // }}
      />

      <Header navigation={navigation}></Header>
      <main>{children}</main>
      <Footer navigation={navigation}></Footer>
    </>
  );
};

Layout.propTypes = {
  navigation: PropTypes.array,
  meta: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
  }),
  nofollow: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Layout;
