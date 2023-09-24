---
title: Ruby Backend Development
description: Reference on Ruby Backend Web Development with Sinatra and Rails
---

## Sinatra

Basic Syntax of Writing APIs in Sinatra
Sinatra is a lightweight web framework for Ruby, perfect for building APIs. Here's the basic syntax for creating a Sinatra application and defining API endpoints:

### Setting Up a Sinatra Application:

To create a Sinatra application, first, you need to require the Sinatra gem and define your application:

```ruby
require 'sinatra'
```

### Defining Routes:

Sinatra applications are built around routes. You can define routes using HTTP methods like get, post, put, delete, etc. For example:

```ruby
get '/api/resource' do
  # Handle GET requests for /api/resource
  # Return JSON data or perform other actions
end

post '/api/resource' do
  # Handle POST requests for /api/resource
  # Create a new resource
end

put '/api/resource/:id' do
  # Handle PUT requests for /api/resource/:id
  # Update an existing resource by ID
end

delete '/api/resource/:id' do
  # Handle DELETE requests for /api/resource/:id
  # Delete a resource by ID
end
```

### Request and Response Handling:

Inside each route block, you can access request parameters, headers, and bodies. You can return JSON responses using the content_type and to_json methods:

```ruby
get '/api/resource' do
  content_type :json
  { key: 'value' }.to_json
end
```

### Running the Application:

To start the Sinatra application, use the run! method:

```ruby
run!
```

### Creating a CRUD API with Sinatra and MongoDB
Now, let's see how to create a full CRUD API using Sinatra and MongoDB:

#### Setting Up MongoDB:

You'll need the mongo gem to interact with MongoDB. Install it with:

```ruby
gem install mongo
```

You'll also need to require the gem in your Sinatra app:

```ruby
require 'mongo'
```

#### MongoDB Connection:

Create a connection to your MongoDB database:

```ruby
# Replace with your MongoDB connection string
client = Mongo::Client.new('mongodb://localhost:27017/mydb')
```

#### CRUD Operations:

Define routes for each CRUD operation:

##### Create (POST):

```ruby
post '/api/resources' do
  content_type :json
  resource_data = JSON.parse(request.body.read)
  result = client[:resources].insert_one(resource_data)
  { message: 'Resource created', id: result.inserted_id }.to_json
end
```

##### Read (GET):

```ruby
get '/api/resources' do
  content_type :json
  resources = client[:resources].find.to_a
  resources.to_json
end

get '/api/resources/:id' do
  content_type :json
  resource = client[:resources].find(_id: BSON::ObjectId(params[:id])).first
  resource.to_json
end
```

##### Update (PUT):

```ruby
put '/api/resources/:id' do
  content_type :json
  resource_data = JSON.parse(request.body.read)
  result = client[:resources].find(_id: BSON::ObjectId(params[:id]))
                           .update_one('$set' => resource_data)
  { message: 'Resource updated', modified_count: result.modified_count }.to_json
end
```

##### Delete (DELETE):

```ruby
delete '/api/resources/:id' do
  content_type :json
  result = client[:resources].delete_one(_id: BSON::ObjectId(params[:id]))
  { message: 'Resource deleted', deleted_count: result.deleted_count }.to_json
end
```

#### Run the Sinatra Application:

After defining your routes, start the Sinatra application with run!.

Your Sinatra application is now a fully functional CRUD API that interacts with MongoDB. Make sure to replace 'mongodb://localhost:27017/mydb' with your MongoDB connection string and adjust the database and collection names as needed.

With this setup, you can create, read, update, and delete resources stored in MongoDB using HTTP requests to your Sinatra API endpoints.

#### Complete Example Code

