import React from 'react';
import NewsContainer from '../../components/NewsContainer';
import './style.css';

const News: React.FC = (props) => {
    const test_news = [
        {name: 'I start my blog', theme: 'blog, projects, lifetime', id: 1},
        {name: 'I start my blog', theme: 'blog, projects, lifetime', id: 2},
        {name: 'I start my blog', theme: 'blog, projects, lifetime', id: 3},
        {name: 'I start my blog', theme: 'blog, projects, lifetime', id: 4},
        {name: 'I start my blog', theme: 'blog, projects, lifetime', id: 5},
        {name: 'I start my blog', theme: 'blog, projects, lifetime', id: 6},
    ]
    return (
        <ul className="News">
            {test_news.map(NewsContainer)}
        </ul>
    )
}

export default News;