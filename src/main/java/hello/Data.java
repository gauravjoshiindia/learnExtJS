package hello;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by gauravjoshi on 8/5/2016.
 */
public class Data {

    private boolean success;
    private List<User> users;

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public List<User> getUsers() {
        if(this.users==null){
            this.users = new ArrayList<>();
        }
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }
}
