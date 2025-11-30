# Portfolio

A clean, simple, and customizable portfolio built with React and Vite.

## How to Customize

All the content for this portfolio is located in a single file: `src/data/content.js`.

To update your information:

1.  Open `src/data/content.js`.
2.  Edit the fields in the `content` object.

### Adding Projects

To add a project, add an object to the `projects` array in `src/data/content.js`:

```javascript
projects: [
  {
    title: "My Awesome Project",
    description: "Description of the project.",
    link: "https://example.com",
    github: "https://github.com/username/repo"
  }
]
```

If the `projects` array is empty, a "Coming Soon" message will be displayed automatically.

### Adding Skills

To add skills, simply add strings to the `skills` array:

```javascript
skills: ["React", "JavaScript", "CSS", "Node.js"]
```

## Running Locally

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Start the development server:
    ```bash
    npm run dev
    ```

## Building for Production

To create a production build:

```bash
npm run build
```
