import Layout from '../components/layout';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Layout header="Next.js" title="Other page.">
      <div className="alert alert-primary text-center">
        <h5 className="mb-4">Welcome to next.js!</h5>
        <Link href="./">
          <button className="btn btn-primary">&lt;&lt; Back to Top.</button>
        </Link>
        </div>
        </Layout>
    </div>
  )
}
