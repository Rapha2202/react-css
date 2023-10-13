import React from 'react';
import './App.scss'

function App() {

  return (
    <div className='card'>
      <img src="https://storage.googleapis.com/quest_editor_uploads/tNIUwxF60Mc1Ky5VvX95gtPmMxK1fiua.png" alt="Image de Presentation" />
      <div className='text-div'>
        <h1 className='title'>Title</h1>
        <h2 className='second-text'>Secondary text</h2>
        <p className='description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis tempore eius autem. Deserunt hic ducimus natus illum dolorum doloremque veritatis, consequuntur similique itaque adipisci atque quasi? Minima natus enim autem.</p>
        <hr />
        <h3 className='subtitle'>Subtitle</h3>
        <div className='items'>
          <div className='item1'>Item 1</div>
          <div className='item2'>Item 2</div>
          <div className='item3'>Item 3</div>
          <div className='item4'>Item 4</div>
        </div>
        <h4 className='action'>ACTION 1</h4>
      </div>
    </div>
  )
}

export default App
