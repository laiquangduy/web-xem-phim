import React from 'react';

function Testccol() {
    return ( <div className="container">
        <div className="row">
            <div className='col-sm-6 col-md-4 col-lg-3 ml-auto'>
            <p>This is a column that is 6 columns wide on small screens, 4 columns wide on medium screens, and 3 columns wide on large screens and above.</p>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3 mr-auto'>
            <p>This is a column that is 6 columns wide on small screens, 4 columns wide on medium screens, and 3 columns wide on large screens and above.</p>
            </div>
        </div>
    </div> );
}

export default Testccol;