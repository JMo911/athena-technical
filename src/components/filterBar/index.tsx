import React, { useState } from 'react';
import './styles.css'

export default function FilterBar({data, updateLanguageSelection, selectedLanguage}: any) {
    const uniqueLanguages: any = ['All', 'No language specified'];
    data.forEach((repo: any) => {
        if (!uniqueLanguages.includes(repo['language']) && repo['language']) {
            uniqueLanguages.push(repo['language'])
        }
    })

    return (
        <div className='filter-bar-wrapper'>
            {
                uniqueLanguages.map((language: string, idx: any) => {
                return <button key={idx} className={"btn btn-info" + (selectedLanguage === language ? 'active' : '')} onClick={() => updateLanguageSelection(language)}>{language}</button>
                })
            }
        </div>
    )
}
