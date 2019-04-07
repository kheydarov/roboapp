import React from 'react';
import Test from './Test';

const TestList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                       <Test 
                           key = {i}
                           id={robots[i].id} 
                           name={robots[i].name} 
                           email={robots[i].email}
                       />
                    );
                })
            }
        </div>
   );
}

export default TestList;