---
type: concept
domain: tools-platforms
tags:
  - "continuous-integration"
  - "continuous-deployment"
  - "automation"
  - "pipelines"
  - "devops"
aliases:
  - "CI/CD"
  - "continuous-integration-continuous-deployment"
summary: This page is a placeholder for information regarding CI/CD pipelines.
updated: 2026-05-23
group: developer-tooling-clis
title: CI/CD Pipelines
---
# Cicd Pipelines

CI/CD pipelines are [[concepts/automations|automated systems]] that enable [[concepts/coding|software development]] teams to build, test, and deploy [[concepts/code|code]] changes with minimal manual intervention. CI/CD stands for Continuous [[concepts/integration|Integration]] and Continuous [[concepts/deployment|Deployment]] (or Continuous Delivery). These pipelines are fundamental to modern [[concepts/software|software]] development practices, allowing teams to release updates more frequently and reliably.

## Continuous Integration

Continuous Integration involves automatically [[concepts/testing|testing]] and integrating code changes into a shared repository multiple times per day. When a [[concepts/developer|developer]] [[concepts/commits|commits]] code, the pipeline triggers automated builds and test suites to verify that the new code does not break existing functionality. This approach catches integration problems early and maintains code quality throughout the development process.

## Continuous Deployment and Delivery

Continuous Delivery automates the release process so that tested code can be deployed to production [[concepts/assistive-technology|at]] any time, though deployment may still require manual approval. Continuous Deployment takes this further by automatically deploying every validated change to production without human intervention. The choice between these approaches depends on organizational risk tolerance and business requirements.

## Common Tools and Implementation

CI/CD pipelines are implemented using specialized platforms such as Jenkins, GitLab CI/CD, [[entities/github|GitHub]] Actions, and CircleCI. These tools orchestrate workflows that include code compilation, [[concepts/automated-software-testing|automated testing]], [[concepts/security|security]] scanning, and deployment steps. Configuration is typically managed through code [[concepts/files|files]] stored alongside the application, enabling teams to version [[concepts/power|control]] and review pipeline changes as part of the development process.
