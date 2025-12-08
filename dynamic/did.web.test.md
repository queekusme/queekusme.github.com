---
layout: did
permalink: /test/did.json
services:
  - id: "#exampleservice1"
    type: "LinkedDomains"
    serviceEndpoint: "https://queekus.com/"
  - id: "#exampleservice2"
    type: "example_LinkedDomains"
    serviceEndpoint:
      - "http://localhost:8000/"
      - "http://localhost:8080/"
  - id: "#exampledidcomm"
    type: "example_DIDCommMessaging"
    serviceEndpoint:
      uri: "http://example.com/didcomm"
      accept:
        - "didcomm/v2"
      routingKeys:
        - "did:example:123456789abcdefghi#key-1"
---