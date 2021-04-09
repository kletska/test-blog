import React from 'react';
import './style.css';

type Props = {
    name: string,
    theme: string,
    id: number,
}

const NewsContainer: React.FC<Props> = ({name, theme, id}) => {
    return (
        <li className="news-container" key={id}>
            <div className="news-logo">

            </div>
            <div className="news-desc">
                <h1 className="news-label">
                    {name}
                </h1>
                <hr/>
                <h3 className="news-theme">
                    {theme}
                </h3>
            </div>
        </li>
    )
}

export default NewsContainer;