import styles from './blog.module.css';
import Link from 'next/link';
import { Suspense } from 'react';

import { parse } from 'node-html-parser';

const BlogItem = ({title, author, date, body, href = '/', skeleton = false}) => {
    return <div className={`${styles.blogItem} ${skeleton && styles.skeleton}`}>
        {
            skeleton ? <>
                <div className={styles.skeletonTitle}/>
                <div className={styles.skeletonSubtitle}/>
                <div className={styles.skeletonBody}/>
                <div className={styles.skeletonReadMore}/>
            </> : <>
                <div>
                    <Link
                        href={href}
                        target={'blank'}
                        className={styles.blogTitle}
                    >
                        {title}
                    </Link>
                </div>
                <span className={styles.blogSubtitle}>
                    By {author.toUpperCase()} on {date.toUpperCase()}
                </span>
                <span className={styles.blogBody}>
                    {body}
                </span>
                <Link
                    href={href}
                    target={'_blank'}
                    className={styles.blogReadMore}
                >
                    Read More »
                </Link>
            </>
        }
        
    </div>
}


function parseBlogContent(htmlContent) {

    const parsedContent = parse(htmlContent);

    let children = parsedContent.querySelectorAll('*');

    for(var i = 0 ; i < children.length ; i++) {
        if(children[i].textContent)
            children[i].set_content(children[i].textContent + '. '); // Adds period between the elements
        else
            children[i].set_content(children[i].text + '. '); // Adds period between the elements
    }

    return [parsedContent.textContent || parsedContent.text].toString().replace(/ +/g,' ')
        .replace(/([!?\.])\.(?![.])/g, '$1'); // Remove instances of double punctuation (and ignores ellipses ...)
};

const getBlogData = async () => {
    try {
        const res = await fetch(
            `https://www.team5599.com/api/blog?limit=3`,
            {
                method: 'GET'
            }
        );

        const data = await res.json();
    
        const blogData = data.payload.map((postData) => {
            return {
                id : postData.id,
                title : postData.title,
                author : postData.author.displayName,
                date : (new Date(postData.published)).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
                body : parseBlogContent(postData.content),
                url : postData.url
            }
        });

        return blogData;
    } catch (err) {
        console.log(err);
        return [];
    }
}


const Blog = async () => {

    const blogData = await getBlogData();

    return (
        <div className={`container ${styles.blogContainer}`} style={{marginTop : 80, marginBottom: 80}}>
            <h2 style={{textAlign : 'center', textTransform: 'uppercase', marginBottom: 40}}>
                Recent News
            </h2>
            <Suspense fallback={
                <>
                    <BlogItem skeleton={true}/>
                    <BlogItem skeleton={true}/>
                    <BlogItem skeleton={true}/>
                </>
            }>
                {
                    blogData.map((_blogData, index) => {
                        return <BlogItem key={_blogData.id} title={_blogData.title} author={_blogData.author} date={_blogData.date} body={_blogData.body} href={_blogData.url}/>
                    })
                }      
            </Suspense>
        </div>
    )
}

export default Blog;