import React from 'react';

const SvgIcon = ({ svgName }) => {

  const DynamicSvg = require(`../style/svgs/components/${svgName}`).default;

  return (
    <div style={{ paddingLeft: '10px', position: 'absolute' }}>
      <DynamicSvg />
    </div>
  );
};

export default SvgIcon;
