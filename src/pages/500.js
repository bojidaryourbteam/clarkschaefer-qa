import Layout from '@layout/index';
import Link from 'next/link';

// ---------------------------------------------------------

const FiveHundredPage = () => {
  return (
    <Layout>
        <h1>We're sorry, but something went wrong.</h1>
        <p>
          The page you're trying to access cannot be located. Please{' '}
          <Link href="/contact">contact us</Link> if you need help.
        </p>
    </Layout>
  );
};

export default FiveHundredPage;
