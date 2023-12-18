/*     1. Data Ingestion:
        ◦ Assume you have two mock data sources, each representing an insurance broker, providing data in CSV format (sample data provided below).
        ◦ Build a data ingestion mechanism to read data from these sources. You can use a hard-coded dataset or file paths. */
/*
      let allRows = [];

      async function fileToLines(file) {
        return new Promise((resolve, reject) => {
          reader = new FileReader();
          reader.onload = function (e) {
            parsedLines = e.target.result.split(/\r|\n|\r\n/);
            resolve(parsedLines);
          };
          reader.readAsText(file);
        });
      }

      document
      .getElementById('fileInput')
      .addEventListener('change', async function (e) {
        var file = e.target.files[0];
    
        if (file != undefined) {
          fileToLines(file).then(async id => {
            var idFiltered = id.filter(function (v) { return v !== '' });
            if (file != undefined) {
              allRows = [];
            }

            for (let id of idFiltered) {
              allRows.push(parsedLines);
            }

          });
        }
      }); 

      */

const rows = [];
const arr = [];

function csvToArray(str, delimiter = ",") {

  const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
  rows = str.slice(str.indexOf("\n") + 1).split("\n");

  arr = rows.map(function (row) {
    const values = row.split(delimiter);
    const element = headers.reduce(function (object, header, index) {
      object[header] = values[index];
      return object;
    }, {});
    return element;
  });

  return arr;
}

// reader.onload = function (e) {
//   const text = e.target.result;
//   const data = csvToArray(text);
//   document.write(JSON.stringify(data));
// };

function generateTable() {
  let table = document.createElement('table');
  for (const row of rows) {
    table.insertRow();
    for (let cell of row) {

      let newCell = table.rows[table.rows.length - 1].insertCell();
      newCell.textContent = cell;
    }
  }
  document.body.appendChild(table);
}

function iterateCSVArray() {
  for (element of arr) {
    document.body.appendChild(element);
  }
}

function generateTable2() {
  // creates a <table> element and a <tbody> element
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");

  // creating all cells
  for (let i = 0; i < 2; i++) {
    // creates a table row
    const row = document.createElement("tr");

    for (let j = 0; j < 2; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell = document.createElement("td");
      const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  document.body.appendChild(tbl);
  // sets the border attribute of tbl to '2'
  tbl.setAttribute("border", "2");
}





/*   2. Data Normalisation:
       ◦ Parse the data from each source and transform it into a common data structure that can be easily processed and analysed.
       ◦ Standardise common fields such as policy number, insured amount, customer, start date, end date, etc.
       ◦ Handle differences in data structure across different formats. */


/*    3. Data Aggregation:
        ◦ Aggregate the normalised data from all sources into a single collection. */


/*    4. Basic Reporting:
        ◦ Calculate and display the total count of policies, count of customers, the sum of insured amounts, and the average policy duration (in days) across the two brokers for active policies. The broker considers an active policy to be where the start date has passed and the renewal date is in the future.
        ◦ Allow the user to input a broker's name or ID and display the policies associated with that broker. */


/*    5. Unit Testing:
        ◦ Use a testing framework of your choice (e.g. PHPUnit, JUnit, NUnit, pytest) to create and run tests.
        ◦ Aim to achieve good coverage of your codebase with meaningful tests. */