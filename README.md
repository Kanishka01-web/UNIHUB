# UNIHUB



An AI-powered university knowledge and student engagement platform designed to centralize academic resources, student communities, events, and personalized university information in one platform.



> **Status:** Active development - frontend foundation implemented; backend, database, authentication, and AI modules are planned for subsequent development.



---



## Overview



UNIHUB is a university-focused digital platform intended to provide students with a single place to discover and interact with academic and extracurricular resources.



The platform is being developed around four major goals:



- Centralize university knowledge and learning resources

- Improve student participation in clubs, communities, and events

- Provide personalized academic and extracurricular recommendations

- Enable intelligent knowledge discovery through semantic search and AI-powered retrieval



The project follows a modular architecture so that the frontend, backend, database, and AI components can be developed and integrated independently.



---



## Current Implementation



The current version focuses on establishing the frontend architecture and core user-facing experience.



### Implemented



- React + TypeScript frontend

- Vite development environment

- Tailwind CSS styling

- shadcn/ui component setup

- React Router navigation

- Reusable component-based architecture

- Dashboard interface

- Knowledge Hub interface

&#x20; - Search

&#x20; - Category filtering

&#x20; - Bookmark interaction

&#x20; - Empty-result state

- Clubs \& Communities interface

&#x20; - Search

&#x20; - Category filtering

&#x20; - Join/Joined interaction

- Events \& Activities interface

&#x20; - Search

&#x20; - Category filtering

&#x20; - Event registration interaction

&#x20; - Empty-result state

- Profile interface

&#x20; - Personal information

&#x20; - Activity statistics

&#x20; - Preference controls

&#x20; - Notification toggle

&#x20; - Save interaction

- Responsive page layouts

- Production build configuration



### Currently Under Development



The following components are part of the planned full UNIHUB system and are not yet integrated into the current frontend:



- User authentication and authorization

- JWT-based authentication

- FastAPI backend

- PostgreSQL database

- pgvector-based vector storage

- OpenAI API integration

- Sentence Transformers

- LangChain

- Retrieval-Augmented Generation (RAG)

- Semantic search

- Recommendation system

- WebSocket-based real-time functionality

- Backend API integration

- Persistent user data



---



## Core Modules



UNIHUB is organized around six primary user-facing modules:



### 1. Authentication \& User Management



Provides secure user access and user-specific platform functionality.



Planned technologies include JWT-based authentication and a FastAPI backend.



### 2. Dashboard



The central student workspace providing quick access to:



- University activities

- Upcoming events

- Recent activity

- Recommended knowledge

- Notifications

- Frequently accessed sections



### 3. Knowledge Hub



A centralized space for discovering university learning resources.



The current frontend prototype supports:



- Resource search

- Category filtering

- Bookmark interaction

- Resource cards



The planned implementation will extend this into semantic search and AI-powered knowledge retrieval.



### 4. Clubs \& Communities



A dedicated space for discovering and participating in student clubs and communities.



The current frontend supports:



- Club discovery

- Search

- Category filtering

- Join/Joined interaction



### 5. Events \& Activities



A centralized event discovery and registration interface.



The current frontend supports:



- Event discovery

- Search

- Category filtering

- Registration interaction

- Event details



### 6. Profile \& Preferences



A personalized student profile containing:



- Personal information

- Academic information

- Activity statistics

- Knowledge preferences

- Event preferences

- Notification preferences



---



## Technology Stack



### Frontend



- React.js

- TypeScript

- Vite

- Tailwind CSS

- shadcn/ui

- React Router



### Backend



Planned:



- Python

- FastAPI

- WebSockets



### Database



Planned:



- PostgreSQL

- pgvector



### AI / Machine Learning



Planned:



- OpenAI API

- LangChain

- Sentence Transformers

- Retrieval-Augmented Generation (RAG)

- Semantic Search

- Recommendation System



### Authentication \& Security



Planned:



- JWT

- Secure authentication and authorization

- Protected application routes



---



## Frontend Architecture



The current frontend follows a component-based structure:



