import style from './button.module.css';

export default function Button({ children, ...props }) {
    const {tag, width, onClickCallback} = props;
    return (
        <button className={style[`${tag}`]} style={{width}} onClick={() => onClickCallback()}  >
         {children}
        </button>
    )
}

import PropTypes from 'prop-types';

Button.propTypes = {
  children: PropTypes.node.isRequired,
   tag: PropTypes.string,
   width: PropTypes.string,
   onClickCallback: PropTypes.func
};