```ruby
require 'sinatra'
require 'mongo'

# MongoDB connection setup
client = Mongo::Client.new(['127.0.0.1:27017'], database: 'my_db')
collection = client[:items]

# Create a new item
post '/items' do
  request.body.rewind
  data = JSON.parse(request.body.read)
  result = collection.insert_one(data)
  status 201
  { message: 'Item created', id: result.inserted_id }.to_json
end

# Get all items
get '/items' do
  items = collection.find.to_a
  items.to_json
end

# Get a specific item by ID
get '/items/:id' do
  item = collection.find(_id: BSON::ObjectId(params[:id])).first
  halt(404, 'Item not found') unless item
  item.to_json
end

# Update an item by ID
put '/items/:id' do
  request.body.rewind
  data = JSON.parse(request.body.read)
  result = collection.find(_id: BSON::ObjectId(params[:id]))
                      .update_one('$set' => data)
  halt(404, 'Item not found') unless result.modified_count.positive?
  { message: 'Item updated' }.to_json
end

# Delete an item by ID
delete '/items/:id' do
  result = collection.find(_id: BSON::ObjectId(params[:id])).delete_one
  halt(404, 'Item not found') unless result.deleted_count.positive?
  { message: 'Item deleted' }.to_json
end

# Run the Sinatra app
run Sinatra::Application
```

## Basics of Ruby on Rails
Ruby on Rails, often referred to as Rails or simply ROR, is a popular web application framework written in the Ruby programming language. Rails is designed to make web development easier by providing a set of conventions and tools for building robust, scalable, and maintainable web applications. In this section, we'll cover the basics of Ruby on Rails.

### What is Ruby on Rails?
Ruby on Rails, commonly known as Rails, is an open-source web framework that follows the Model-View-Controller (MVC) architectural pattern. It was created by David Heinemeier Hansson and released in 2005. Rails is known for its emphasis on convention over configuration, which means it comes with a set of sensible defaults and conventions that allow developers to build applications quickly without having to make many decisions about the application's structure.

### Key Concepts in Rails:
- **Model-View-Controller (MVC):** Rails follows the MVC pattern, which separates an application into three main components:

- **Model:** Represents the application's data and business logic. It interacts with the database.

- **View:** Handles the presentation and user interface of the application. It generates HTML and other output for the user.

- **Controller:** Manages the flow of data between the Model and View. It handles user requests, processes input, and updates the Model and View accordingly.

- **Convention over Configuration (CoC):** Rails provides sensible defaults and naming conventions for various aspects of an application, reducing the need for developers to specify configurations explicitly. This makes development faster and more efficient.

- **Don't Repeat Yourself (DRY):** Rails encourages developers to keep code concise and avoid duplication. Reusable components and the use of helpers promote DRY coding practices.

- **Active Record:** Rails includes an Object-Relational Mapping (ORM) library called Active Record. It simplifies database interactions by allowing developers to work with databases using Ruby classes and objects instead of writing raw SQL queries.

- **RESTful Routes:** Rails promotes the use of Representational State Transfer (REST) principles for designing clean and predictable URLs and actions. RESTful routes make it easy to create, read, update, and delete resources in the application.

### Getting Started with Rails:
To get started with Ruby on Rails, you need to follow these general steps:

- **Install Ruby:** Ensure that you have Ruby installed on your system. You can use a version manager like RVM or rbenv to manage different Ruby versions.

- **Install Rails:** Install the Rails gem using the RubyGems package manager by running gem install rails.

- **Create a New Rails Application:** Use the rails new command to generate a new Rails application skeleton. For example, rails new myapp will create a new Rails application named "myapp."

- **Generate Resources:** Rails provides generators to create models, controllers, views, and other components quickly. Use rails generate or its shorthand rails g to scaffold resources.

- **Database Configuration:** Configure your application's database settings in the config/database.yml file. Rails supports various databases, including PostgreSQL, MySQL, SQLite, and others.

- **Migrate the Database:** Create database tables and schemas using migrations. Run rails db:migrate to apply pending migrations.

- **Create Routes:** Define routes in the config/routes.rb file to map URLs to controller actions.

- **Create Controllers and Views:** Generate controllers and views for your application. Controllers handle user requests, while views render HTML templates.

- **Define Models:** Create models to interact with the database. Models are Ruby classes that inherit from ActiveRecord::Base.

- **Start the Server:** Use rails server or rails s to start the development server. You can access your application at http://localhost:3000 by default.

- **Develop and Test:** Write and test your application code. Rails comes with a built-in testing framework called Minitest.

- **Deploy:** Deploy your Rails application to a web server or hosting platform of your choice. Popular options include Heroku, AWS, and DigitalOcean.

