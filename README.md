# BookingBusLine

A modern bus ticket booking system built with Angular, featuring state management with NgRx and Material UI components.

## Prerequisites

Before you begin, ensure you have met the following requirements:
* Node.js version 18.19.1 or higher (recommended: Node.js 20 LTS)
* npm version 8.0.0 or higher
* Angular CLI version 18.x

## Technology Stack

* Angular 18.2.13
* Angular Material 18.2.13
* NgRx Store 18.0.0
* Express.js 4.21.2
* TypeScript 5.5.4

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
cd BookingBusLine
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Available Scripts

* `npm start` - Starts the development server
* `npm run build` - Builds the project
* `npm run watch` - Builds the project in watch mode
* `npm test` - Executes unit tests via Karma
* `npm run e2e` - Executes end-to-end tests
* `npm run serve:ssr:BookingBusLine` - Serves the application with Server-Side Rendering

## Project Structure

```
src/
├── app/                    # Application source code
├── assets/                 # Static assets
└── environments/          # Environment configurations
```

## Development Guidelines

### Code Scaffolding

Generate new components, services, pipes, and more using Angular CLI:

```bash
ng generate component component-name
ng generate service service-name
ng generate pipe pipe-name
```

Available generators:
* component
* directive
* pipe
* service
* class
* guard
* interface
* enum
* module

### Building for Production

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running Tests

* Unit Tests: `npm test` - Executes the unit tests via Karma
* E2E Tests: `npm run e2e` - Executes the end-to-end tests

## SSR (Server-Side Rendering)

This application supports Server-Side Rendering using Angular Universal. To run the SSR version:

1. Build the SSR version:
```bash
npm run build:ssr
```

2. Start the SSR server:
```bash
npm run serve:ssr:BookingBusLine
```

## State Management

The application uses NgRx for state management. Store modules can be found in the respective feature modules.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Additional Help

* For Angular CLI help: `ng help`
* [Angular CLI Overview and Command Reference](https://angular.io/cli)
* [Angular Documentation](https://angular.io/docs)
* [NgRx Documentation](https://ngrx.io/docs)
* [Angular Material Documentation](https://material.angular.io/)
