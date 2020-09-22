import React from 'react';
import './styles.css';

export default function Card({ repo, rank }: any) {
    return (
        <div className='card-wrapper'>
            <div className="card">
            <div className="card-body">
                <h4 className="card-title">#{rank}</h4>
                <img src={repo['owner']['avatar_url']} alt={repo['name']} className='repo-image' />
                <h5 className="card-title repo-name">{repo['name']}</h5>
                
                <h6 className="card-subtitle mb-2 text-muted">@{repo['owner']['login']}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{repo['stargazers_count']} stars</h6>

                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a> */}
            </div>
            </div>
        </div>
    )
}
