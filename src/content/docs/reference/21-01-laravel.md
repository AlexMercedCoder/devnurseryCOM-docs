---
title: PHP Backend Development
description: Reference on the PHP Backend Development
---

## Basics of PHP Laravel
Laravel is a popular open-source PHP web application framework known for its elegant syntax, robust features, and developer-friendly tools. It follows the Model-View-Controller (MVC) architectural pattern and provides a wide range of components and libraries for building web applications quickly and efficiently.

### Installing Laravel
To start working with Laravel, you need to have PHP and Composer (a PHP dependency manager) installed on your system. Here's how to install Laravel using Composer:

**Install Composer:** If you haven't already, download and install Composer from getcomposer.org.

**Create a New Laravel Project:** Open your terminal and run the following command to create a new Laravel project:

```bash
composer create-project laravel/laravel mylaravelapp
```

Replace mylaravelapp with your desired project name.

**Run the Development Server:** Navigate to your project folder and start the built-in Laravel development server using the following command:

``` shell
php artisan serve
```

Your Laravel application should now be accessible at http://localhost:8000 in your web browser.

### MVC Architecture
Laravel follows the MVC architectural pattern, which separates the application logic into three main components:

- **Model**: The Model represents the data and the business logic of the application. It interacts with the database to retrieve and manipulate data. In Laravel, models are typically stored in the app/Models directory.

- **View**: The View is responsible for presenting the data to the user. It contains the HTML templates and frontend components. Views in Laravel are usually stored in the resources/views directory.

- **Controller**: The Controller acts as an intermediary between the Model and the View. It receives incoming HTTP requests, processes them, interacts with the Model to retrieve or update data, and then passes the data to the View for rendering. Controllers are stored in the app/Http/Controllers directory.

### Routing

Laravel provides a powerful routing system that allows you to define how your application responds to HTTP requests. You can define routes in the routes/web.php file for web-based routes and routes/api.php for API routes.

Here's an example of a basic route definition:

```php
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
```

In this example, when a user accesses the root URL, Laravel will execute the closure function and return the welcome view.

### Blade Templating Engine
Laravel includes a powerful templating engine called Blade, which makes it easy to create dynamic and reusable views. Blade templates use the .blade.php file extension and allow you to include partials, conditionally display content, and more.

Example of displaying a variable in a Blade view:

```html
<h1>Welcome, {{ $name }}</h1>
```

### Eloquent ORM
Laravel's Eloquent ORM (Object-Relational Mapping) simplifies database interactions by allowing you to work with database tables as if they were PHP objects. You can define models to represent database tables and use Eloquent methods for querying and manipulating data.

Creating a new Eloquent model:

```bash
php artisan make:model Post
```

### Defining relationships between models:

```php
class User extends Model
{
    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}
```
### Middleware
Middleware in Laravel provides a way to filter HTTP requests entering your application. You can use middleware to perform tasks such as authentication, logging, and modifying the request or response objects. Laravel includes several built-in middleware and allows you to create custom middleware for your specific needs.

Example of applying middleware to a route:

```php
Route::get('/admin', function () {
    // This route is protected by the 'auth' middleware
})->middleware('auth');
```

### Authentication and Authorization

Laravel makes implementing user authentication and authorization straightforward. It includes pre-built authentication scaffolding and supports various authentication methods, such as password-based, socialite, and more.

Generating authentication scaffolding:

```shell
php artisan make:auth
```

Defining authorization policies:

```php
Gate::define('update-post', function ($user, $post) {
    return $user->id === $post->user_id;
});
```

### Artisan CLI
Laravel's Artisan command-line tool provides a wide range of helpful commands for tasks such as database migrations, model generation, and more. You can use Artisan to streamline various development processes.

Running database migrations:

```bash
php artisan migrate
```

Generating a new controller:

```bash
php artisan make:controller MyController
```

These are just some of the fundamental aspects of Laravel. The framework offers many more features and tools to help you build robust web applications efficiently. Whether you're creating a small project or a large-scale application, Laravel's flexibility and ease of use make it a popular choice among PHP developers.

## Basics of Routes and Controllers in Laravel
In Laravel, routes and controllers are essential components for defining how your application responds to incoming HTTP requests. They help organize and manage the logic of your application effectively. This guide will cover the basics of defining routes and controllers in Laravel.

### Routes
Routes in Laravel define the entry points of your application. They determine how different URLs should be handled by your application's logic. Routes can be defined in the routes/web.php and routes/api.php files, depending on whether you are creating web-based or API routes.

