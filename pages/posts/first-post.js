import Layout from '../../components/layout'
import Link from 'next/link'

export default function FirstPost() {
    return (
        <Layout>
            <h1>First Post</h1>
            <Link href="/">
                <h3>Back to home</h3>
            </Link>
        </Layout>
    )
  }
  