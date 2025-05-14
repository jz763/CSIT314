package CSIT314.EventSystemV1.application.outboundservices;

import CSIT314.EventSystemV1.domain.model.valueobjects.UserId;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Map;

@Service
public class ExternalUserService {

    private final RestTemplate restTemplate;

    public ExternalUserService() {
        this.restTemplate = new RestTemplate();
    }

    public Map<String, Object> fetchExternalUser(UserId userId) {
        String uri = UriComponentsBuilder
                .fromHttpUrl("http://external-service/api/user")
                .queryParam("userId", userId.getUserId())
                .toUriString();

        ResponseEntity<Map<String, Object>> response = restTemplate.exchange(
                uri,
                org.springframework.http.HttpMethod.GET,
                null,
                new ParameterizedTypeReference<Map<String, Object>>() {}
        );

        if (response.getBody() == null) {
            throw new IllegalStateException("Failed to fetch external user info");
        }

        return response.getBody();
    }
}