### Defining Routes
Here's how to define a basic route that responds to an HTTP GET request:

```php
Route::get('/welcome', function () {
    return 'Welcome to Laravel!';
});
```

In this example, when a user accesses the /welcome URL, Laravel executes the provided closure function and returns the text 'Welcome to Laravel!'.

### Route Parameters
You can define route parameters to capture values from the URL. These parameters are often used to retrieve specific data from the database or perform dynamic operations.

```php
Route::get('/users/{id}', function ($id) {
    // $id will contain the value from the URL
    return 'User ID: ' . $id;
});
```

### Named Routes
Named routes allow you to assign a unique name to a route, making it easier to generate URLs and redirects.

```php
Route::get('/dashboard', function () {
    // ...
})->name('dashboard');
```

You can generate URLs for named routes using the route() function:

```php
$url = route('dashboard'); // Generates the URL for the 'dashboard' route
```

### Controllers
Controllers in Laravel are responsible for handling the application's logic, including processing incoming requests, interacting with models, and returning views or JSON responses. Controllers are stored in the app/Http/Controllers directory.

#### Creating Controllers
You can create a new controller using the Artisan command-line tool:

```shell
php artisan make:controller MyController
```

This command generates a new controller file (MyController.php) in the app/Http/Controllers directory.

#### Controller Methods
Controllers consist of methods that handle specific actions. For example, a UserController might have methods like index() to list users, show() to display a single user, create() to show a user creation form, and so on.

```php
class UserController extends Controller
{
    public function index()
    {
        // Handle listing users
    }

    public function show($id)
    {
        // Handle displaying a user by ID
    }
}
```
#### Route-Controller Binding
To associate a route with a controller method, you can use the Route:: facade's controller() method:

```php
Route::get('/users', 'UserController@index');
```

In this example, when a user accesses the /users URL, Laravel will invoke the index() method of the UserController.

#### Resource Controllers
Laravel provides a convenient way to create resource controllers, which handle CRUD (Create, Read, Update, Delete) operations for a resource, such as users or posts. You can generate a resource controller using Artisan:

```shell
php artisan make:controller UserController --resource
```

This command generates a controller with methods for all standard CRUD operations, such as index(), show(), store(), update(), and destroy().

```php
class UserController extends Controller
{
    public function index()
    {
        // Display a list of users
    }

    public function create()
    {
        // Show the user creation form
    }

    public function store(Request $request)
    {
        // Handle user creation
    }

    public function show($id)
    {
        // Display a specific user
    }

    public function edit($id)
    {
        // Show the user edit form
    }

    public function update(Request $request, $id)
    {
        // Handle user updates
    }

    public function destroy($id)
    {
        // Delete a user
    }
```

These are the basics of working with routes and controllers in Laravel. Routes define how your application responds to URLs, and controllers handle the associated logic. By organizing your application in this way, you can create structured, maintainable, and efficient web applications.

## Models in Laravel
In Laravel, models are used to interact with your application's database tables. Models provide an object-oriented way to work with data, allowing you to perform database operations like creating, reading, updating, and deleting records. This guide will cover how to create models, create migrations to define database tables, and use models in controllers for CRUD (Create, Read, Update, Delete) operations.

### Creating Models
To create a model in Laravel, you can use the Artisan command-line tool. The following command generates a new model class in the app directory:

```bash
php artisan make:model Post
```

This command creates a Post.php file in the app directory, representing a model for the "posts" table. By convention, model class names should be in singular form and use CamelCase.

### Creating Migrations
Migrations in Laravel allow you to define the structure of your database tables and easily version control changes to the schema. To create a migration for a model, use the following Artisan command:

```shell
php artisan make:migration create_posts_table
```

This command generates a new migration file in the database/migrations directory, containing a skeleton for defining the "posts" table's structure.

You can open the generated migration file and define the table schema in the up method:

```php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('content');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
```

In this example, we define the "posts" table with columns for the post's title, content, and timestamps.

To run the migration and create the database table, use the following command:

```shell
php artisan migrate
```
Using Models in Controllers for CRUD Operations
Now that you have created a model and defined the database schema, you can use the model in your controllers to perform CRUD operations.

#### Create (Insert) a Record
To create a new record in the "posts" table, you can use the model's create method in your controller:

```php
use App\Models\Post;

public function store(Request $request)
{
    $data = $request->validate([
        'title' => 'required|string|max:255',
        'content' => 'required|string',
    ]);

    $post = Post::create($data);

    return redirect('/posts/' . $post->id);
}
```