### Benefits of Ruby on Rails:
- **Rapid Development:** Rails' conventions and generators enable developers to build applications quickly.
- **High Productivity:** The DRY principle reduces code duplication and maintenance efforts.
- **Strong Community:** Rails has an active and supportive community with numerous gems and resources available.
- **Scalability:** Rails applications can be scaled horizontally and vertically to handle increased traffic.
- **Security:** Rails includes security features like Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF) protection.

Ruby on Rails is a powerful web framework that has been used to build many successful web applications and startups. Learning Rails can be a valuable skill for web developers, especially those interested in building web applications efficiently and following best practices.

## Writing Routes in Rails

Writing Rails Routes for Templates and JSON
In Ruby on Rails, routes are defined in the config/routes.rb file. These routes map URLs to controller actions, allowing you to specify whether an action should render an HTML template or return JSON data. In this section, we'll explore how to write Rails routes for both templates and JSON responses.

### Defining Routes for Templates
Templates are typically used to render HTML views that display dynamic content to users. Here's how you can define a route that renders an HTML template:

Basic Route for HTML Template:

```ruby
# config/routes.rb
get '/posts', to: 'posts#index'
```

In this example, a GET request to /posts will route to the index action of the PostsController. The default behavior is to render an HTML template associated with the index action.

### Resourceful Route for Templates:

You can use Rails' resourceful routing to define routes for standard CRUD actions:

```ruby
# config/routes.rb
resources :posts
```

This single line of code generates routes for index, show, new, create, edit, update, and destroy actions in the PostsController. Each action is associated with its respective HTML template.

### Defining Routes for JSON Responses
When you want an action to return JSON data, you can specify the desired format in the route definition. Rails makes it easy to respond with JSON using the render method with the json: option. Here's how to define routes for JSON responses:

Custom JSON Route:

```ruby
# config/routes.rb
get '/api/posts', to: 'api/posts#index', defaults: { format: :json }
```

In this example, a GET request to /api/posts will route to the index action of the Api::PostsController, and the response will be in JSON format.

### Resourceful JSON Route:

Similar to HTML templates, you can use resourceful routing to define routes for JSON responses:

```ruby
# config/routes.rb
namespace :api do
  resources :posts, defaults: { format: :json }
end
```

This generates JSON routes for the index, show, new, create, edit, update, and destroy actions in the Api::PostsController.

Handling JSON Rendering in Controller Actions
To return JSON data from a controller action, use the render method with the json: option. Here's how to render JSON data in a controller action:

```ruby
# app/controllers/api/posts_controller.rb
class Api::PostsController < ApplicationController
  def index
    posts = Post.all
    render json: posts
  end

  # Other actions...
end
```

In this example, the index action fetches a collection of posts and renders it as JSON. Rails will automatically convert the posts object into JSON format.

Route Constraints and Advanced Configuration
Rails routes offer flexibility for handling different response formats based on various criteria, including request headers, query parameters, or custom constraints. You can use the constraints option in route definitions to further customize routing based on your application's requirements.

For instance, you can create routes that respond with JSON only when a specific query parameter is present or when an authentication token is provided in the request header. Constraints allow you to tailor your routes to meet specific conditions.

By understanding how to define routes for templates and JSON responses and how to handle JSON rendering in controller actions, you can create flexible and efficient APIs and web applications using Ruby on Rails.

## Writing Rails Controllers and Actions
In Ruby on Rails, controllers play a crucial role in handling incoming requests, processing data, and returning responses. This section provides an overview of writing Rails controllers and actions, including their syntax, CRUD operations for rendering templates and returning JSON, and sharing logic between controllers.

### Controller Syntax
Controllers in Rails are Ruby classes that inherit from ApplicationController. They contain action methods that correspond to different routes defined in your config/routes.rb file. Here's the basic syntax of a Rails controller:

```ruby
# app/controllers/posts_controller.rb
class PostsController < ApplicationController
  # Actions go here
end
```

### CRUD Operations for Rendering Templates
#### Index Action (Listing Records)
The index action typically lists all records of a resource. It renders an HTML template to display the records.

```ruby
def index
  @posts = Post.all
end
```

#### Show Action (Viewing a Record)
The show action fetches and displays a single record. It renders an HTML template to display the record details.

```ruby
def show
  @post = Post.find(params[:id])
end
```

#### New and Create Actions (Creating Records)
The new action displays a form for creating a new record, while the create action processes the form submission and creates the record in the database.

