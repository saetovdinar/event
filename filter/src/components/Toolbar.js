import { useState } from 'react';

function Toolbar(props) {

    const {filters, selected, onSelectFilter} = props;
  
    return (
      <div className="filters">
   
          {
            filters.map(function (item) {
                return (
                   
                    item === selected?
                    
                    <div onClick={onSelectFilter} className="filter_item selected">
                        {item}
                    </div>
                    :
                    <div onClick={onSelectFilter} className="filter_item">
                        {item}
                    </div>
                    
                )
            }
            )
          }
      </div>
    );
  }
  
  export default Toolbar;
  