import React from 'react'
import Head from '../components/head'

import Layout from '../components/layout'

const ContactPage = () => {
    return (
        <Layout>
            <Head title='Contact'/>
            <h1>Contact me.</h1>
            <p>
                The best way to reach me is <a href="https://twitter.com/ijsucceed">@ijsucceed</a> via <a href="https://twitter.com/ijsucceed">Twitter</a>
            </p>
        </Layout>
    )
}

export default ContactPage