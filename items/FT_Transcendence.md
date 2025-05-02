# FT_Transcendence
## Transcendence is the final and most significant project of the commun tree at school 42. In a team of 4 students, we were tasked with developing a full Single Page Application (SPA), using Django for the backend and pure CSS/JS for the frontend (no frameworks allowed). For security and secret management, we implemented a WAF with ModSecurity and a Hardened Configuration as well as HashiCorp Vault. The website features a pong game that can be played both locally and remotly. User can also create tournaments with up to 20 players, fully managed in Python using WebSockets.

Features:
Django framework for the backend
Native JavaScript frontend
Single Page Application (SPA) architecture
Dockerized deployment
PostgreSQL as the database
Standard user management with a friendship system
OAuth 2.0 authentication via 42 API
Remote multiplayer with server-side rendering for games
Tournament creation and management
Game customization options
Real-time chat system
AI opponent
Dashboards for user and game statistics
Web Application Firewall (WAF) with ModSecurity and hardened configuration
HashiCorp Vault for secrets management
Microservices-based backend design

## Microservices

The website is desgined and structured as a fully microservices-based app. For example, The matchmaking system (used to play pong remotely) is separated from the game system. This means that if the game system crashes, the matchmaking system can continue to function normally, and the rest of the app remind operational. This architecture prevents the entire app from going down due to a single component failure or error. Additionnaly, it's much easier to maintain and scale as needed.