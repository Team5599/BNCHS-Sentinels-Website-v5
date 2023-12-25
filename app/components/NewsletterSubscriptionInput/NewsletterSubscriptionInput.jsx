'use client'

import styles from './newsletterSubscriptionInput.module.css';
import {useState} from 'react';

import SocialMediaIcons from '@components/SocialMediaIcons/SocialMediaIcons';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Tooltip } from 'react-tooltip'

import { useForm, Controller } from 'react-hook-form'


import { Button } from '@components/Button/Button';

const NewsletterSubscriptionInput = () => {

    const [isDisabled, setDisabled] = useState(true);

    const {
		register,
		handleSubmit,
		control,
		formState : {errors}
	} = useForm({
		email : ""
	});

    const handleSubscription = async (data) => {

        setDisabled(true);

		try {

			const _response = await fetch(
				`${process.env.NEXT_PUBLIC_API_BASE}/api/v1/subscribe`,
				{
					method: 'POST',
					body : JSON.stringify(data),
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (_response.status == 200) {
                toast.success("Successfully signed up for the newsletter!", {autoClose : 5000})
				setDisabled(false);
				return;
			}
	
			const response = await _response.json();

            toast.error(`We're sorry, an unexpected error has occurred. Please try again later. ${response.message}`, {autoClose : 5000})

		} catch (err) {
			console.log(err);
            toast.error(`We're sorry, an unexpected error has occurred. Please try again later.`, {autoClose : 5000})

		} finally {
            setDisabled(false);
        }

    }

    /*TODO
        Make sure we are using the exact same validation scheme EVERYWHERE.
        Should be the same HERE, on the CONTACT page, and on the SERVER in all places.
    */

    const emailValidationPattern = {
        value :  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message : "Invalid Email Address"
    }

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
                    <input className={styles.newsletterInput} placeholder='Your Email' {...register('email', {required : true, pattern : emailValidationPattern})}/>
                    <Button
                        data-tooltip-id="tooltip" data-tooltip-content={"Subscriptions & Newsletter Coming Soon!"}
                        onClick={
                            (e) => {
                                handleSubmit(handleSubscription)()
                            }
                        }
                        disabled={isDisabled}
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
            <ToastContainer position='bottom-right'/>
            <Tooltip id="tooltip" noArrow={true} float={true} style={{zIndex : 100}}/>
        </div>
    )
}

export default NewsletterSubscriptionInput;