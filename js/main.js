// Shared navigation and page utilities
document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

// Academic planner: tasks persist in this browser using localStorage.
const taskForm = document.querySelector('#task-form');
if (taskForm) {
  const input = document.querySelector('#task-input');
  const list = document.querySelector('#task-list');
  const empty = document.querySelector('#empty-state');
  const taskCount = document.querySelector('#task-count');
  const completedCount = document.querySelector('#completed-count');
  const clearButton = document.querySelector('#clear-completed');
  const STORAGE_KEY = 'olusolaCos106Tasks';
  let tasks = [];
  try { tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; } catch { tasks = []; }

  function saveAndRender() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    list.innerHTML = '';
    tasks.forEach(task => {
      const item = document.createElement('li');
      item.className = `task-item${task.completed ? ' done' : ''}`;
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.completed;
      checkbox.setAttribute('aria-label', `Mark ${task.text} as completed`);
      checkbox.addEventListener('change', () => {
        task.completed = checkbox.checked;
        saveAndRender();
      });
      const text = document.createElement('span');
      text.textContent = task.text;
      const remove = document.createElement('button');
      remove.type = 'button';
      remove.className = 'delete-task';
      remove.textContent = 'Delete';
      remove.setAttribute('aria-label', `Delete ${task.text}`);
      remove.addEventListener('click', () => {
        tasks = tasks.filter(entry => entry.id !== task.id);
        saveAndRender();
      });
      item.append(checkbox, text, remove);
      list.append(item);
    });
    const completed = tasks.filter(task => task.completed).length;
    taskCount.textContent = `${tasks.length} task${tasks.length === 1 ? '' : 's'}`;
    completedCount.textContent = `${completed} completed`;
    empty.hidden = tasks.length > 0;
    clearButton.hidden = completed === 0;
  }

  taskForm.addEventListener('submit', event => {
    event.preventDefault();
    const text = input.value.trim();
    if (!text) { input.focus(); return; }
    tasks.push({ id: `${Date.now()}-${Math.random()}`, text, completed: false });
    input.value = '';
    saveAndRender();
    input.focus();
  });
  clearButton.addEventListener('click', () => {
    tasks = tasks.filter(task => !task.completed);
    saveAndRender();
  });
  saveAndRender();
}

// Contact form validation. This demo validates locally; it does not send messages.
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  const feedback = document.querySelector('#form-feedback');
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const phone = document.querySelector('#phone').value.trim();
    const message = document.querySelector('#message').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d+$/;
    let error = '';
    if (!name || !email || !phone || !message) error = 'Please complete every field.';
    else if (!emailPattern.test(email)) error = 'Please enter a valid email address.';
    else if (!phonePattern.test(phone)) error = 'Phone number must contain digits only.';
    if (error) {
      feedback.textContent = error;
      feedback.className = 'form-feedback error';
      return;
    }
    feedback.textContent = 'All fields are valid. This demonstration form does not send the message.';
    feedback.className = 'form-feedback success';
    contactForm.reset();
  });
}
