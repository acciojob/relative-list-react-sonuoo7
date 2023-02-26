import React from 'react'

const App = () => {
   const relatives = ['Aunt', 'Uncle', 'Cousin', 'Grandmother', 'Grandfather'];
  const relativeList = relatives.map((relative, index) => {
    const key = `relativeListItem${index}`;
    return <li key={key}>{relative}</li>;
  });
  return (
    <div id="main">
             <h2>Relatives to Visit</h2>
      <ol key="relativeList">
        {relativeList}
      </ol>
    </div>
  )
}

export default App
