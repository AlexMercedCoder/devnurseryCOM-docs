---
title: Angular
description: A reference page on Angular
---

# Angular

Angular is a comprehensive development platform built on TypeScript. It provides a framework for building scalable web applications and offers a suite of tools and libraries for various features like routing, forms management, client-server communication, and more. If you're new to Angular and want to get started, this guide will help you take the first steps.

## What is Angular?
Angular is more than just a JavaScript framework; it's a full-fledged development platform for building web applications. Here are some key aspects of Angular:

- Component-Based Architecture: Angular applications are composed of components. Each component consists of a TypeScript class, an HTML template, and styles. Components are the building blocks of your application.

- Powerful Libraries: Angular provides a collection of well-integrated libraries that cover a wide range of functionalities. These libraries make it easier to handle tasks such as routing, form handling, and HTTP communication.

- Developer Tools: Angular comes with a suite of developer tools that assist in various aspects of the development process, including debugging, testing, and optimizing your code.

- Strong Typing with TypeScript: Angular is built on TypeScript, which is a statically typed superset of JavaScript. TypeScript brings strong typing, interfaces, and other modern language features to your Angular application.

- Large Community: Angular has a vast and active community of developers, library authors, and content creators, making it easier to find resources and support.

## Angular Applications: The Essentials
Before diving into Angular development, it's crucial to understand some core concepts that underlie Angular applications:

### Components
Components are the fundamental building blocks of an Angular application. Each component encapsulates a part of the user interface, along with its behavior. Components are created by defining a TypeScript class with a @Component() decorator. They include:

- A CSS selector that specifies how the component is used in templates.
- An HTML template that defines the component's view.
- Optional CSS styles for styling the component's elements.

Here's a minimal Angular component:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `
    <h2>Hello World</h2>
    <p>This is my first component!</p>
  `
})
export class HelloWorldComponent {
  // The code in this class drives the component's behavior.
}
```

You can use this component in your templates like this:

```html
<hello-world></hello-world>
```
Angular's component model promotes strong encapsulation, reusability, and testability.

### Templates
Every Angular component has an associated HTML template that defines how the component should be rendered. Templates can be defined inline within the component metadata or as separate HTML files. Angular templates are HTML extended with additional syntax for data binding and rendering dynamic content.

For example, you can use double curly braces `{{ }}` for interpolation to insert dynamic values from your component into the template:

```html
<p>{{ message }}</p>
```

The value for message comes from the component class:

```typescript
import { Component } from '@angular/core';

@Component ({
  selector: 'hello-world-interpolation',
  templateUrl: './hello-world-interpolation.component.html'
})
export class HelloWorldInterpolationComponent {
    message = 'Hello, World!';
}
```

Templates also support property bindings (`[property]="expression"`) and event bindings (`(event)="handler()"`) to interact with component logic.

### Dependency Injection
Angular employs dependency injection, a design pattern that allows you to declare the dependencies of your TypeScript classes without handling their instantiation manually. Angular takes care of creating and managing instances of dependencies. This approach promotes modularity, testability, and flexibility in your code.

Here's a simplified example of dependency injection in Angular:

```typescript
import { Component } from '@angular/core';
import { Logger } from './logger.service';

@Component({
  selector: 'hello-world-di',
  templateUrl: './hello-world-di.component.html'
})
export class HelloWorldDependencyInjectionComponent {
  count = 0;

  constructor(private logger: Logger) { }

  onLogMe() {
    this.logger.writeCount(this.count);
    this.count++;
  }
}
```
In this example, the Logger service is injected into the HelloWorldDependencyInjectionComponent. Angular manages the creation and availability of the Logger instance.

## Angular CLI
The Angular Command Line Interface (CLI) is a powerful tool that simplifies various tasks in Angular development. It provides commands for building, serving, generating code, running tests, and more. Here are some commonly used Angular CLI commands:

- ng build: Compiles an Angular application into an output directory.
- ng serve: Builds and serves your application, automatically rebuilding on file changes.
- ng generate: Generates or modifies files based on predefined schematics (e.g., components, modules).
- ng test: Runs unit tests for a given project.
- ng e2e: Builds, serves, and runs end-to-end tests.

The Angular CLI streamlines the development process and is highly recommended for Angular projects.

 