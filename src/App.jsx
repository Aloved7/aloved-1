import React, { Component } from 'react';
import Img1 from './img/2.png';
import style from './css/public'
// css modules 会将css模块进行遍历 之后个每个选择器生成一个专属hash 然后添加到style对象内
export default class App extends Component {
    render() {
        return (
            <div>
                <h3 className={style.one}>App组件</h3>
                <img src={Img1} />
                <br />
                <span>good</span>
            </div>
        )
    }
}
