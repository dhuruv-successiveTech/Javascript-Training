# Javascript-Training

Atomic Design :- 

    Atomic Design is a methodology for creating design system and UI components in a structure, reusable, and scalable way. It was introduced by Brad Frost and is widely used in modern frontend development, especially in frameworks like react, vue, angular etc.


    Atmoic design breaks the UI into 5 hierarchical levels, these are:- 
    1. Atoms : These are the basic building blocks, example:- Buttons, input fields, labels.
    2. Molecules :- Group of atoms working together eg. a form-input + label + error text  
    3. Organisms- :- Relatively complex group of UI elements (e.g navbar, card component).
    4. Templates :- Page level layouts using organisms, that defines the structure of code, but not the real content.
    5. Pages :- Real implementation of templates with actual content and data.

    Example Building a Login Form:- 

    * Atoms (HTML Elements)
        > Input
        > Label
        > Button

    * Molecule (Small Combinations)
        > FormGroup = Label + Input

    * Organism (Full Sections)
        > LoginForm = FormGroup + Button

    * Template (Layouts)
        > AuthPageTemplate = LoginForm + Logo + InfoText + Background

    * Page (Complete page)
        > LoginPage =   AuthPageTemplate with real text, links, data props etc  

    Advantages of Atomic Design

    * Promotes reusability and consistency.
    * Makes testing and documentation easier.


Twelve-Factor App :-

    The Tweleve-Factor App is a methodology designed to guide the development of software-as-a-service (SaaS) applications, particularly intended for deployment of modern cloud platforms.

    The 12 factors are :- 
    1. Codebase :- Maintain a single codebase tracked in version control, with many deploys. This ensures consistency accross different deployment environments.
    2. Dependencies :- Explicitly declare and isolate dependencies. 
    3. Configuration :- Store configuration in the environment. This practice allows for easy adaptation of the application to different environments without modifying the codebase.
    4. Backing Services :- Treat backing services such as databses, queues and caches as attached resources.
    5. Build, Release, Run :- Strictly separate te build, release and the run stages. This separation ensures a clear and reproducible deployment process.
    6. Processes :- Execute the application as one or more stateless processes. Any persistent data should be stored in backing services, not in the 

