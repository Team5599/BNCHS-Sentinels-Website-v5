'use client'

import {useState} from 'react';

import styles from './filterHeader.module.css';

const FilterTag = ({label, active, onClick}) => {
    return (
        <button className={`${styles.filterButton} ${active && styles.filterButtonActive}`} onClick={onClick}>
            <span>{label}</span>
        </button>
    )
}

const FilterTagDropdown = () => {
    return (
        <button className={styles.filterButtonDropdown}>
            <span>20XX Season</span>
        </button>
    )
}

const FILTERBUTTONS = [
    'Leadership',
    'Members',
    'Mentors'
]

const FilterHeader = () => {

	const [filterButtons, setFilterButtons] = useState([])

	return (
		<div className={styles.filterTagHeader}>
			{
                FILTERBUTTONS.map((tag) => {
                    return <FilterTag key={tag} label={tag} active={filterButtons.includes(tag)}/>
                })
                
            }
            <FilterTagDropdown/>
		</div>
	)
}
export default FilterHeader;