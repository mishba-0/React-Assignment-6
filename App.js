 const tabs = document.querySelectorAll('.tabs li');
  const boxes = document.querySelectorAll('.box');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active from all
      tabs.forEach(t => t.classList.remove('active'));
      boxes.forEach(b => b.classList.remove('active'));

      // Add active to selected
      tab.classList.add('active');
      const target = tab.getAttribute('data-WhatsApp');
      document.querySelector(`.box.${target}`).classList.add('active');
    });
  });

  // Chat Click to remove unread count
  const chatItems = document.querySelectorAll(".chats");

  chatItems.forEach(chat => {
    chat.addEventListener("click", () => {
      const unread = chat.querySelector(".unread-count");
      if (unread) {
        unread.remove();
      }

      chat.classList.remove("unread-open");
      // Optional: Show chat detail section
      // openChat(name);
    });
  });

  // Optional function if you want alert on open
  function openChat(name) {
    alert("Opening chat with " + name);
  }

   const chatItem = document.querySelectorAll('.chats');
  chatItems.forEach(chat => {
    chat.addEventListener('click', () => {
      const badge = chat.querySelector('.unread-count');
      if (badge) badge.remove();

      chat.classList.remove('unread-open');
    });
  });

    // Optional function if you want alert on open
  function openChat(name) {
    alert("Opening chat with " + name);
  }

   const chatIte = document.querySelectorAll('.chats');
  chatItems.forEach(chat => {
    chat.addEventListener('click', () => {
      const badge = chat.querySelector('.unread-count');
      if (badge) badge.remove();

      chat.classList.remove('unread-open');
    });
  });