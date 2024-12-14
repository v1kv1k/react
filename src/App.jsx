import { useState } from 'react'
import Button from './components/Button'
import Input from './components/Input'

function App() {
  const [inputValue, setInputValue] = useState('')

  const handleClick = () => {
    alert('Кнопку натиснуто!')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold mb-4">Мій React Проект</h1>
      
      <Input
        placeholder="Введіть текст..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      
      <Button 
        text="Натисни мене" 
        onClick={handleClick}
      />
    </div>
  )
}

export default App