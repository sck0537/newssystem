import style from './Child.module.scss'
function Child() {

    return <div>
        <ul>
            <li className={style.item}>5</li>
            <li className={style.item}>6</li>
            <li className={style.item}>7</li>
            <li className={style.item}>8</li>
        </ul>
    </div>
}
export default Child