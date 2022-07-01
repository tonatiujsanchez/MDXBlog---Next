import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { MDXRemote } from 'next-mdx-remote'

import MDXComponents from '../../components/MDXComponents'
import { getFiles, getFileBySlug } from '../../lib/mdx'
import { Fragment } from 'react';



type Props = {
    frontMatter: {
        title: string;
        slug: string;
        image: string;
        wordCount: number;
        readingTime: {
            minutes: number;
            text: string;
            time: number;
            words: number;
        };
    };
    mdxSource: {
        compiledSource: string;
    };
};


const DynamicPost: NextPage<Props> = ({ frontMatter, mdxSource }) => {


    return (
        <div className='container px-5 my-16'>
            <article className="prose lg:prose-xl m-auto">
                <h1>{frontMatter.title}</h1>
                <MDXRemote {...mdxSource} components={MDXComponents} />
            </article>
        </div>
    )
}


export const getStaticPaths: GetStaticPaths = async () => {

    const posts = await getFiles("posts")

    const paths = posts.map(post => ({
        params: {
            slug: post.replace(/\.mdx/, "")
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const post = await getFileBySlug("posts", String(params?.slug))

    return {
        props: {
            ...post
        }
    }
}


export default DynamicPost