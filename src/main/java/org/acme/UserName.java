package org.acme;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "user_names")
public class UserName extends PanacheEntity {
    public String firstName;
    public String lastName;

    // Default constructor for JPA
    public UserName() {
    }

    // Constructor with parameters for ease of instantiation
    public UserName(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;

    }
    @Override
    public String toString() {
        return firstName + " "+ lastName;
    }
}

















