const articles = [
  {
    id: 1,
    title: "Getting Started with React",
    description: "An introduction to React for beginners, covering the basics of components and props.",
    authorImg: "https://miro.medium.com/v2/resize:fill:176:176/1*YPRwtOeRYuUonnZUjBrEIQ.png",
    author: "John Smith",
    date: "2023-09-20",
    views: 200,
    likes: 35,
    image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*AFQ29SfdjBdj7NxKUXCHSw.jpeg",
    content: `
      <h2>What is React?</h2>
      <p>React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can change data, without reloading the page.</p>
      
      <h2>Components</h2>
      <p>Components are the building blocks of a React application. Each component is a self-contained piece of UI that can be reused throughout your application.</p>
      
      <h2>Props</h2>
      <p>Props (short for properties) are how we pass data from one component to another, allowing components to communicate with each other.</p>
      
      <h2>Conclusion</h2>
      <p>Understanding components and props is essential for building effective React applications.</p>
    `,
  },
  {
    id: 2,
    title: "Understanding State in React",
    description: "A beginner's guide to managing state in React components.",
    authorImg: "https://miro.medium.com/v2/resize:fill:176:176/1*YPRwtOeRYuUonnZUjBrEIQ.png",
    author: "Jane Doe",
    date: "2023-09-22",
    views: 220,
    likes: 40,
    image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*AFQ29SfdjBdj7NxKUXCHSw.jpeg",
    content: `
      <h2>What is State?</h2>
      <p>State is a built-in object in React that is used to contain data or information about the component's current situation.</p>
      
      <h2>Using useState Hook</h2>
      <p>The <code>useState</code> hook is used to declare state variables in functional components.</p>
      
      <h2>Example</h2>
      <pre>
        <code>
          import React, { useState } from 'react';
          
          function Counter() {
            const [count, setCount] = useState(0);
            
            return (
              &lt;div&gt;
                &lt;p&gt;Count: {count}&lt;/p&gt;
                &lt;button onClick={() => setCount(count + 1)}&gt;Increase&lt;/button&gt;
              &lt;/div&gt;
            );
          }
        </code>
      </pre>
      
      <h2>Conclusion</h2>
      <p>State management is a key aspect of React applications that allows for dynamic user experiences.</p>
    `,
  },
  {
    id: 3,
    title: "Handling Events in React",
    description: "Learn how to manage events in your React components effectively.",
    authorImg: "https://miro.medium.com/v2/resize:fill:176:176/1*YPRwtOeRYuUonnZUjBrEIQ.png",
    author: "Emily Johnson",
    date: "2023-09-25",
    views: 180,
    likes: 40,
    image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*AFQ29SfdjBdj7NxKUXCHSw.jpeg",
    content: `
      <h2>What are Events?</h2>
      <p>Events are actions that occur as a result of user interactions with the UI, such as clicks, key presses, and mouse movements.</p>
      
      <h2>Handling Events</h2>
      <p>In React, you can handle events by passing a function as a prop to the event handler.</p>
      
      <h2>Example</h2>
      <pre>
        <code>
          function handleClick() {
            alert('Button clicked!');
          }
        </code>
      </pre>
      
      <h2>Conclusion</h2>
      <p>Handling events is essential for creating interactive applications.</p>
    `,
  },
  {
    id: 4,
    title: "Using Effects in React",
    description: "Understanding the useEffect hook for side effects in React.",
    authorImg: "https://miro.medium.com/v2/resize:fill:176:176/1*YPRwtOeRYuUonnZUjBrEIQ.png",
    author: "Michael Brown",
    date: "2023-09-30",
    views: 250,
    likes: 50,
    image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*AFQ29SfdjBdj7NxKUXCHSw.jpeg",
    content: `
      <h2>What is useEffect?</h2>
      <p>The useEffect hook lets you perform side effects in your components. It runs after the render and can be used for data fetching, subscriptions, or manually changing the DOM.</p>
      
      <h2>Basic Usage</h2>
      <p>To use useEffect, simply import it and call it inside your functional component:</p>
      <pre>
        <code>
          import { useEffect } from 'react';
          useEffect(() => {
            // Code to run on component mount
          }, []);
        </code>
      </pre>
      
      <h2>Cleanup Effects</h2>
      <p>You can return a cleanup function to clean up resources when the component unmounts:</p>
      <pre>
        <code>
          useEffect(() => {
            // Code here
            return () => {
              // Cleanup here
            };
          }, []);
        </code>
      </pre>
      
      <h2>Conclusion</h2>
      <p>The useEffect hook is a powerful tool for managing side effects in React.</p>
    `,
  },
  {
    id: 5,
    title: "Conditional Rendering in React",
    description: "Learn how to conditionally render components in React.",
    authorImg: "https://miro.medium.com/v2/resize:fill:176:176/1*YPRwtOeRYuUonnZUjBrEIQ.png",
    author: "Sarah Connor",
    date: "2023-10-01",
    views: 300,
    likes: 45,
    image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*AFQ29SfdjBdj7NxKUXCHSw.jpeg",
    content: `
      <h2>What is Conditional Rendering?</h2>
      <p>Conditional rendering allows you to render different UI elements based on a condition. This can be achieved using JavaScript operators like if statements or the ternary operator.</p>
      
      <h2>Example</h2>
      <pre>
        <code>
          const isLoggedIn = true;
          
          return (
            &lt;div&gt;
              {isLoggedIn ? &lt;p&gt;Welcome back!&lt;/p&gt; : &lt;p&gt;Please log in.&lt;/p&gt;}
            &lt;/div&gt;
          );
        </code>
      </pre>
      
      <h2>Conclusion</h2>
      <p>Conditional rendering is a powerful feature that enhances user experience by displaying relevant information.</p>
    `,
  },
  {
    id: 6,
    title: "Forms in React",
    description: "Managing forms in React with controlled components.",
    authorImg: "https://miro.medium.com/v2/resize:fill:176:176/1*YPRwtOeRYuUonnZUjBrEIQ.png",
    author: "Alex Turner",
    date: "2023-10-05",
    views: 280,
    likes: 38,
    image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*AFQ29SfdjBdj7NxKUXCHSw.jpeg",
    content: `
      <h2>Controlled Components</h2>
      <p>In React, form elements such as input, textarea, and select can be controlled components. This means the value of the form element is controlled by React state.</p>
      
      <h2>Example</h2>
      <pre>
        <code>
          import React, { useState } from 'react';
          
          function MyForm() {
            const [inputValue, setInputValue] = useState('');
            
            const handleChange = (event) => {
              setInputValue(event.target.value);
            };
            
            return (
              &lt;form&gt;
                &lt;input type="text" value={inputValue} onChange={handleChange} /&gt;
              &lt;/form&gt;
            );
          }
        </code>
      </pre>
      
      <h2>Conclusion</h2>
      <p>Managing forms in React using controlled components allows for easier validation and manipulation of form data.</p>
    `,
  },
  {
    id: 7,
    title: "Lists and Keys in React",
    description: "Rendering lists in React and the importance of keys.",
    authorImg: "https://miro.medium.com/v2/resize:fill:176:176/1*YPRwtOeRYuUonnZUjBrEIQ.png",
    author: "Lisa White",
    date: "2023-10-10",
    views: 150,
    likes: 20,
    image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*AFQ29SfdjBdj7NxKUXCHSw.jpeg",
    content: `
      <h2>Rendering Lists</h2>
      <p>To render lists in React, you can use the <code>map()</code> function to iterate over an array and return a list of elements.</p>
      
      <h2>Importance of Keys</h2>
      <p>Keys help React identify which items have changed, are added, or are removed. They should be unique among siblings.</p>
      
      <h2>Example</h2>
      <pre>
        <code>
          const items = ['Item 1', 'Item 2', 'Item 3'];
          
          return (
            &lt;ul&gt;
              {items.map((item, index) => &lt;li key={index}&gt;{item}&lt;/li&gt;)}
            &lt;/ul&gt;
          );
        </code>
      </pre>
      
      <h2>Conclusion</h2>
      <p>Using lists and keys correctly can enhance performance and maintainability in React applications.</p>
    `,
  },
  {
    id: 8,
    title: "Context API for State Management",
    description: "Using the Context API to manage global state in React.",
    authorImg: "https://miro.medium.com/v2/resize:fill:176:176/1*YPRwtOeRYuUonnZUjBrEIQ.png",
    author: "Tom Hanks",
    date: "2023-10-15",
    views: 300,
    likes: 60,
    image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*AFQ29SfdjBdj7NxKUXCHSw.jpeg",
    content: `
      <h2>What is Context API?</h2>
      <p>The Context API allows you to share state across the entire app without passing props down manually at every level.</p>
      
      <h2>Creating Context</h2>
      <pre>
        <code>
          import React, { createContext, useContext, useState } from 'react';
          
          const MyContext = createContext();
          
          function MyProvider({ children }) {
            const [value, setValue] = useState('Hello, World!');
            return (
              &lt;MyContext.Provider value={{ value, setValue }}&gt;
                {children}
              &lt;/MyContext.Provider&gt;
            );
          }
        </code>
      </pre>
      
      <h2>Using Context</h2>
      <pre>
        <code>
          const { value } = useContext(MyContext);
        </code>
      </pre>
      
      <h2>Conclusion</h2>
      <p>The Context API is a powerful way to manage state across your application efficiently.</p>
    `,
  },
];

export default articles;