```ruby
def new
  @post = Post.new
end

def create
  @post = Post.new(post_params)
  if @post.save
    redirect_to @post, notice: 'Post was successfully created.'
  else
    render :new
  end
end
```

#### Edit and Update Actions (Updating Records)
The edit action displays a form for editing an existing record, and the update action processes the form submission and updates the record.

```ruby
def edit
  @post = Post.find(params[:id])
end

def update
  @post = Post.find(params[:id])
  if @post.update(post_params)
    redirect_to @post, notice: 'Post was successfully updated.'
  else
    render :edit
  end
end
```

#### Destroy Action (Deleting Records)
The destroy action deletes a record from the database.

```ruby
def destroy
  @post = Post.find(params[:id])
  @post.destroy
  redirect_to posts_url, notice: 'Post was successfully destroyed.'
end
```

### CRUD Operations for Returning JSON
To return JSON responses for CRUD operations, you can modify the controller actions as follows:

```ruby
class Api::PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]

  # ...

  def index
    @posts = Post.all
    render json: @posts
  end

  def show
    render json: @post
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render json: @post, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @post.destroy
    head :no_content
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :body)
  end
end
```

### Sharing Logic Between Controllers
To share logic between controllers, you can use various techniques:

#### Concerns
Rails provides concerns, which are modules that you can include in multiple controllers. Create a concern in the app/controllers/concerns directory and include it in your controllers as needed.

```ruby
# app/controllers/concerns/shared_logic.rb
module SharedLogic
  def common_method
    # Shared logic here
  end
end
```
```ruby
# app/controllers/posts_controller.rb
class PostsController < ApplicationController
  include SharedLogic

  def some_action
    common_method
    # Controller-specific logic
  end
end
```
#### Inheritance
You can create a base controller that contains shared logic and have other controllers inherit from it.

```ruby
# app/controllers/base_controller.rb
class BaseController < ApplicationController
  def common_method
    # Shared logic here
  end
end
```
```ruby
# app/controllers/posts_controller.rb
class PostsController < BaseController
  def some_action
    common_method
    # Controller-specific logic
  end
end
```
#### Helper Methods
You can define helper methods in the ApplicationController, which are then available in all controllers.

```ruby
# app/controllers/application_controller.rb
class ApplicationController < ActionController::Base
  helper_method :common_method

  def common_method
    # Shared logic here
  end
end
```
```ruby
# app/controllers/posts_controller.rb
class PostsController < ApplicationController
  def some_action
    common_method
    # Controller-specific logic
  end
end
```

## Active Record & Models in Ruby on Rails
Active Record is the Object-Relational Mapping (ORM) layer in Ruby on Rails, responsible for interacting with the database. In this section, we'll cover the fundamentals of working with Active Record, including configuring your database, creating models, using macros to define relationships and constraints, and performing migrations.

### Configuring Your Database
Ruby on Rails uses a configuration file to manage database settings. By default, it uses the config/database.yml file to specify the database configuration for different environments (development, test, production). Here's an example configuration for a PostgreSQL database:

```yaml
# config/database.yml

default: &default
  adapter: postgresql
  encoding: unicode
  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
  host: localhost
  username: your_username
  password: your_password

development:
  <<: *default
  database: your_app_development

test:
  <<: *default
  database: your_app_test

production:
  <<: *default
  database: your_app_production
  username: your_production_username
  password: your_production_password
```

You'll need to replace your_username, your_password, and the database names with your actual database credentials and names.

### Creating a Model
In Rails, models are Ruby classes that represent database tables. You can generate a new model using the rails generate model command. For example, to create a User model, run:

```shell
rails generate model User name:string email:string
```

This command generates a User model with name and email attributes of type string. The corresponding migration file is also created.

### Macros to Define Relationships and Constraints
Active Record provides macros to define relationships between models and specify constraints on the database schema. Here are some common macros:

#### Defining Relationships

##### 1. belongs_to
Use belongs_to to define a one-to-one or many-to-one association between models. For example, if a Comment belongs to a User, you can set up the relationship like this:

```ruby
# app/models/comment.rb
class Comment < ApplicationRecord
  belongs_to :user
end
```

##### 2. has_many
Use has_many to define a one-to-many or many-to-many association. If a User has many Comments, you can set it up like this:

