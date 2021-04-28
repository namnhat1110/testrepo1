import React from 'react'
import { useDispatch } from 'react-redux'

const Header = () => {
  const [text, setText] = useState('')

  const handleChange = (e) => setText(e.target.value)

  const handleKeyDown = (e) => {
    // If the user pressed the Enter key:
    const trimmedText = text.trim()
    if (e.which === 13 && trimmedText) {
      alert('adding todo: ' + trimmedText)
    }
  }
  return (
    <header className="header">
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </header>
  )
}

export default Header
