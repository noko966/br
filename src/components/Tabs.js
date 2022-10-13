import React, {forwardRef} from 'react';
import cn from 'classnames';

const Tabs = ({ className, children, ...restProps }, ref) => {
  const containerCn = cn({
    'd-flex': true,
    [className]: !!className
  });
  return <div ref={ref} className={containerCn} {...restProps}>{children}</div>;
};

export default forwardRef(Tabs);
