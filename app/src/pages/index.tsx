import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '../components/Layout';

const Home: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Socrates</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
        </Layout>
    );
};

export default Home;
