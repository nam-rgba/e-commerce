import style from './header.module.css';
import { MdGamepad } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function Header({page}){

    let link='/questions'
    if(page==2){
        link='/exits'
    }else if(page==1){
        link='/'
    }
    return (
        <div className={style.header}>
            <div className={style.left}>
                <MdGamepad size={40} />
                <div>
                    FAMILIES USING TECHNOLOGY SURVEY
                </div>
            </div>

            <div className={style.right}>
                <Link to={link}>I HAVE CHANGE MY MIND <IoIosArrowForward /> </Link>
            </div>

        </div>
    )
}