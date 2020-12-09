# vue3
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
