## Monash Edu

### Commit Message Convention

Please follow the commit message convention for this project. Use the following prefixes for your commit messages:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semi-colons, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Other changes that don't modify src or test files

Example commit messages:

- `feat: add user login functionality`
- `chore: update dependencies`

### Branch Naming Convention

When creating a new branch, use the following naming convention:

- `feat/your-feature-name` for new features
- `fix/your-bug-fix` for bug fixes
- `ui/your-ui-change` for UI changes etc

Example branch names:

- `feat/user-login`
- `fix/navbar-bug`
- `ui/about-page`

### Project Structure

This project is an HTML, CSS, and JavaScript website. The structure of the project is as follows:

- HTML pages will be in the root folder, e.g., `index.html`, `about.html`.
- CSS files will be in the `styles` folder, with the same name as the HTML page, e.g., `index.css`, `about.css`.
- JavaScript files will be in the `scripts` folder, with the same name as the HTML page, e.g., `index.js`, `about.js`.
- `script.js` in the `scripts` folder will contain reusable scripts like the navbar script and other reusable functions.
- `global.css` in the `styles` folder will contain global CSS styles.

### Including Global CSS

Don't forget to include `global.css` in your CSS files.

```css
@import url("./global.css");

/* Your CSS code here */
```

Also, include `script.js` in your HTML files.

```html
<script src="./scripts/script.js"></script>
```
