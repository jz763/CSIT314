package eventorganiser.Application.outboundservices;

import eventorganiser.domain.model.valueobjects.EventOrganiserId;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Map;

@Service
public class ExternalEventOrganiserService {
    private final RestTemplate restTemplate;

    public ExternalEventOrganiserService() {
        this.restTemplate = new RestTemplate();
    }

    public Map<String, Object> fetchExternalUser(EventOrganiserId eventOrganiserId) {
        String uri = UriComponentsBuilder
                .fromHttpUrl("http://external-service/api/eventOrganiser")
                .queryParam("eventOrganiserId", eventOrganiserId.getEventOrganiserId())
                .toUriString();

        ResponseEntity<Map<String, Object>> response = restTemplate.exchange(
                uri,
                org.springframework.http.HttpMethod.GET,
                null,
                new ParameterizedTypeReference<Map<String, Object>>() {
                }
        );

        if (response.getBody() == null) {
            throw new IllegalStateException("Failed to fetch external event organiser info");
        }

        return response.getBody();
    }
}
