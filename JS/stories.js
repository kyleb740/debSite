// Toggle Add Story form
        const storyModal = document.querySelector(".newStory");
        const trigForm = document.querySelector(".trigForm");
        const close = document.querySelector(".closeForm");
        const form = document.querySelector('.storyForm');

        function toggleForm() {
            storyModal.classList.toggle("show-storyForm");
          }

        trigForm.addEventListener("click", toggleForm);
        close.addEventListener("click", toggleForm);
