import styles from './newsletterSubscriptionInput.module.css';

const NewsletterSubscriptionInput = () => {
    return (
        <div className={`container ${styles.newsletterBox}`} style={{ paddingTop : 40, paddingBottom : 40}}>
            <div className={styles.newsletterBoxInternal}>
                <h2 style={{textAlign : 'center', fontSize : '2.5rem'}}>
                    WE HAVE A NEWSLETTER
                </h2>
                <h3 className={styles.newsletterSubtitle}>
                You can subscribe to our newsletter to get team updates, event insights, notifications on blog posts, and more!
                </h3>
                <div className={styles.newsletterInputContainer}>
                    <input className={styles.newsletterInput} placeholder='Your Email'/>
                    <button className={styles.newsletterSubmit}>
                        SUBSCRIBE
                    </button>
                </div>
                <div style={{marginTop: 20}}>
                    SOCIAL MEDIA ICONS
                </div>
            </div>
            
        </div>
    )
}

export default NewsletterSubscriptionInput;