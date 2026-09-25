import React from 'react'
import ChildComponent from './ChildComponent'

const App = () => {
  const user = {
    name: "Luven",
    section: "CSE-18",
    email: "lakshsharma32534@gmail.com"
  }

  return (
    <div>
      <ChildComponent user={user} />
    </div>
  )
}

export default App;