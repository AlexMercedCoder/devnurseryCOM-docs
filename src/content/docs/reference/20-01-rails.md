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