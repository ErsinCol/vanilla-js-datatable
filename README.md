# Dynamic DataTable Project

This project is a dynamic data table built using Vanilla JavaScript.

The data for the table is fetched from the [Fake Store API](https://fakestoreapi.com/) using [axios](https://www.npmjs.com/package/axios).

The table includes a search input field allowing case-sensitive filtering of data.

The design is responsive, ensuring it looks good on all devices.

Users can sort the table based on each column.

Additionally, the table can be exported to Excel and PDF formats using the following packages:

- [xlsx](https://www.npmjs.com/package/xlsx)
- [jspdf](https://www.npmjs.com/package/jspdf)

The project is structured using [Webpack](https://webpack.js.org/).

## Installation and Usage

Clone the project repository:

```
git clone https://github.com/ErsinCol/vanilla-js-datatable.git
```

Navigate to the project directory:

```
cd vanilla-js-datatable
```

Install dependencies:

```
npm install
```

Build the project:

```
npm run build
```

Start the development server:

```
npm run start
```

Access the project in your browser by visiting http://localhost:8080
