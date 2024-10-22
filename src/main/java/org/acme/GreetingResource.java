package org.acme;

import jakarta.inject.Inject;
//import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import  java.util.List;


//import javax.inject.Inject;
//import javax.persistence.EntityManager;

@Path("/hello")
public class GreetingResource {

   // @Inject
    //EntityManager entityManager; //To inject EntityManager for database operations

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "Hello RESTEasy";
    }

    @Path("/personalized/{name}")
    @POST
    @Transactional
    @Produces(MediaType.TEXT_PLAIN)
    public String personalizedHello(@PathParam("name") String name) {
        UserName userName = new UserName(name);
        userName.persist();
        return " Hello "  + name + "! Your name has been stored in the database.";
    }
    @POST
    @Path("/personalized")
    @Produces(MediaType.TEXT_PLAIN)
    public String personalizedHelloPost(Person p) {
        return "Hello " + p.getFirst() + " " + p.getLast();
    }

    // Get all food items (GET)
    @GET
    @Path("/food")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Food> getAllFood() {
        return Food.listAll(); //entityManager.createQuery("SELECT f FROM Food f", Food.class).getResultList();
    }

    //Add food types (POST)
    @POST
    @Path("food")
    @Transactional
    @Consumes(MediaType.TEXT_PLAIN)
    public Response addFood(Food food) {
        food.persist();
        return Response.ok("Food item " + food.getName() + " has been added to the list!").build();
    }

    public static class  Person {
        private String first;
        private String last;

        public String getFirst() { return first; }
        public void setFirst(String first) { this.first = first; }
        public String getLast() { return last; }
        public void setLast(String last) { this.last = last; }
    }
}