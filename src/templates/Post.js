import React from 'react'
import Layout from '../components/layout'
import {graphql} from 'gatsby'

const Post = ({data})  => {
    return (
        <Layout>
            <h1>{data.wordpressPost.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.wordpressPost.content}} />
            <p>Page Description</p>
        </Layout>
    )
}
export default Post;

export const query = graphql`
    query($id: Int!) {
        wordpressPost(wordpress_id: {eq: $id}) {
            title
            content
            excerpt
            date
        }
    }
`