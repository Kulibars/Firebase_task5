import styles from "../styles/firebaseServerMainLayout.module.css";

export const PlaceholderServerMainLayout = ({
  searchTodos,
  onSearchTodoChange,
  // ============
  sortFlag,
  sortTodoClick,
  // ===============
  sortTodo,
  deleteTodo,
  AddTodoClick,
  onTodoChange,
  onTodoUpdateChange,
  addTodoUpdateClick,
}) => {
  return (
    <section className={styles.placeholderContainer}>
      <div className={styles.todosContainer}>
        <ol className={styles.todosTable}>
          {!sortFlag
            ? Object.entries(searchTodos).map(([id, { title }]) => (
                <div key={id} id={id} className={styles.todoContent}>
                  <li>
                    <a>{title}</a>
                  </li>
                  <div className={styles.buttonTask}>
                    <button
                      className={styles.buttonsS}
                      onClick={deleteTodo}
                      key={id}
                      id={id}
                    >
                      Удалить
                    </button>

                    <button
                      className={styles.buttonsS}
                      onClick={addTodoUpdateClick}
                      id={id}
                    >
                      Изменить
                    </button>
                    <input
                      className={styles.inputs}
                      id={id}
                      onChange={onTodoUpdateChange}
                    ></input>
                  </div>
                </div>
              ))
            : Object.entries(sortTodo).map(([id, { title }]) => (
                <div key={id} id={id} className={styles.todoContent}>
                  <li>
                    <a>{title}</a>
                  </li>
                  <div className={styles.buttonTask}>
                    <button
                      className={styles.buttonsS}
                      onClick={deleteTodo}
                      key={id}
                      id={id}
                    >
                      Удалить
                    </button>

                    <button
                      className={styles.buttonsS}
                      onClick={addTodoUpdateClick}
                      id={id}
                    >
                      Изменить
                    </button>
                    <input
                      className={styles.inputs}
                      id={id}
                      onChange={onTodoUpdateChange}
                    ></input>
                  </div>
                </div>
              ))}
        </ol>
      </div>

      <div className={styles.buttonContainer}>
        <div className={styles.controls}>
          <input
            className={styles.buttonContainer_inputs}
            onChange={onSearchTodoChange}
            placeholder="Поиск"
          ></input>

          <div className={styles.controls}>
            <button
              className={styles.buttonContainer_button}
              onClick={AddTodoClick}
            >
              ДОБАВИТЬ ЗАДАЧУ
            </button>
            <input
              className={styles.buttonContainer_inputs}
              onChange={onTodoChange}
            ></input>
          </div>

          <button
            className={styles.buttonContainer_button}
            onClick={sortTodoClick}
          >
            СОРТИРОВКА
          </button>
        </div>
      </div>
    </section>
  );
};
