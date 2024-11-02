package org.acme;

import io.vertx.ext.auth.User;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Response;
import java.util.List;

@Path("/hello")
public class GreetingResource {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "Hello RESTEasy";
    }
    // Main creation in the DB
    @Path("/personalized")
    @POST
    @Produces(MediaType.TEXT_PLAIN)
    @Consumes(MediaType.APPLICATION_JSON)
    @Transactional

    public String personalizedHello(Person p) {

        // Debugging: Print the received first and last name
        System.out.println("Received First Name: " + p.getFirst());
        System.out.println("Received Last Name: " + p.getLast());


        // Create UserName instance from Person's first and last name
        UserName userName = new UserName(p.getFirst(), p.getLast());
        userName.persist();

        return "Hello " + p.getFirst() + " " + p.getLast() + " your account has been created successfully";
    }

    // Use GET request to retrieve names
    @GET
    @Path("/names")
    @Produces(MediaType.APPLICATION_JSON)
    public List<UserName> getALLNames() {
        return UserName.listAll();
    }

    // Use  GET request to retrieve certain names
    @GET
    @Path("/names/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getName(@PathParam("id") Long id) {
        UserName userName = UserName.findById(id);
        if (userName == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        return Response.ok(userName).build();
    }

    // Use PUT request to update a first and last name in the DB
    @PUT
    @Path("/names/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Transactional
   public Response getName(@PathParam("id") Long id, UserName updatedName) {
        UserName userName = UserName.findById(id);
        if (userName == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        userName.firstName = updatedName.firstName;
        userName.lastName = updatedName.lastName; // Update the name field directly
        return Response.ok(userName).build();
    }

    // Use DELETE request to remove a name from the DB
    @DELETE
    @Path("/names/{id}")
    @Transactional
    public Response deleteName(@PathParam("id") Long id) {
        UserName userName = UserName.findById(id);
        if (userName == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        userName.delete();
        return Response.noContent().build();
    }

    // Inner DTO class for handling POST request data
    public static class Person {
        private String first;
        private String last;

        // No-argument constructor
        public Person() {}


        // Use annotations to bind JSON properties to fields
        public String getFirst() {
            return first;
        }

        public void setFirst(String first) {
            this.first = first;
        }

        public String getLast() {
            return last;
        }

        public void setLast(String last){
            this.last = last;
        }
    }
}























