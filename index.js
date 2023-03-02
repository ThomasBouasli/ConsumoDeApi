async function getClients() {
  const response = await fetch("http://demo6097245.mockable.io/clients");
  const data = await response.json();

  const table = document.getElementById("clients-table");

  for (let i = 0; i < data.length; i++) {
    const row = table.insertRow(i + 1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);

    cell1.innerHTML = data[i].name;
    cell2.innerHTML = data[i].address;
    cell3.innerHTML = data[i].phone;
  }

  return data;
}

async function getVehicle() {
  const response = await fetch("http://demo6097245.mockable.io/vehicles");
  const data = await response.json();

  const table = document.getElementById("vehicles-table");

  for (let i = 0; i < data.length; i++) {
    const row = table.insertRow(i + 1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);

    cell1.innerHTML = data[i].brand;
    cell2.innerHTML = data[i].model;
    cell3.innerHTML = data[i].year;
    cell4.innerHTML = data[i].plate;
  }

  return data;
}

async function getSubjects() {
  const response = await fetch("http://demo6097245.mockable.io/subjects");
  const data = await response.json();

  console.log(data);

  const table = document.getElementById("subjects-table");

  for (let i = 0; i < data.length; i++) {
    const row = table.insertRow(i + 1);
    const cell1 = row.insertCell(0);

    cell1.innerHTML = data[i].name;
  }

  return data;
}
