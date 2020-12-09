components, and any things in vue

Пробуем идею множественных компонентов.
Идея матрешки:

- блок с выбором юзеров
    
    <people :users='users'>
      <select title='header' :model='user'/>
    </people>

- блок с отрисовкой юзеров
    
    <people :users='users'>
    </people>
>>>>>>> c66c1baf42f7080745d59419f556131e1cdebcc2
