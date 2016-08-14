package hello;

/**
 * Created by gauravjoshi on 8/5/2016.
 */
public class User {
    public User(String email, String name, boolean active) {
        this.email = email;
        this.name = name;
        this.active = active;
    }

    private String name;
    private String email;
    private boolean active;

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
