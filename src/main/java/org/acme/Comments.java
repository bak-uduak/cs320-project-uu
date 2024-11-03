// Comment.java
package org.acme;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import io.smallrye.common.constraint.NotNull;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotEmpty;

import java.time.LocalDate;

@Entity
public class Comments extends PanacheEntity {

    @NotNull
    @NotEmpty
    private String text;

    @NotNull
    private LocalDate datePosted;

    // Link each comment to a user
    @ManyToOne
    private UserName userName;

    // Getters and setters
// Getters and Setters
    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public LocalDate getDatePosted() {
        return datePosted;
    }

    public void setDatePosted(LocalDate datePosted) {
        this.datePosted = datePosted;

    }

    public
    UserName getUserName() {
        return userName;
    }

    public void setUserName(UserName userName) {
        this.userName = userName;
    }
}




//    public Long getId() { return id; }
//    public void setId(Long id) { this.id = id; }
//
//    public String getText() { return text; }
//    public void setText(String text) { this.text = text; }
//
//    public LocalDate getDatePosted() { return datePosted; }
//    public void setDatePosted(LocalDate datePosted) { this.datePosted = datePosted; }
//
//    public UserName getUserName() { return userName; }
//    public void setUserName(UserName userName) { this.userName = userName; }
//}



















