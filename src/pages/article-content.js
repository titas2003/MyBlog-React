const ArticleContent = [
    {
        name: 'learn-react',
        title: 'The Fastest Way to Learn React',
        content: [
            `Welcome! Today we're going to be talking about the fastest way to
            learn React. React (also known as React.js or ReactJS) is an open-source, front end,
             JavaScript library[3] for building user interfaces or UI components. 
             It is maintained by Facebook and a community of individual developers and companies.
             [4][5][6] React can be used as a base in the development of single-page or mobile applications.
              However, React is only concerned with state management and rendering that state to the DOM, 
            so creating React applications usually requires the use of additional libraries for routing.
            [7][8] React Router[9] is an example of such a library.`,
            `Another notable feature is the use of a virtual Document Object Model, 
            or virtual DOM. React creates an in-memory data-structure cache, computes
            the resulting differences, and then updates the browser's displayed DOM efficiently.[11]. 
            This process is called reconciliation. This allows the programmer to write code as if the 
            entire page is rendered on each change, while the React libraries only render subcomponents 
            that actually change. This selective rendering provides a major performance boost. It saves the 
            effort of recalculating the CSS style, layout for the page and rendering for the entire page.`,
            `Lifecycle methods
            Lifecycle methods use a form of hooking that allows the execution of code at set points during a component's lifetime.
            
            shouldComponentUpdate allows the developer to prevent unnecessary re-rendering of a component by returning false if a render is not required.
            componentDidMount is called once the component has "mounted" (the component has been created in the user interface, often by associating it with a DOM node). This is commonly used to trigger data loading from a remote source via an API.
            componentWillUnmount is called immediately before the component is torn down or "unmounted". This is commonly used to clear resource-demanding dependencies to the component that will not simply be removed with the unmounting of the component 
            (e.g., removing any setInterval() instances that are related to the component, or an "eventListener" set on the "document" because of the presence of the component)
            render is the most important lifecycle method and the only required one in any component. It is usually called every time the component's state is updated, which should be reflected in the user interface.`,
        ]
    },    {
        name: 'learn-node',
        title: 'How to Build a Node Server in 10 Minutes',
        content: [
            `In this article, we're going to be talking looking at a very quick way
            to set up a Node.js server. We'll be discussing some topics such as proin congue
            ligula id risus posuere, vel eleifend ex egestas.`,
            `Node.js is a platform built on Chrome's JavaScript runtime for easily building fast 
             and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that 
             makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed
             devices.`,
        ]
    },     {
        name: 'my-thoughts-on-resume',
        title: 'My Thoughts on Resume',
        content: [
            `A resume is a formal document that a job applicant creates to itemize his or her qualifications for a 
            position. A resume is usually accompanied by a customized cover letter in which the applicant expresses an 
            interest in a specific job or company and draws attention to the most relevant specifics on the resume.`,
            `1. Choose the Right Resume Format.`,
            `2. Add Your Contact Information and Personal Details.`,
            `3. Start with a Heading Statement (Resume Summary or Resume Objective)`,
            `4. List Your Relevant Work Experience & Key Achievements.`,
            `5. List Your Education Correctly.`,
            `6. Put Relevant Skills that Fit the Job Ad.`,
            `7. Include Additional Important Resume Sections.`,
            
            
        ]
    },  
];

export default ArticleContent;
