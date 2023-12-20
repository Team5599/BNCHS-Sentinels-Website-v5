import styles from './newsletterSubscriptionInput.module.css';

import SocialMediaIcons from '@components/SocialMediaIcons/SocialMediaIcons';

import { Button } from '@components/Button/Button';

const NewsletterSubscriptionInput = () => {
    return (
        <div className={`container ${styles.newsletterBox}`} style={{ paddingTop : 40, paddingBottom : 40}}>
            <div className={styles.newsletterBoxInternal}>
                <h2 style={{textAlign : 'center', fontSize : '2.5rem'}}>
                    WE HAVE A NEWSLETTER
                </h2>
                <h5 className={styles.newsletterSubtitle}>
                You can subscribe to our newsletter to get team updates, event insights, notifications on blog posts, and more!
                </h5>
                <div className={styles.newsletterInputContainer}>
                    <input className={styles.newsletterInput} placeholder='Your Email'/>
                    <Button
                        label={'Subscribe'}
                        style={{
                            backgroundColor : '#027bff',
                            '--hoverBackgroundColor' : '#015bdf'
                        }}
                        className={styles.newsletterSubmit}
                    />
                </div>
                <div style={{display : 'flex', justifyContent : 'center', marginTop: 20}}>
                    <SocialMediaIcons/>
                </div>
            </div>
            
        </div>
    )
}

export default NewsletterSubscriptionInput;