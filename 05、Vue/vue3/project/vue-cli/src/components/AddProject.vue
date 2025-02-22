<template>
  <div>
    <!-- 新增todo -->
    <input type="text" v-model="newTodo" @keyup.enter="addTodo" autofocus placeholder="新增今日待办"
      autocomplete="off">
    <!-- todo列表 -->
    <ul>
      <li v-for="todo in filterdTodos" :key="todo.id"
        :class="{completed:todo.completed,editing:todo===editedTodo}">
        <!-- 绑定完成状态 -->
        <div class="view">
          <input type="checkbox" v-model="todo.completed">
          <label @dblclick="editTodo(todo)">{{todo.title}}</label>
          <button @click="removeTodo(todo)">X</button>
        </div>
        <!-- 编辑待办 -->
        <input type="text" class="edit" v-model="todo.title" v-todo-focus="todo===editedTodo"
          @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)" @keyup.escape="cancelTodo(todo)">
      </li>
    </ul>
    <!-- 过滤 -->
    <p class="filters">
      <span @click="visibility='all'" :class="{selected:visibility==='all'}">所有</span>
      <span @click="visibility='active'" :class="{selected:visibility==='active'}">未完成</span>
      <span @click="visibility='completed'"
        :class="{selected:visibility==='completed'}">已完成</span>
    </p>
  </div>
</template>

<script>
import { reactive, toRefs, computed, watchEffect } from 'vue'

const filters = {
  all (todos) {
    return todos
  },
  active (todos) {
    return todos.filter(todo => !todo.completed)
  },
  completed (todos) {
    return todos.filter(todo => todo.completed)
  }
}

//缓存操作
const todoStorge = {
  fetch () {
    let todos = JSON.parse(localStorage.getItem('vue3-todos') || '[]')
    todos.forEach((todo, index) => {
      todo.id = index + 1
    })
    return todos
  },
  save (todos) {
    localStorage.setItem("vue3-todos", JSON.stringify(todos))
  }
}
export default {
  setup () {
    const state = reactive({
      newTodo: '',
      todos: todoStorge.fetch(),
      beforeEditCache: '',//缓存编辑前的title
      editedTodo: null,//正在编辑的todo
      visibility: 'all',
      filterdTodos: computed(() => {
        return filters[state.visibility](state.todos)
      })
    })
    function addTodo () {
      state.todos.push({
        id: state.todos.length + 1,
        title: state.newTodo,
        completed: false
      })
      state.newTodo = ''
    }
    function removeTodo (todo) {
      state.todos.splice(state.todos.indexOf(todo), 1)
    }
    function editTodo (todo) {
      state.beforeEditCache = todo
      state.editedTodo = todo
    }

    function cancelTodo (todo) {
      todo.title = state.beforeEditCache
      state.editedTodo = null
    }
    function doneEdit (todo) {
      state.editedTodo = null
    }

    watchEffect(() => {
      todoStorge.save(state.todos)
    })
    
    return {
      ...toRefs(state),
      addTodo,
      removeTodo,
      editTodo,
      cancelTodo,
      doneEdit,
    }
  },
  directives: {
    "todo-focus": (el, { value }, vnode) => {
      if (value) {
        el.focus();
      }
    }
  }
}
</script>

<style scoped>
.completed label {
  text-decoration: line-through;
}
.edit,
.editing .view {
  display: none;
}
.view,
.editing .edit {
  display: block;
}

.filters > span {
  padding: 2px 4px;
  margin-right: 4px;
  border: 1px solid transparent;
}
.filters > span.selected {
  border-color: rgba(173, 47, 47, 0.2);
}
</style>
