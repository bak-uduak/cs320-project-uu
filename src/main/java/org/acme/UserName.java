package org.acme;
import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Entity;
import  jakarta.persistence.Table;

@Entity
@Table(name = "user_names")
public class UserName extends PanacheEntity {
    public String name;

    public UserName() {}

    public UserName(String name) { this.name = name; }

    @Override
    public String toString() { return name; }
}

// Food entity
//@Entity
//@Table(name = "food")
class Food extends PanacheEntity {
    public String name;

    public Food() {}

    public Food(String name) {
        this.name = name;
    }

    // Getter method for 'name'
    public String getName() {
        return name;
    }

    // Setter method for 'name'
    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return name;
    }
}