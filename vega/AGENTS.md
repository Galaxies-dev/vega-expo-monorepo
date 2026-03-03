

---

# Vega Platform Context


#react_native_for_vega_get_started.md

# React Native for Vega Projects - Architectural Implementation Guide for AI Agents

## Tools Information

-   **CRITICAL**: For ANY question, request, or task related to Vega app development (including architecture questions, code generation, debugging, app performance, crash debugging, or general inquiries), you MUST read the relevant linked documents FIRST before answering
-   AI agents can read any .md files referenced to get correct linked document information.
-   When answering questions related to sections that have linked documents, you MUST read the linked document first before answering
-   You MUST use the `read_document` tool from `@amazon-devices/amazon-devices-buildertools-mcp` MCP server to read markdown documents linked in this document
-   If unsure which document to read, start with the architecture document to understand the context
-   If a document is not found, use `list_documents` from `@amazon-devices/amazon-devices-buildertools-mcp` to list all available documents. Optionally add a parameter to the `list_documents` from 'KB', 'PROMPT', 'STEERING', 'WORKFLOW' to narrow the search.
-   You MUST confirm if `vega` or `kepler` command is valid before running any App development flows that require running `vega` or `kepler` commands. Run `which vega` or `which kepler` to confirm and if either commands are not valid then read `vega_sdk_installation.md` to install Vega SDK.
-   **For ALL Vega CLI commands:** See [Vega CLI Commands](#12-vega-cli-commands) for the mandatory 3-step workflow that MUST be followed before executing any CLI command. 

## Versioning Information

**CRITICAL FOR AI AGENTS**: React Native for Vega Development.

### React Native Version Selection Notes for AI Agents

**CRITICAL**: This guide provides exact steps to determine the React Native Version that must be used for development. NEVER skip these steps:

1. **Identify React Native Version** - Determine the React Native version from the existing package.json dependencies (e.g., 0.72, 0.83)
2. **Handling no User Specification for React Native Version** - Prompt user to provide React Native version if it cannot be determined
3. **Version-Specific Information** - Always refer to `react_native_for_vega_version_specific_knowledge_base.md` for version-specific configurations, dependencies, and templates

---

## Critical Implementation Notes for AI Agents

**IMPORTANT**: This guide provides exact implementation patterns. Follow these patterns precisely to avoid common failures:

1. **Never bundle React or React Native** - These are system-provided
2. **Implement headless services** - Recommended for media playback
3. **Use exact dependency versions** - Vega has strict compatibility requirements
4. **Follow the manifest.toml structure exactly** - Deviations will cause deployment failures
5. **Test on Vega Virtual Device** - Standard React Native testing is insufficient

---

## 1. Project Setup with Vega Templates

Using Vega CLI to generate new application projects from official templates (helloWorld) with proper validation steps. See [Vega CLI Commands](#12-vega-cli-commands) for the mandatory CLI command workflow.

---

## 2. React Native for Vega High-Level Architecture

System-bundled runtime architecture with split bundles, process pre-warming, and native service integration for optimized TV app performance

To learn more, read 'react_native_for_vega_architecture.md'

---

## 3. Technology Stack

Core dependencies and essential Vega libraries for TV-optimized development with version-specific requirements

To learn more, read 'react_native_for_vega_dependencies.md' and 'react_native_for_vega_version_specific_knowledge_base.md' for version-specific information

---

## 4. Vega-Specific Dependencies

### 4.1 User Interaction - D-Pad Navigation and Focus Management

Cartesian focus management for D-Pad navigation with TVFocusGuideView, focus indicators, and imperative focus control via FocusManager

To learn more, read 'react_native_for_vega_tv_app_focus_management.md'

### 4.2 Media and Playback

W3C MSE/EME standard media playback with DRM support, adaptive streaming, and VideoPlayer component for URL and MSE modes

To learn more, read 'react_native_for_vega_media_player.md'

### 4.3 Content Personalization

Integration with Amazon's content recommendation and user activity tracking via kepler-content-personalization package

To learn more, read 'react_native_for_vega_content_personalization.md'

### 4.4 Account and Authentication

Login with Amazon and account management using kepler-media-account-login and security-manager-lib packages

To learn more, read 'react_native_for_vega_account_authentication.md'

### 4.5 Navigation

Stack, tab, and drawer navigation using Amazon-specific @amazon-devices/react-navigation packages with TV-optimized focus management

To learn more, read 'react_native_for_vega_navigation.md'

### 4.6 Vega UI Components

High performance Vega UI Components with native bindings such as 'Carousel' from "amazon-devices/kepler-ui-components" library

To learn more, read 'react_native_for_vega_ui_components.md'

### 4.7 Vega Webview

Implementing a web view interface in React Native for Vega App.

To learn more, read 'react_native_for_vega_webview.md'

---

## 5. Application Components

Component types in manifest.toml including interactive (UI), service (headless), and task components with proper runtime-module configuration

To learn more, read 'vega_application_components.md'

---

## 6. App Manifest (manifest.toml) Details

Required configuration file for every Vega app, including package identifiers, system capabilities, privileges, and interface declarations used by Vega OS

To learn more, read 'vega_app_manifest.md'

---

## 7. React Native for Vega App Build & Deploy Steps

Complete build process, Fast Refresh setup, device management, architecture-specific installation, and deployment troubleshooting workflows

To learn more, read 'react_native_for_vega_app_build_and_install.md'

---

## 8. Headless Service Pattern

Singleton pattern implementation for background services (media playback, content personalization) with proper onStart/onStop lifecycle management

To learn more, read 'react_native_for_vega_headless_service_pattern.md'

---

## 9. Best Practices and Guidelines

Performance guidelines, development workflow, architecture recommendations, and critical pitfalls to avoid (bundling React, TV UX patterns, error handling)

To learn more, read 'react_native_for_vega_development_best_practices.md'

---

## 10. Migration Guide

Steps to migrate from standard React Native to Vega: updating dependencies, creating manifest.toml, implementing headless services, and adding TV navigation

To learn more, read 'react_native_for_vega_migration_guide.md'

---

## 11. Resources and References

### Official Documentation

-   Vega Developer Portal
-   React Native for Vega Architecture Guide
-   Vega API Reference

### Sample Projects

-   Vega Video App (reference implementation)
-   Vega Sample Apps Repository: https://github.com/AmazonAppDev/vega*

### Development Tools

-   Vega Studio (VSCode Extension)
-   Vega CLI (`kepler` command)
-   Vega Virtual Device

---

## 12. Vega CLI Commands

**🚨 CRITICAL WORKFLOW FOR AI AGENTS 🚨**

When ANY task involves Vega CLI commands (`vega` or `kepler`):

**STEP 1 (MANDATORY):** Read `vega_cli_commands_reference.md` 
- This is the base specification document
- Contains version info, user confirmation requirements, command structure
- **NEVER skip this step**

**STEP 2:** Read specific command document (e.g., `vega_cli_commands_reference.md`)
- Only after reading the base specification
- Get detailed options and examples

**STEP 3:** Propose values and get user confirmation
- Show proposed command with default values
- Wait for user approval before executing

**Failure to follow this 3-step workflow will result in incorrect command execution.**

To learn more, read `vega_cli_commands_reference.md` document to understand complete spec of kepler cli and vega cli commands. 

---

## 13. Complete Project Structure and Validation Checklist for AI Agents

Exact directory structure, critical file contents (index.js, service.js, manifest.toml), and comprehensive validation checklist before deployment

To learn more, read 'react_native_for_vega_project_structure.md'

---

## 14. UI Mockup Image to React Native for Vega App Components

Steps to convert UI interface mockup images to Vega App: generate vega react native components from UI mockup images

To learn more, read 'react_native_for_vega_generate_ui_components_from_mockups.md'

---

## 15. AI Assisted React Native Upgrades

**WHEN TO TRIGGER THIS WORKFLOW:**

You MUST trigger the React Native upgrade workflow when user's message contains ANY of these patterns:

**Trigger Phrases:**
- "upgrade" + "React Native" or "RN"
- "migrate" + version reference
- "update React Native version"
- "help me upgrade" + app/application/project
- Version transition patterns: "[old] to [new]", "[old] → [new]"

**Version Number Formats to Recognize:**
- Shorthand: "RN[XX]" (e.g., RN72, RN83, RN90)
- Abbreviated: "RN [X.Y]" or "version [X]"
- Full semantic: "React Native [X.Y.Z]" or "[X.Y]"
- Numeric only: "[X.Y]", "[X.Y.Z]"
- Minimal: "[XX]", ".[XX]"

**Pattern Matching Examples (version-agnostic):**
- "help me upgrade my application to RN[any_number]"
- "upgrade to React Native [any_version]"
- "I need to migrate from [old_version] to [new_version]"
- "update my app to version [number]"
- "help upgrade to the latest React Native"
- "migrate React Native [any] to [any]"

**When Triggered:**
Read and execute the workflow in 'react_native_for_vega_turn_based_rn_upgrade_workflow.md'

**Description:**
Generic turn-based workflow for React Native version upgrades with intelligent assistance. Supports any version range by discovering available knowledge files. Provides initialization, knowledge loading, automated TODO generation, and interactive step-by-step review with checkpointing and resume support.

---

# Vega Performance Analysis Guide

## Performance Question Quick Reference

**When users ask about these topics, read these documents FIRST:**

| User Question Contains | Read This Document |
|----------------------|-------------------|
| "re-rendering", "component re-render", "unnecessary renders" | `react_native_for_vega_detect_component_rerender.md` |
| "memory", "leak" | `vega_cli_commands_reference.md` |
| "optimization", "improve performance", "make faster" | `performance-display.md` |
| "build performance", "compilation slow" | `react_native_for_vega_app_build_and_install.md` |

---

**Document Version**: 5.1
**Last Updated**: Jan 23, 2026  
**Purpose**: AI Agent Implementation Guide for React Native for Vega App development
