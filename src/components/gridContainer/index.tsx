import React from 'react';
import Card from '../card';
import './styles.css';

export default function GridContainer({data}: any) {
    return (
        <div className="grid-container-wrapper">
            {
                data && data.map((repo: any, idx: any) => {
                    return <Card key={idx} rank={idx + 1} repo={repo} />
                })
            }
        </div>
    )
}
