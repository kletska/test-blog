import React from 'react';
import './style.css';

const Hello = (props) => {
    return (
        <div className="element-container">
            <img className="maid-pic" src={require('../../../public/hello.png')}alt="Search"/> 
            <div className="element-text">
                <h2>
                    Н-не то что я была рада, что ты зашел сюда, бака!
                </h2>
                <div>
                    Это сайт моего мастера, тут вы можете найти 4 раздела:<br/>
                    <p>
                        Это <b>Home</b> - пока вы находитесь тут, я позволю смотреть на себя, скольно захотите
                    </p>
                    <p>
                        <b>News</b> - раздел с новостями, которыми мой мастер делится со всем интернетом
                    </p>
                    <p>
                        <b>Researches</b> - рабочие заметки, он оставляет там свои достижения и материалы 
                    </p>
                    <p>
                        <b>About Me</b> - вся полезная информация про мастера
                    </p>
                    Так же справа в верху ссылка на другие важные сайты
                    <hr/>
                    А если это вы, мастер, то логиньтесь внизу и быстее работать!
                </div>
            </div>
        </div>
    );
}

export default Hello;