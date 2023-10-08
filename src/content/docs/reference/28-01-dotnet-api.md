---
title: .NET CRUD APIs
description: Walks through how to Create CRUD APIs in .NET
---

# Step 1: Set Up Your Development Environment
Before you start, ensure you have the necessary development tools installed:

**Install Visual Studio:** Download and install Visual Studio if you don't already have it. Visual Studio is available for Windows and macOS.

## Step 2: Create a New .NET Project
**Create a New Project:** Open Visual Studio and create a new project using the following steps:

Go to File > New > Project...

Choose the appropriate template for your preferred language (C#, F#, or VB.NET) under the "Web" or "API" category.

Provide a project name and location, then click "Create."

## Step 3: Define the Data Model
Define Your Data Model: In your project, define the data model that represents the entity you want to manage. This model will typically be a class that includes properties corresponding to the entity's attributes.

Example (C#):

```csharp
public class Todo
{
    public int Id { get; set; }
    public string Title { get; set; }
    public bool Completed { get; set; }
}
```

Example (F#):

```fsharp
type Todo = {
    Id: int
    Title: string
    Completed: bool
}
```

Example (VB.NET):

```vbnet
Public Class Todo
    Public Property Id As Integer
    Public Property Title As String
    Public Property Completed As Boolean
End Class
```

## Step 4: Create a Data Access Layer

In a software application, the Data Access Layer (DAL) is responsible for abstracting and managing the interaction between the application and the database. It provides a structured way to perform CRUD (Create, Read, Update, Delete) operations on the database. In the context of creating a CRUD API, you need a DAL to handle the persistence of your entity (in this case, the "Todo" entity) to the database.

### Using Entity Framework Core (C# and VB.NET)
Entity Framework Core (EF Core) is a popular Object-Relational Mapping (ORM) framework for .NET that simplifies database access and management. It allows you to work with databases using object-oriented code.

Here's how to create a Data Access Layer using EF Core in C# and VB.NET:

**DbContext Class:** You start by creating a class that derives from DbContext. This class represents the database context and is responsible for managing database connections and entity sets.

```csharp
public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<Todo> Todos { get; set; }
}
```

In the code above:

ApplicationDbContext is a class that inherits from DbContext.

The constructor of ApplicationDbContext takes `DbContextOptions<ApplicationDbContext>` as a parameter and passes it to the base constructor.

`DbSet<Todo>` represents a table in the database that corresponds to the "Todo" entity.

**Configuring Database Connection:** In the Startup.cs file (or similar), you configure the database connection by providing the connection string and specifying the database provider (e.g., SQL Server, PostgreSQL, SQLite) to use.

Example (C# in Startup.cs):

```csharp
services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
```

Example (VB.NET in Startup.vb):

```vbnet
services.AddDbContext(Of ApplicationDbContext)(Function(options) _
    options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")))
```

Here, AddDbContext adds the ApplicationDbContext to the dependency injection container, allowing it to be injected into your controllers.

**Migrations:** After defining your DbContext and configuring the connection, you can create and apply migrations to create the database schema based on your entity model.

Example commands for C#:

```bash
dotnet ef migrations add InitialCreate
dotnet ef database update
```

Example commands for VB.NET:

```bash
dotnet ef migrations add InitialCreate
dotnet ef database update
```

These commands generate the necessary SQL scripts and update the database schema accordingly.

With this setup, your application can use the ApplicationDbContext to interact with the database, including performing CRUD operations on the "Todo" entity.

### Using F# Type Providers (F#)

In F#, you can use Type Providers to interact with databases without the need for an ORM like Entity Framework Core. Type Providers generate types and database access code based on the database schema.

Here's how to create a Data Access Layer using F# Type Providers:

**Database Connection:** In your F# project, you need to establish a connection to the database. F# Type Providers support various database providers like SQL Server, SQLite, and PostgreSQL.

Example (F#):

```fsharp
open FSharp.Data.Sql

[<Literal>]
let connectionString = "YourConnectionStringHere"

type DbSchema = SqlDataConnection<connectionString>
```

`FSharp.Data.Sql` provides SQL-related functionality.

`connectionString` should be replaced with your actual database connection string.

**Mapping to Entity:** You can use the type provider-generated types to map to your "Todo" entity. The exact syntax may vary based on the type provider and database provider used.

Example (F#):

```fsharp
let todos = DbSchema.GetDataContext().Todo |> Seq.toList
```

In this example, DbSchema.GetDataContext().Todo represents the "Todo" table, and you can query it as if it were a native F# collection.

**CRUD Operations:** You can perform CRUD operations using the generated types and write functions to encapsulate the logic.

Example (F#):

```fsharp
let addTodo (todo: Todo) =
    let context = DbSchema.GetDataContext()
    context.Insert(todo)
    context.SubmitUpdates()
```

Here, addTodo is a function that adds a new "Todo" to the database.

With F# Type Providers, you work directly with F# types that are generated based on your database schema, making it a convenient and type-safe way to interact with the database in F#.

These are the essential steps for creating a Data Access Layer in C#, VB.NET, and F# for your CRUD API project. Depending on your project requirements and preferences, you can choose between Entity Framework Core and F# Type Providers for database access.

## Step 5: Create API Endpoints
Creating API endpoints is a crucial step in building a CRUD (Create, Read, Update, Delete) API. These endpoints define the actions that clients can perform on your API, such as retrieving data, creating new records, updating existing records, and deleting records. Depending on your programming language (C#, VB.NET, or F#), you can use different frameworks and libraries to create these endpoints.

### Using ASP.NET Core (C# and VB.NET)
ASP.NET Core is a popular framework for building web APIs in C# and VB.NET. It provides a rich set of tools and libraries for creating robust and scalable APIs.

Here's how to create API endpoints using ASP.NET Core in C# and VB.NET:

#### Create a Controller Class: 
You start by creating a controller class that handles HTTP requests and defines the API endpoints.

Example (C#):

```csharp
[Route("api/todos")]
[ApiController]
public class TodoController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public TodoController(ApplicationDbContext context)
    {
        _context = context;
    }

    // Implement CRUD endpoints here
}
```

In this example, TodoController is an ASP.NET Core controller class that handles requests under the "api/todos" route. It inherits from ControllerBase, which provides the basic functionality needed for handling HTTP requests.

#### Define CRUD Endpoints: 
Inside the controller class, you define methods for handling CRUD operations. You can use attributes like `[HttpGet]`, `[HttpPost]`, `[HttpPut]`, and `[HttpDelete]` to define the routes and HTTP methods that trigger these methods.

Example (C#):

```csharp
[HttpGet]
public IActionResult GetAllTodos()
{
    // Implement logic to retrieve all todos
}

[HttpPost]
public IActionResult CreateTodo([FromBody] Todo todo)
{
    // Implement logic to create a new todo
}

[HttpPut("{id}")]
public IActionResult UpdateTodo(int id, [FromBody] Todo todo)
{
    // Implement logic to update an existing todo
}

[HttpDelete("{id}")]
public IActionResult DeleteTodo(int id)
{
    // Implement logic to delete a todo
}
```

In this example, GetAllTodos, CreateTodo, UpdateTodo, and DeleteTodo are controller methods that handle GET, POST, PUT, and DELETE requests, respectively. The `[HttpGet]`, `[HttpPost]`, `[HttpPut]`, and `[HttpDelete]` attributes define the corresponding HTTP routes.

#### Implement CRUD Logic: 
Inside each CRUD endpoint method, you implement the logic for performing the requested operation on the "Todo" entity. You can interact with your Data Access Layer (DAL) to read or modify data in the database.

### Using Suave or Giraffe (F#)
For F# projects, you have the flexibility to choose between different web frameworks like Suave and Giraffe. These frameworks provide lightweight and functional ways to create web APIs.

Here's how to create API endpoints using Suave or Giraffe in F#:

#### Define Routes: 
In F# projects, you define routes and handlers to create API endpoints. Suave and Giraffe allow you to create functional pipelines that process HTTP requests.

Example (F# using Giraffe):

```fsharp
open Giraffe

let todosApi : HttpHandler =
    path "api" >=> path "todos" >=> choose [
        GET >>= fun next -> // Handle GET request
            // Implement logic to retrieve all todos
            successfulResponse 200 "GET Todos"
        POST >>= fun next -> // Handle POST request
            // Implement logic to create a new todo
            successfulResponse 201 "Created Todo"
        PUT >>= fun next -> route(fun ctx ->
            // Handle PUT request with route parameters
            // Implement logic to update an existing todo
            successfulResponse 200 "Updated Todo"
        )
        DELETE >>= fun next -> route(fun ctx ->
            // Handle DELETE request with route parameters
            // Implement logic to delete a todo
            successfulResponse 204 ""
        )
    ]
```

In this example, todosApi defines the routes for handling GET, POST, PUT, and DELETE requests for the "Todo" entity.

#### Implement CRUD Logic: 
Inside each route handler, you implement the logic for performing the requested CRUD operation. You can use your Data Access Layer or other functions to interact with your database.

Using Suave or Giraffe in F# allows you to create web APIs with a functional and composable approach.

## Step 6: Configure Routing and Middleware
Configuring routing and middleware is a critical step in setting up the request-response pipeline of your web application. It determines how incoming requests are processed, routed to the appropriate endpoints, and how responses are generated.

### Using ASP.NET Core (C# and VB.NET)
In ASP.NET Core, you typically configure routing and middleware in the Startup.cs file. This is where you define how HTTP requests should be handled, what middleware should be applied, and how routes should be mapped to controller actions.

Here's how to configure routing and middleware in ASP.NET Core for C# and VB.NET:

**Configure Services:** In the ConfigureServices method of Startup.cs, you register services required for routing and middleware. This often includes adding the MVC 

(Model-View-Controller) framework, which is essential for defining controllers and routing.

```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddMvc(); // Register MVC services
    // Add other services as needed
}
```

**Configure Middleware:** In the Configure method of Startup.cs, you define the middleware pipeline. Middleware components are executed in the order they are added, allowing you to specify how requests should be processed.

```csharp
public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    if (env.IsDevelopment())
    {
        app.UseDeveloperExceptionPage();
    }
    else
    {
        app.UseExceptionHandler("/Home/Error");
        app.UseHsts();
    }

    app.UseHttpsRedirection();
    app.UseStaticFiles();

    // Configure routing
    app.UseRouting();

    // Configure middleware
    app.UseAuthentication();
    app.UseAuthorization();

    // Define endpoint routing
    app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllerRoute(
            name: "default",
            pattern: "{controller=Home}/{action=Index}/{id?}");
    });
}
```

In this example, various middleware components are added to the pipeline, such as error handling, HTTPS redirection, static file serving, authentication, and authorization. The app.UseRouting() method sets up routing for the application.

**Define Endpoint Routing:** The app.UseEndpoints method is used to define endpoint routing. It specifies how incoming requests should be mapped to controller actions based on URL patterns.

```csharp
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
        name: "default",
        pattern: "{controller=Home}/{action=Index}/{id?}");
});
```

In this case, requests are mapped to controller actions following a convention where the default controller is "Home," the default action is "Index," and an optional "id" parameter is allowed.

### Using F# with Suave or Giraffe
In F# projects using Suave or Giraffe, configuring routing and middleware is a bit different due to the functional nature of these frameworks. You typically configure routing and middleware within your F# application code.

Here's how to configure routing and middleware in F# using Giraffe as an example:

**Define Routes:** In F# using Giraffe, you define routes and handlers directly in your F# application code.

```fsharp
open Giraffe

let app =
    choose [
        GET >>= route "api/todos" GetAllTodos
        POST >>= route "api/todos" CreateTodo
        PUT >>= route (path "/api/todos/{id:int}") UpdateTodo
        DELETE >>= route (path "/api/todos/{id:int}") DeleteTodo
    ]
```
In this example, app defines the routing for different HTTP methods and routes.

**Configure Middleware:** Middleware components in Giraffe are often defined as part of your routing logic.

```fsharp
let errorHandler next ctx =
    // Define error handling logic
    // Call next to continue processing the request

let app =
    choose [
        error errorHandler
        GET >>= route "api/todos" GetAllTodos
        // Other routes...
    ]
```

Middleware components like error handling can be inserted into the routing pipeline using error.

## Step 7: Test Your API
**Test Your API:** Use tools like Postman, Insomnia, or curl to test your API endpoints. Verify that you can create, read, update, and delete records using your API.
## Step 8: Set Up a Database
**Set Up a Database:** If you're using Entity Framework Core, apply migrations to create and update your database schema based on your data models.

**C# and VB.NET:** Use Entity Framework Core migrations to apply changes to the database.

```bash
dotnet ef migrations add InitialCreate
dotnet ef database update
```

## Step 9: Run and Deploy Your API
Run Your API Locally: Use Visual Studio or the command line to run your API locally for testing and development.

**Deployment:** To deploy your API, host it on a server or a cloud platform like Azure, AWS, or Heroku, depending on your preferences.