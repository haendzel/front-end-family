import React from 'react';

import './styles.pcss'

const NotFound500 = () =>
    <div className="fe-container">
	<div className="section animated tada" id="error500">
            <div className="window">
            <div className="window-header"><span>Server Error 500</span></div>
            <div className="window-inner">
            <h2>500</h2>
            <h1>Internal Server Error</h1>
            <p>Sorry, something went wrong.</p>
            <p>Try to refresh this page or feel free contact us if the problem persists.</p>
            </div>
            </div>
            </div>
    </div>

export default NotFound500;
