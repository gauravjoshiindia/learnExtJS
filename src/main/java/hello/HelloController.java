package hello;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class HelloController {
    
    @RequestMapping("/getUsers")
    public String index() {
        Data data = new Data();
        data.setSuccess(true);
        User user1 = new User("Gaurav Joshi","gaurav.joshi@ubs.com", true);
        User user2 = new User("Preeti Joshi", "glowingpeace@gmail.com", false);
        data.getUsers().add(user1);
        data.getUsers().add(user2);

        ObjectMapper mapper = new ObjectMapper();
        String stringData = null;
        try {
            stringData = mapper.writeValueAsString(data);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return stringData;
    }

    @RequestMapping(value = "/updateUser", method = RequestMethod.POST)
    public String updateUser(@RequestParam("users") String jsonData){
        System.out.println(jsonData);
        return jsonData;
    }

    @RequestMapping(value = "/createUser", method = RequestMethod.POST)
    public String createUser(@RequestParam("users") String jsonData){
        System.out.println(jsonData);
        return jsonData;
    }

    @RequestMapping(value="/removeUser", method = RequestMethod.POST)
    public String removeUser(@RequestParam("users") String jsonData){
        System.out.println("Inside Remove User --------------------" + jsonData);
        return jsonData;
    }

}
