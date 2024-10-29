package org.acme;
import io.quarkus.hibernate.orm.panache.PanacheEntity;
//import jakarta.persitence.Entity;
import jakarta.persistence.Table;

//@Entity
@Table(name = "user_names")
public class UserName extends PanacheEntity {
    //public String name;
    public String firstName;
    public String lastName;

    public UserName() {
    }
    //public UserName(String name) {
    public UserName(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        //this.name = name;
    }
    @Override
    public String toString() {
        return firstName + " "+ lastName;
    }
}

















