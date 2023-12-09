import React, { lazy, Suspense } from 'react';

const SvgIcon = ({ svgName }) => {

  const DynamicSvg = lazy(() => import(`../style/svgs/components/${svgName}`));

  return (
    <div style={{ paddingLeft: '10px', position: 'absolute' }}>
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicSvg />
      </Suspense>
    </div>
  );
};

export default SvgIcon;
