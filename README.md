components, and any things in vue

Пробуем идею множественных компонентов.
Идея матрешки:

- блок с выбором юзеров
    ```html
      <peoples v-bind:users="sources">

        <template v-slot:th-before>
          <vth v-bind:title="Check">
          </vth>
        </template>

        <template v-slot:td-before='props'>
          <vtd v-bind:item='props'>
          </vtd>
        </template>

      </peoples>
    ```

- блок с отрисовкой юзеров
    ```html
      <peoples v-bind:users="sources">

      </peoples>
    ```
