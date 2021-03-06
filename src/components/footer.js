import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

import footerStlyes from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <footer className={footerStlyes.footer}>
            <p>Created by {data.site.siteMetadata.author}, &copy; 2020</p>
        </footer>
    )
}

export default Footer