```ruby
# app/models/user.rb
class User < ApplicationRecord
  has_many :comments
end
```

#### Adding Constraints
##### 1. Validations
Active Record provides various validation methods to add constraints to your models. For example, you can validate the presence and uniqueness of an attribute:

```ruby
class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
end
```

##### 2. Callbacks
You can use callbacks like before_save and before_validation to perform actions before or after a model is saved.

```ruby
class User < ApplicationRecord
  before_save :normalize_email

  private

  def normalize_email
    self.email = email.downcase
  end
end
```

### Migrations
Migrations are a way to evolve your database schema over time. Rails provides a command-line tool to generate and run migrations. To create a migration for the User model we generated earlier, run:

```shell
rails generate migration CreateUsers
```

This generates a migration file in the db/migrate directory. You can define the changes to your database schema in this file using Ruby code. For example, to create a users table with name and email columns, you can define the migration like this:

```ruby
# db/migrate/xxxxxxxxxxxxxx_create_users.rb

class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email

      t.timestamps
    end
  end
end
```

After defining the migration, run rails db:migrate to apply the changes to the database.

These are the essential concepts of working with Active Record in Ruby on Rails. Active Record simplifies database interactions and allows you to define models and relationships with ease, making database management more accessible in your Rails application.

## Rails CLI Commands

| Command                           | Purpose                                  | Syntax                                       | Example                                            |
| --------------------------------- | ---------------------------------------- | -------------------------------------------- | -------------------------------------------------- |
| `rails new <app_name>`            | Create a new Rails application          | `rails new <app_name>`                      | `rails new myapp`                                 |
| `rails server`                    | Start the Rails development server      | `rails server`                             | `rails server`                                    |
| `rails console`                   | Open a Rails console for the application | `rails console`                            | `rails console`                                   |
| `rails generate <generator>`      | Generate various Rails components       | `rails generate <generator> [options]`      | `rails generate model User name:string email:string` |
| `rails db:migrate`                | Run pending database migrations         | `rails db:migrate`                         | `rails db:migrate`                                |
| `rails db:rollback`               | Rollback the last database migration    | `rails db:rollback`                        | `rails db:rollback`                               |
| `rails generate migration <name>` | Generate a new database migration      | `rails generate migration <name>`          | `rails generate migration AddBioToUsers`          |
| `rails routes`                    | List all available routes               | `rails routes`                             | `rails routes`                                    |
| `rails db:seed`                   | Seed the database with sample data      | `rails db:seed`                            | `rails db:seed`                                   |
| `rails generate controller <name>`| Generate a new controller               | `rails generate controller <name> [actions]` | `rails generate controller Pages home about`       |
| `rails generate scaffold <name>`   | Generate a CRUD scaffold for a resource | `rails generate scaffold <name> [attributes]` | `rails generate scaffold Post title:string body:text` |
| `rails test`                      | Run tests for the application           | `rails test`                               | `rails test`                                      |
| `rails generate migration <name>` | Generate a new database migration      | `rails generate migration <name>`          | `rails generate migration CreateComments`        |
| `rails destroy <generator>`       | Remove generated code and files         | `rails destroy <generator>`                | `rails destroy model User`                        |
| `rails db:drop`                   | Drop the database                       | `rails db:drop`                            | `rails db:drop`                                   |
| `rails routes -c <controller>`    | List routes for a specific controller   | `rails routes -c <controller>`             | `rails routes -c Users`                           |
| `rails assets:precompile`         | Compile assets for production           | `rails assets:precompile`                  | `rails assets:precompile`                         |
| `rails generate migration <name>` | Generate a new database migration      | `rails generate migration <name>`          | `rails generate migration CreateCategories`      |
| `rails db:rollback STEP=<steps>`  | Rollback a specified number of steps    | `rails db:rollback STEP=<steps>`          | `rails db:rollback STEP=3`                       |
| `rails db:version`                | Display the current schema version      | `rails db:version`                        | `rails db:version`                                |
| `rails console --sandbox`         | Open a sandboxed Rails console          | `rails console --sandbox`                  | `rails console --sandbox`                         |
| `rails generate mailer <name>`    | Generate a new mailer                   | `rails generate mailer <name>`             | `rails generate mailer Notifications`             |
