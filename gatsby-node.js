/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ( {graphql, actions}) => {
    const {createPage} = actions
    const PostTemplate = path.resolve('./src/templates/Post.js')

    return graphql(`
        {
            allWordpressPost{
                edges{
                    node{
                        slug
                        wordpress_id                        
                    }
                }
            }
        }
    `).then(results => {
        if(results.errors){
            throw results.erros
        }
        const Posts = results.data.allWordpressPost.edges
        Posts.forEach(post => {
            createPage({
                path: `/post/${post.node.slug}`,
                component: PostTemplate,
                context: {
                    id: post.node.wordpress_id
                }
            })
        })
    });
}