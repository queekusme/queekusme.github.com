---
layout: did
permalink: /.well-known/did.json
services:
  # - id: "#exampleservice1"
  #   type: "example_LinkedDomains"
  #   serviceEndpoint: "http://localhost/"
  # - id: "#exampleservice2"
  #   type: "example_LinkedDomains"
  #   serviceEndpoint:
  #     - "http://localhost:8000/"
  #     - "http://localhost:8080/"
  # - id: "#exampledidcomm"
  #   type: "example_DIDCommMessaging"
  #   serviceEndpoint:
  #     uri: "http://example.com/didcomm"
  #     accept:
  #       - "didcomm/v2"
  #     routingKeys:
  #       - "did:example:123456789abcdefghi#key-1"
methods:
  verificationMethod:
    - PQtUiJmmly_EWnwQMfPyiCGZwH55Uut36C6mWvJwNkc
    - S7hNt4YzeA2xi9qiiQqO6nyA4dwiduRV92CP6L2DC3M
  authentication:
    - "#PQtUiJmmly_EWnwQMfPyiCGZwH55Uut36C6mWvJwNkc"
    - "#S7hNt4YzeA2xi9qiiQqO6nyA4dwiduRV92CP6L2DC3M"
  assertionMethod:
    - "#PQtUiJmmly_EWnwQMfPyiCGZwH55Uut36C6mWvJwNkc"
    - "#S7hNt4YzeA2xi9qiiQqO6nyA4dwiduRV92CP6L2DC3M"
  keyAgreement:
    - "#PQtUiJmmly_EWnwQMfPyiCGZwH55Uut36C6mWvJwNkc"
    - "#S7hNt4YzeA2xi9qiiQqO6nyA4dwiduRV92CP6L2DC3M"
---