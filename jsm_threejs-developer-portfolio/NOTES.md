# Scaffolding Your First **Vite** Project

Specify the project within the Root folder "./"
```zsh
    $ npm create vite@latest ./
```

```zsh
    $ npm install
```
---

# Install Tailwind CSS with Vite

Install Tailwind CSS
```zsh
    > npm create vite@latest my-project -- --template react
    > cd my-project
```

Configure your template paths
```zsh
    /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
```

Add the Tailwind directives to your CSS (index.css)
```zsh
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

# Roouting with React router dom
```zsh
    npm install react-router-dom
```

Create Routing for the App starting with the navBar

```html
    import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'


const App = () => {
  return (
    <main className='bg-slate-300/20'>
        <Router>
            Navbar
            <Routes>
                <Route path='/' element={'Home'} />
                <Route path='/about' element={'About'} />
                <Route path='/projects' element={'Projects'} />
                <Route path='/contact' element={'Contacts'} />
            </Routes>
        </Router>
    </main>
  )
}
```
---
# Implementing the navBar with components folder /📂

src/components/Navbar.jsx




