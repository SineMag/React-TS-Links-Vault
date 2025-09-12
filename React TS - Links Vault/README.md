### Links Vault - React TypeScript Project
A modern, responsive web application for storing and organizing your important links. Built with React, TypeScript, and Vite.


### Features
* 🔍 Search through your links by title, URL, description, or tags

* ➕ Add new links with title, URL, description, and tags

* 🏷️ Organize links with customizable tags

* 💾 Data persistence using localStorage

* 📱 Fully responsive design

* 🎨 Clean, modern UI with Bootstrap styling

* ⚡ Fast development with Vite

### Tech Stack
* Frontend Framework: React 18

* Language: TypeScript

* Build Tool: Vite

* Styling: Bootstrap 5 + Custom CSS

* Icons: React Icons

* State Management: React useState & useEffect hooks

### Prerequisites
Before running this project, make sure you have the following installed:

```Node.js (version 14 or higher)```

```npm (node package manager)```

#### Installation
1. Clone the repository
``` bash
# git clone <your-repository-url>
cd links-vault 
```

2. Install dependencies
``` bash
npm install
```

3. Install React Icons

```bash
npm install react-icons
```

4. () Install Bootstrap
```bash
npm install bootstrap
```

5. Start the development server
```bash
npm run dev
```

### Project Structure
```
 src/
├── components/
│   ├── Header.tsx
│   ├── LinkForm.tsx
│   ├── LinkCard.tsx
│   ├── LinksSection.tsx
│   └── Footer.tsx
├── types/
│   └── Link.ts
├── hooks/
│   └── useLocalStorage.ts
├── App.tsx
├── main.tsx
└── index.css
```

### Usage
**Adding a new link:**

* Fill in the required fields (Title, URL, Description)

* Add optional tags separated by commas

* Click "Save Link" to add it to your collection

**Searching links:**

* Use the search bar at the top to filter links by any field

* The search is case-insensitive and matches against title, URL, description, and tags

**Managing links:**

* View all your links in the card layout

* Delete links using the trash icon

* Click on any link to open it in a new tab

### Customization
* You can customize the application by:

* Modifying the color scheme in index.css

* Adding new fields to the Link type in types/Link.ts

* Changing the layout in the component files

* Adding new functionality to the custom hooks

### Browser Support
This application supports all modern browsers including:
```
Chrome (latest)

Firefox (latest)

Safari (latest)

Edge (latest)
```

### Contributing
Fork the repository

Create a feature branch (git checkout -b feature/amazing-feature)

Commit your changes (git commit -m 'Add some amazing feature')

Push to the branch (git push origin feature/amazing-feature)

Open a Pull Request

### License
This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgments
Icons provided by React Icons

UI components styled with Bootstrap

Built with Vite for fast development

Support
If you have any questions or issues, please open an issue on the [GitHub ](https://github.com/SineMag/React-TS-Links-Vault.git) repository

Happy organizing! 📚