# Schedula – Doctor Appointment Booking API

A NestJS-powered REST API for booking and managing doctor appointments.

## Tech Stack
- **Framework**: NestJS (TypeScript)
- **Database**: PostgreSQL + TypeORM
- **Validation**: class-validator / class-transformer

## Getting Started

### Prerequisites
- Node.js v18+
- PostgreSQL running locally

### Installation

```bash
# Clone the repository
git clone https://github.com/mrlazy004/schedula-beera.git
cd schedula-beera

# Install dependencies
npm install

# Copy environment file and fill in your values
cp .env.example .env
```

### Environment Variables (`.env`)
```
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_NAME=schedula_db
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
```

### Run the App
```bash
# Development (hot reload)
npm run start:dev

# Production
npm run build
npm run start:prod
```

App runs at: `http://localhost:3000/api/v1`

### Health Check
```
GET http://localhost:3000/api/v1/health
```

## Project Structure
```
src/
├── config/              # DB & app configuration
├── modules/
│   ├── auth/            # Authentication (JWT)
│   ├── users/           # Base user entity
│   ├── doctors/         # Doctor profile & availability
│   ├── patients/        # Patient profile
│   ├── appointments/    # Appointment booking
│   ├── slots/           # Doctor time slots
│   └── notifications/   # Notification system
└── common/              # Guards, filters, interceptors
```

## API Modules (Planned)
| Module        | Description                          |
|---------------|--------------------------------------|
| Auth          | Register, Login, JWT                 |
| Users         | Shared user base                     |
| Doctors       | Profile, specialization, availability|
| Patients      | Patient profile                      |
| Appointments  | Book, cancel, reschedule             |
| Slots         | Doctor time slot management          |
| Notifications | Email/in-app notifications           |
