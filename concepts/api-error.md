---
type: concept
domain: tools-platforms-infrastructure
tags:
  - "api-errors"
  - "http-status-codes"
  - "client-errors"
  - "server-errors"
  - "error-handling"
  - "retry-strategies"
  - "idempotency"
  - "exponential-backoff"
aliases:
  - "API Failure"
  - "HTTP Error"
  - "Integration Error"
  - "Request Failure"
summary: An API error is a failed client request to an interface, categorized by origin into client (4xx) or server (5xx) errors, requiring specific handling strategies like idempotency and exponential backoff.
updated: 2026-07-11
group: apis-integrations-mcp
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-11" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# API Error

An **[[concepts/api-failure|API Error]]** occurs when a client request to an Application Programming Interface fails to complete successfully, typically returning a non-2xx HTTP status code. Errors are categorized by their origin (client vs. server) and severity, guiding the appropriate retry or correction strategy.

## Classification

- **Client Errors (4xx)**: Issues originating from the requestor.
	- `400 Bad Request`: The server cannot process the request due to malformed syntax or invalid arguments.
	- `401 Unauthorized`: Missing or invalid [[concepts/authentication|authentication]] credentials.
	- `403 Forbidden`: Valid credentials but insufficient permissions.
	- `404 Not Found`: The requested resource does not exist.
	- `429 Too Many Requests`: Rate limit exceeded.
- **Server Errors (5xx)**: Issues originating from the service provider.
	- `500 Internal Server Error`: Generic server failure.
	- `502 Bad Gateway`: Invalid response from upstream server.
	- `503 Service Unavailable`: Server temporarily overloaded or down for maintenance.

## Handling Strategies

- **Idempotency**: Ensure safe retries for non-idempotent methods (e.g., `POST`) using unique request IDs.
- **Exponential Backoff**: Implement delay intervals between retries to avoid overwhelming the server during transient failures.
- **Logging & Monitoring**: Capture error codes, timestamps, and request payloads for [[concepts/debugging|debugging]].
- **[[concepts/user-feedback|User Feedback]]**: Translate technical errors into actionable user messages.

## Related Concepts

- HTTP Status Codes
- Retry [[concepts/open-source-philosophy|Logic]]
- API Rate Limiting
- JSON Schema Validation
