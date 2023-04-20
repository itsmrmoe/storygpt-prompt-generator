document.getElementById('story-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  const storyStructure = document.getElementById('story-structure').value;

  // Get the values of other fields (characters, action, locations, dialogs)

  const prompt = `Using the following story elements, create a short story in the given genre and structure:

Story Structure: ${storyStructure}
Characters:
- ...
- ...

Action: ...

Locations:
- ...

Dialogue:
- ...`;

  document.getElementById('generated-prompt').innerText = prompt;
});
