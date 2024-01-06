import style from './button.module.css';

export default function Button({ children, ...props }) {
    const {tag, width} = props;
    return (
        <button className={tag==='primary'?style.primary:style.secondary} style={{width}} >
         {children}
        </button>
    )
}

import PropTypes from 'prop-types';

Button.propTypes = {
  children: PropTypes.node.isRequired,
   tag: PropTypes.string,
   width: PropTypes.string
};