import styles from './blog.module.css';
import Image from 'next/image';
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
                <Link
                    href={href}
                    target={'blank'}
                    className={styles.blogTitle}
                >
                    {title}
                </Link>
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

const InstagramPolaroid = ({imageSrc, description, postUrl = "/", offset = 0}) => {
    return (
        <div className={styles.polaroid} style={{marginTop : offset}}>
            <Link
                className={styles.polaroidInternal}
                href={postUrl}
                target={'_blank'}
            >
                <Image
                    className={styles.polaroidPicture}
                    src={imageSrc}
                    layout='fill'
                />
                <div className={styles.polaroidOverlay}>
                    <span>
                        {description}
                    </span>
                </div>
            </Link>
            <div className={styles.polaroidShader}/>
        </div>
    )
}

const PolaroidRow = () => {
    return (
        <div className={styles.polaroidRow}>
            <InstagramPolaroid
                imageSrc={'/images/tiles/team.jpg'}
                description={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'}
            />
            <InstagramPolaroid
                offset={20}
                imageSrc={'/images/tiles/team.jpg'}
                description={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'}
            />
            <InstagramPolaroid
                offset={10}
                imageSrc={'/images/tiles/team.jpg'}
                description={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'}
            />
            <InstagramPolaroid
                imageSrc={'/images/tiles/team.jpg'}
                description={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'}
            />
            <InstagramPolaroid
                offset={20}
                imageSrc={'/images/tiles/team.jpg'}
                description={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'}
            />
        </div>
    )
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
            <PolaroidRow/>
        </div>
    )
}

export default Blog;