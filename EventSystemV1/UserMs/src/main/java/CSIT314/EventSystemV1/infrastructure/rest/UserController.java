package CSIT314.EventSystemV1.infrastructure.rest;

import CSIT314.EventSystemV1.application.commandservices.UserCommandService;
import CSIT314.EventSystemV1.application.queryservices.UserQueryService;
import CSIT314.EventSystemV1.domain.model.commands.UserCommand;
import CSIT314.EventSystemV1.domain.model.entities.UserAttendee;
import CSIT314.EventSystemV1.domain.model.valueobjects.UserId;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/users")
public class UserController {

    private UserQueryService userQueryService;
    private UserCommandService userCommandService;

    public UserController(UserQueryService userQueryService, UserCommandService userCommandService)
    {
        this.userQueryService = userQueryService;
        this.userCommandService = userCommandService;
    }

    @PostMapping("/create")
    public UserId createUser(@RequestBody UserCommand userCommand) {
        return userCommandService.registerUser(userCommand);
    }

    @GetMapping("/findUser")
    @ResponseBody
    public UserAttendee findUser(@RequestParam("userId") String userId)
    {
        System.out.println("***** User userId *****" + userId);
        return userQueryService.findById(new UserId(userId));
    }

    @GetMapping("/findAll")
    @ResponseBody
    public List<UserAttendee> findAllUsers() {
        return userQueryService.findAll();
    }

    @GetMapping("findAllUserIds")
    @ResponseBody
    public List<UserId> findAllUserIds()
    {
        final List<UserId> userIdList = userQueryService.findAllUserIds();
        System.out.println("**** UserID ****");
        userIdList.forEach(x->System.out.println(x.getUserId()));
        return userIdList;
    }

    @DeleteMapping("/delete")
    public void deleteUser(@RequestParam("userId") String userId) {
        userCommandService.deleteUser(new UserId(userId));
    }
}
