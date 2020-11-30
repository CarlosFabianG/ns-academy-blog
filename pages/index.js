import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.lightText}>
        <p>Personal blog by Carlos Fabián. I explain with words and code.</p>
      </section>
      <section className={utilStyles.headingMd}>.</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} /> • 
              <span role='img' aria-label='one coffee'>
                  ☕ {' 4' + ' min read'}
              </span>
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}


export async function getStaticProps(){
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}