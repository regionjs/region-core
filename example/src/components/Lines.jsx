import React, { Fragment } from 'react';

const Lines = ({ lines }) => (
  <Fragment>
    {lines && lines.map((f, index) => <p key={index || 0}>{f}</p>)}
  </Fragment>
);

export default Lines;
