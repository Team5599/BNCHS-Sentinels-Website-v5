"use client"

import styles from './button.module.css'
import {useState} from 'react';
import Link from 'next/link';

const ButtonBaseInternal = ({baseColor, hoverColor, outlineColor, outlineHoverColor, activeColor, contentContainerClass, children}) => {

    return (
        <>
            {/* Border */}
            <div
                className={styles.buttonOutline}
                style={{
                    borderColor : outlineColor,
                    '--hover-border-color' : outlineHoverColor
                }}
            />
            {/* Inner Block */}
            <div
                className={styles.buttonInnerBlock}
                style={{
                    backgroundColor: baseColor,
                    '--hover-background-color' : hoverColor,
                    '--active-background-color' : activeColor,
                }}
            >
                <div
                    className={[`${styles.buttonContentContainer} ${contentContainerClass}`]}
                >
                    {
                        children
                    }
                </div>
                
            </div>
        </>
    )
}

const ButtonBase = ({style = {}, children, type, variant, className, contentContainerClass = {}, href, target, ...props}) => {
    
    const baseColor = style['backgroundColor'] || '#000';
    const outlineColor = style['outlineColor'] || baseColor;

    const hoverColor = style['--hoverBackgroundColor'] || '#222';
    const outlineHoverColor = style['--hoverOutlineColor'] || hoverColor;

    const activeColor = style['--activeBackgroundColor'] || hoverColor;

    delete style['backgroundColor'];
    delete style['--hoverBackgroundColor']

    delete style['outlineColor'];
    delete style['--hoverOutlineColor']

    delete style['--activeBackgroundColor']

    const [activeLink, setActiveLink] = useState(false);

    const asLinkProps = (type == 'link') && {
        onMouseDown : (e) => {
            setActiveLink(true);
        },
        onMouseLeave : (e) => {
            setActiveLink(false);
        }
    }

    return (
        (type == 'link') ? 
        <Link
            className={[`${styles.button} ${activeLink && styles.buttonLinkActive} ${className}`]}
            style={{
                minHeight : 16,
                minWidth : 16,
                position: 'relative',
                ...style
            }}
            href={href}
            target={target}
            type={type}
            variant={variant}
            {...asLinkProps}
            {...props}
        >
            <ButtonBaseInternal baseColor={baseColor} hoverColor={hoverColor} outlineColor={outlineColor} outlineHoverColor={outlineHoverColor} activeColor={activeColor} contentContainerClass={contentContainerClass}>
                {children}
            </ButtonBaseInternal>
        </Link> :
        <button
            className={[`${styles.button} ${className}`]}
            style={{
                minHeight : 32,
                minWidth : 32,
                position: 'relative',
                ...style
            }}
            type={type}
            {...props}
        >
            <ButtonBaseInternal baseColor={baseColor} hoverColor={hoverColor} outlineColor={outlineColor} outlineHoverColor={outlineHoverColor} activeColor={activeColor} contentContainerClass={contentContainerClass}>
                {children}
            </ButtonBaseInternal>
        </button>
    )

}


const Button = ({style = {}, label, className, children, variant, ...props}) => {
    return (
        <ButtonBase
            style={style}
            type='button'
            className={className}
            {...props}
            variant={variant}
        >
            {
                children || <span>
                    {label}
                </span>
            }
            
        </ButtonBase>
    )
}

const ButtonLink = ({style = {}, label, href = '/', target = '', className, children, variant, props}) => {
    return (
        <ButtonBase
            style={style}
            type='link'
            href={href}
            target={target}
            className={className}
            {...props}
            variant={variant}
        >
            {
                children || <span>
                    {label}
                </span>
            }
        </ButtonBase>
    )
}

export {Button, ButtonLink, ButtonBase};