package notification.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Notification")
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;

    @Column
    private String description;

    public Notification()
    {

    }
    
    public Notification(String description) 
    {
        this.description = description;
    }

    public void setDescription(String description) 
    {
        this.description = description;
    }

    public String getDescription()
    {
        return description;
    }
}
