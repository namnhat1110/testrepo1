import React from 'react'
import Footer from './features/footer/Footer'
import Header from './features/header/Header'
import TodoList from './features/todos/TodoList'

// this is test subject clone from the demo app

function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>Redux Fundamentals Example</h1>
        </section>
      </nav>
      <main>
        <section>
          <h2>Todos List</h2>
          <div className="todoapp">
            <Header />
            <TodoList />
            <Footer />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