```text

frontend/

â”œâ”€â”€ public/

â”œâ”€â”€ src/

â”‚   â”œâ”€â”€ components/

â”‚   â”‚   â”œâ”€â”€ clubs/

â”‚   â”‚   â”œâ”€â”€ dashboard/

â”‚   â”‚   â”œâ”€â”€ events/

â”‚   â”‚   â”œâ”€â”€ knowledge/

â”‚   â”‚   â”œâ”€â”€ layout/

â”‚   â”‚   â”œâ”€â”€ profile/

â”‚   â”‚   â””â”€â”€ ui/

â”‚   â”‚

â”‚   â”œâ”€â”€ pages/

â”‚   â”‚   â”œâ”€â”€ Clubs/

â”‚   â”‚   â”œâ”€â”€ Dashboard/

â”‚   â”‚   â”œâ”€â”€ Events/

â”‚   â”‚   â”œâ”€â”€ KnowledgeHub/

â”‚   â”‚   â”œâ”€â”€ Login/

â”‚   â”‚   â””â”€â”€ Profile/

â”‚   â”‚

â”‚   â”œâ”€â”€ lib/

â”‚   â”œâ”€â”€ App.tsx

â”‚   â”œâ”€â”€ index.css

â”‚   â””â”€â”€ main.tsx

â”‚

â”œâ”€â”€ components.json

â”œâ”€â”€ package.json

â”œâ”€â”€ tsconfig.json

â””â”€â”€ vite.config.ts

```



The architecture is designed to support future separation of:



- UI components

- Application pages

- Shared types

- API services

- Authentication

- AI services

- Data access



---



## Application Routes



The current frontend provides the following routes:



| Route | Module |

|---|---|

| `/login` | Login |

| `/dashboard` | Dashboard |

| `/knowledge-hub` | Knowledge Hub |

| `/clubs` | Clubs \& Communities |

| `/events` | Events \& Activities |

| `/profile` | Profile \& Preferences |



> The current login page is a frontend placeholder. Real authentication and protected routes will be implemented with the backend authentication system.



---



## Running the Project Locally



### Prerequisites



Make sure the following are installed:



- Node.js

- npm

- Git



### Clone the repository



```bash

git clone https://github.com/Kanishka01-web/UNIHUB.git

cd UNIHUB

```



### Navigate to the frontend



```bash

cd frontend

```



### Install dependencies



```bash

npm install

```



### Start the development server



```bash

npm run dev

```



The application will normally be available at:



```text

http://localhost:5173

```



### Build for production



```bash

npm run build

```



---



## Development Roadmap



The project is being developed incrementally.



### Phase 1 - Frontend Foundation



- \[x] Project initialization

- \[x] React + TypeScript setup

- \[x] Tailwind CSS setup

- \[x] shadcn/ui setup

- \[x] Routing

- \[x] Reusable component architecture

- \[x] Dashboard UI

- \[x] Knowledge Hub UI

- \[x] Clubs UI

- \[x] Events UI

- \[x] Profile UI



### Phase 2 - Backend \& Authentication



- \[ ] FastAPI backend

- \[ ] PostgreSQL database

- \[ ] Database schema

- \[ ] User authentication

- \[ ] JWT authorization

- \[ ] Protected routes

- \[ ] REST API integration



### Phase 3 - Knowledge \& AI Layer



- \[ ] pgvector integration

- \[ ] Document/resource ingestion

- \[ ] Embedding generation

- \[ ] Sentence Transformer integration

- \[ ] Semantic search

- \[ ] RAG pipeline

- \[ ] OpenAI API integration

- \[ ] AI-powered knowledge assistant

- \[ ] Personalized recommendation system



### Phase 4 - Real-Time Features



- \[ ] WebSocket integration

- \[ ] Real-time notifications

- \[ ] Live event/activity updates



### Phase 5 - Integration \& Deployment



- \[ ] Frontend-backend integration

- \[ ] End-to-end testing

- \[ ] Security review

- \[ ] Performance optimization

- \[ ] Deployment

- \[ ] Production configuration



---



## Project Structure



The repository is organized to accommodate the complete UNIHUB system:



```text

UNIHUB/

â”œâ”€â”€ frontend/       # React + TypeScript frontend

â”œâ”€â”€ backend/        # Planned FastAPI backend

â”œâ”€â”€ database/       # Planned database layer

â”œâ”€â”€ ai/             # Planned AI/ML and RAG components

â”œâ”€â”€ docs/           # Project documentation

â”œâ”€â”€ .gitignore

â””â”€â”€ README.md

```



At the current stage, the `frontend/` directory is the primary implemented application layer. The remaining directories will be introduced as their respective modules are developed.



---



## Project Goals



UNIHUB is being developed as a practical full-stack and AI-focused university platform demonstrating the integration of:



- Modern frontend development

- RESTful backend architecture

- Relational databases

- Vector databases

- Semantic information retrieval

- Retrieval-Augmented Generation

- Recommendation systems

- Real-time communication

- Secure authentication



The long-term objective is to combine these technologies into a unified student knowledge and engagement platform.



---



## Development Status



**Current milestone:** Frontend foundation completed and published to GitHub.



The project is intentionally being developed in stages, with the frontend established first before integrating the backend, database, authentication, and AI layers.


