Hello!

# Angular Movie and Country App

## Introduction

This project is an Angular application that provides functionality for displaying information about movies and countries. It includes features for searching movies and countries, displaying random holidays, and viewing country details.

## Features

- **Country Search:** Search for countries by name.
- **Holiday Display:** Show holidays for randomly selected countries.
- **Country Details:** View information about a selected country and holidays for the current year.
- **Year Switching:** Change the year to view holidays in different years.

## Installation

1. Clone the repository:
    git clone https://github.com/cllown/test-project-country.git
    cd test-project-country

2. Install dependencies:
    npm install


## Running and Building

1. Run the application in development mode:
    npm start

    The application will be available at `http://localhost:4200`.

2. Build the application for production:
    npm run build

    The build will be created in the `dist/` folder.

## Architecture

The application is built using Angular and includes the following key components:

- **Components**:
  - `HomePageComponent`: The main page with functionality for searching countries and displaying random holidays.
  - `CountryDetailsPageComponent`: The page displaying details of the selected country and holidays for the selected year.
  - `ListboxComponent`: A component for displaying a list of countries with selection functionality.

- **Services**:
  - `CountryService`: A service for fetching country and holiday data.

- **Models**:
  - `CountryInfo`: Information about a country.
  - `Holiday`: Information about holidays.

- **Routing**:
  - Configured to navigate between the home page and country details page.

## Libraries and Frameworks

- **Angular**: Core framework for building the application.
- **PrimeNG**: UI component library used for various components like `p-card`, `p-listbox`, etc.
- **RxJS**: For handling asynchronous operations and data streams.
- **Nager.Date API**: Provides holiday data used in the application.
