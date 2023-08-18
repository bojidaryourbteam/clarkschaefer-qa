import Layout from '@layout/index';
import Link from 'next/link';

// ---------------------------------------------------------

const NotFoundPage = () => {
  return (
    <Layout>
        <div>
          <h1>Page Not Found</h1>
          <p>
            The page you're trying to access cannot be located. Please{' '}
            <Link href="/contact">contact us</Link> if you need help.
          </p>
        </div>
    </Layout>
  );
};

export default NotFoundPage;
