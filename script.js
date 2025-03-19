document.addEventListener('DOMContentLoaded', function() {
    // Get elements only if they exist to avoid errors
    const storyModal = document.getElementById('storyModal');
    const addStoryBtn = document.getElementById('addStoryBtn');
    const closeBtn = document.querySelector('.close');
    const submitStoryBtn = document.getElementById('submitStoryBtn');
    const storyContainer = document.getElementById('storyContainer');
    const storyTitleInput = document.getElementById('storyTitle');
    const storyContentInput = document.getElementById('storyContent');
    const forumPosts = document.getElementById('forumPosts');
    const newForumPost = document.getElementById('newForumPost');
    const postForumBtn = document.getElementById('postForumBtn');

    // Ensure that the elements exist before adding event listeners
    if (addStoryBtn && storyModal && closeBtn && submitStoryBtn && storyContainer && storyTitleInput && storyContentInput && forumPosts && newForumPost && postForumBtn) {
        
        // Show the modal when the "Add Story" button is clicked
        addStoryBtn.onclick = function() {
            storyModal.style.display = 'block';
        };

        // Close the modal when the "Close" button is clicked
        closeBtn.onclick = function() {
            storyModal.style.display = 'none';
        };

        // Close the modal if the user clicks outside of it
        window.onclick = function(event) {
            if (event.target === storyModal) {
                storyModal.style.display = 'none';
            }
        };

        // Submit the story and add it to the container
        submitStoryBtn.onclick = function() {
            const title = storyTitleInput.value.trim();  // Ensure no extra spaces
            const content = storyContentInput.value.trim();  // Ensure no extra spaces
            if (title && content) {
                const storyDiv = document.createElement('div');
                storyDiv.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
                storyContainer.appendChild(storyDiv);
                // Reset the form fields and close the modal
                storyTitleInput.value = '';
                storyContentInput.value = '';
                storyModal.style.display = 'none';
            } else {
                alert('Please provide both title and content for the story.');
            }
        };

        // Post a forum post
        postForumBtn.onclick = function() {
            const postContent = newForumPost.value.trim();  // Ensure no extra spaces
            if (postContent) {
                const postDiv = document.createElement('div');
                postDiv.innerHTML = `<p>${postContent}</p>`;
                forumPosts.appendChild(postDiv);
                newForumPost.value = '';  // Reset the input field
            } else {
                alert('Please enter some content for your forum post.');
            }
        };
    } else {
        console.error("One or more elements are missing from the DOM.");
    }
});