#### Read (Retrieve) Records
To retrieve records from the "posts" table, you can use methods provided by the model. For example, to get all posts:

```php
use App\Models\Post;

public function index()
{
    $posts = Post::all();

    return view('posts.index', compact('posts'));
}
```

To retrieve a specific post by its ID:

```php
use App\Models\Post;

public function show($id)
{
    $post = Post::find($id);

    return view('posts.show', compact('post'));
}
```
#### Update a Record
To update an existing record, you can retrieve it using the model, modify its attributes, and then save it:

```php
use App\Models\Post;

public function update(Request $request, $id)
{
    $post = Post::find($id);

    $data = $request->validate([
        'title' => 'required|string|max:255',
        'content' => 'required|string',
    ]);

    $post->update($data);

    return redirect('/posts/' . $post->id);
}
```
Delete a Record
To delete a record, you can retrieve it using the model and call the delete method:

```php
use App\Models\Post;

public function destroy($id)
{
    $post = Post::find($id);

    $post->delete();

    return redirect('/posts');
}
```
These are the basics of working with models in Laravel. Models provide an elegant and efficient way to interact with your database, and they play a crucial role in building dynamic web applications.

## Laravel CLI Commands

| Command                                          | Purpose                                    | Example                                  |
| ------------------------------------------------ | ------------------------------------------ | ---------------------------------------- |
| `php artisan serve`                              | Start the development server.              | `php artisan serve`                     |
| `php artisan make:model ModelName`               | Generate a new Eloquent model.             | `php artisan make:model Post`           |
| `php artisan make:controller ControllerName`     | Generate a new controller.                | `php artisan make:controller PostController` |
| `php artisan make:middleware MiddlewareName`     | Generate a new middleware.                | `php artisan make:middleware AuthMiddleware` |
| `php artisan make:migration migration_name`      | Generate a new migration file.            | `php artisan make:migration create_posts_table` |
| `php artisan migrate`                            | Run pending database migrations.          | `php artisan migrate`                   |
| `php artisan db:seed`                           | Seed the database with records.           | `php artisan db:seed`                  |
| `php artisan make:factory FactoryName`           | Generate a new model factory.             | `php artisan make:factory PostFactory`  |
| `php artisan tinker`                            | Interact with the application in a REPL.  | `php artisan tinker`                   |
| `php artisan route:list`                        | List all registered routes.               | `php artisan route:list`                |
| `php artisan make:request RequestName`           | Generate a new form request class.        | `php artisan make:request StorePostRequest` |
| `php artisan make:resource ResourceName`         | Generate a new resource class.            | `php artisan make:resource PostResource` |
| `php artisan make:middleware MiddlewareName`     | Generate a new middleware.                | `php artisan make:middleware AuthMiddleware` |
| `php artisan make:auth`                          | Scaffold basic login and registration.    | `php artisan make:auth`                  |
| `php artisan make:mail MailClassName`            | Generate a new mailable class.            | `php artisan make:mail OrderShipped`     |
| `php artisan optimize`                           | Optimize the application for production.  | `php artisan optimize`                   |
| `php artisan make:command CommandName`           | Generate a new Artisan command.           | `php artisan make:command SendEmails`    |
| `php artisan config:clear`                      | Remove the configuration cache file.      | `php artisan config:clear`              |
| `php artisan view:clear`                        | Clear the compiled view files.            | `php artisan view:clear`                |
| `php artisan cache:clear`                       | Flush the application cache.              | `php artisan cache:clear`               |
| `php artisan queue:work`                        | Start processing queued jobs.             | `php artisan queue:work`                |
| `php artisan vendor:publish --provider=ProviderName` | Publish assets and configurations from a package. | `php artisan vendor:publish --provider=PackageServiceProvider` |

## Example on JSON API Controller

```php
<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $posts = Post::all();

        return response()->json(['data' => $posts], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|max:255',
            'content' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $post = Post::create($request->all());

        return response()->json(['data' => $post], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $post = Post::find($id);

        if (!$post) {
            return response()->json(['error' => 'Post not found'], 404);
        }

        return response()->json(['data' => $post], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'max:255',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $post = Post::find($id);

        if (!$post) {
            return response()->json(['error' => 'Post not found'], 404);
        }

        $post->update($request->all());

        return response()->json(['data' => $post], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $post = Post::find($id);

        if (!$post) {
            return response()->json(['error' => 'Post not found'], 404);
        }

        $post->delete();

        return response()->json(['message' => 'Post deleted successfully'], 204);
    }
}
```