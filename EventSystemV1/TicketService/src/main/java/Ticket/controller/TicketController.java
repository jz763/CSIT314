package ticket.controller;

import ticket.repository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/tickets")
public class TicketController {
    
    private TicketRepository ticketRepository;

    public TicketController(TicketRepository ticketRepository)
    {
        this.ticketRepository = ticketRepository;
    }

    @PostMapping("/createTicket")
    @ResponseBody
    public Ticket createTicket(@RequestParam int eventId, @RequestParam String attendeeName)
    {
        Ticket ticket = new Ticket(eventId, attendeeName);
        return ticketRepository.save(ticket);
    }

    @GetMapping("/findAllTicketIds")
    @ResponseBody
    public List<Integer> findAllTicketIds()
    {
        return ticketRepository.findAllTicketIds();
    }

    @GetMapping("/findByTicketId")
    @ResponseBody
    public Ticket findByTicketId(@RequestParam Integer ticketId)
    {
        return ticketRepository.findByTicketId(ticketId);
    }

    @GetMapping("/findAllTickets")
    @ResponseBody
    public List<Ticket> findAllTickets()
    {
        return ticketRepository.findAll();
    }

    @DeleteMapping("/deleteTicket")
    @ResponseBody
    public void deleteTicket(@RequestParam Integer ticketId)
    {
        Ticket ticket = ticketRepository.findByTicketId(ticketId);

        ticketRepository.delete(ticket);
    }
}
